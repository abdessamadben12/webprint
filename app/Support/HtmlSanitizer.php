<?php

namespace App\Support;

use DOMDocument;
use DOMElement;
use DOMNode;

/**
 * Nettoie le HTML produit par l'editeur riche des articles.
 * Liste blanche de balises, d'attributs et de proprietes CSS : tout le reste est retire
 * (scripts, gestionnaires d'evenements, URLs javascript:, iframes...).
 */
class HtmlSanitizer
{
    private const ALLOWED_TAGS = [
        'p', 'br', 'h1', 'h2', 'h3', 'h4', 'strong', 'b', 'em', 'i', 'u', 's', 'mark', 'span',
        'ul', 'ol', 'li', 'a', 'img', 'blockquote', 'hr', 'div', 'code', 'pre', 'figure', 'figcaption',
    ];

    /** Balises supprimees avec leur contenu. */
    private const DROP_WITH_CONTENT = ['script', 'style', 'iframe', 'object', 'embed', 'form', 'input', 'button', 'textarea', 'select', 'svg', 'math', 'noscript', 'template'];

    private const ALLOWED_ATTRIBUTES = [
        '*' => ['style'],
        'a' => ['href', 'target', 'rel', 'title'],
        'img' => ['src', 'alt', 'title', 'width', 'height', 'loading'],
        'div' => ['data-spacer', 'data-size'],
        'mark' => ['data-color'],
        'ol' => ['start'],
    ];

    private const ALLOWED_CSS = ['color', 'background-color', 'text-align', 'height', 'width', 'max-width'];

    public static function clean(?string $html): string
    {
        if ($html === null || trim($html) === '') {
            return '';
        }

        $document = new DOMDocument('1.0', 'UTF-8');
        $previous = libxml_use_internal_errors(true);
        $document->loadHTML(
            '<?xml encoding="UTF-8"><!DOCTYPE html><html><body><div id="__root">'.$html.'</div></body></html>',
            LIBXML_HTML_NODEFDTD | LIBXML_NONET
        );
        libxml_clear_errors();
        libxml_use_internal_errors($previous);

        $root = $document->getElementById('__root');
        if (! $root) {
            return '';
        }

        static::cleanChildren($root);

        $output = '';
        foreach ($root->childNodes as $child) {
            $output .= $document->saveHTML($child);
        }

        return trim($output);
    }

    private static function cleanChildren(DOMNode $node): void
    {
        foreach (iterator_to_array($node->childNodes) as $child) {
            if ($child->nodeType === XML_COMMENT_NODE || $child->nodeType === XML_PI_NODE) {
                $node->removeChild($child);

                continue;
            }

            if (! $child instanceof DOMElement) {
                continue;
            }

            $tag = strtolower($child->tagName);

            if (in_array($tag, self::DROP_WITH_CONTENT, true)) {
                $node->removeChild($child);

                continue;
            }

            static::cleanChildren($child);

            if (! in_array($tag, self::ALLOWED_TAGS, true)) {
                // Balise inconnue : on garde son contenu, on retire l'enveloppe.
                while ($child->firstChild) {
                    $node->insertBefore($child->firstChild, $child);
                }
                $node->removeChild($child);

                continue;
            }

            static::cleanAttributes($child, $tag);
        }
    }

    private static function cleanAttributes(DOMElement $element, string $tag): void
    {
        $allowed = array_merge(self::ALLOWED_ATTRIBUTES['*'], self::ALLOWED_ATTRIBUTES[$tag] ?? []);

        foreach (iterator_to_array($element->attributes) as $attribute) {
            $name = strtolower($attribute->name);

            if (! in_array($name, $allowed, true)) {
                $element->removeAttribute($attribute->name);

                continue;
            }

            $value = trim($attribute->value);

            if ($name === 'style') {
                $style = static::cleanStyle($value);
                $style === '' ? $element->removeAttribute('style') : $element->setAttribute('style', $style);
            } elseif (in_array($name, ['href', 'src'], true) && ! static::isSafeUrl($value, $name === 'src')) {
                $element->removeAttribute($attribute->name);
            }
        }

        if ($tag === 'a' && $element->getAttribute('target') === '_blank') {
            $element->setAttribute('rel', 'noopener noreferrer');
        }

        if ($tag === 'img') {
            if (! $element->hasAttribute('src')) {
                $element->parentNode?->removeChild($element);

                return;
            }
            $element->setAttribute('loading', 'lazy');
        }
    }

    private static function cleanStyle(string $style): string
    {
        $rules = [];

        foreach (explode(';', $style) as $declaration) {
            [$property, $value] = array_pad(array_map('trim', explode(':', $declaration, 2)), 2, '');
            $property = strtolower($property);

            if ($property === '' || $value === '' || ! in_array($property, self::ALLOWED_CSS, true)) {
                continue;
            }

            // Valeurs simples uniquement : couleurs, longueurs, mots-cles.
            if (! preg_match('/^[#a-zA-Z0-9.,%()\s-]+$/', $value) || preg_match('/(url|expression)\s*\(/i', $value)) {
                continue;
            }

            $rules[] = "{$property}: {$value}";
        }

        return implode('; ', $rules);
    }

    private static function isSafeUrl(string $url, bool $isImage): bool
    {
        if ($url === '') {
            return false;
        }

        if (str_starts_with($url, '/') || str_starts_with($url, '#')) {
            return ! str_starts_with($url, '//') || $isImage;
        }

        $scheme = strtolower((string) parse_url($url, PHP_URL_SCHEME));

        return $isImage
            ? in_array($scheme, ['http', 'https'], true)
            : in_array($scheme, ['http', 'https', 'mailto', 'tel'], true);
    }
}

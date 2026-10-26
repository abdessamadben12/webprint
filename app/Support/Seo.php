<?php

namespace App\Support;

use Illuminate\Http\Request;

/**
 * Balises SEO rendues cote serveur dans app.blade.php, pour que Google et les outils
 * d'analyse les voient sans executer le JavaScript. Les textes viennent de
 * resources/js/data/seo.json, le meme fichier que le composant React SeoHead.
 * Les balises portent l'attribut "inertia" : React les remplace au chargement, sans doublon.
 */
class Seo
{
    private static ?array $data = null;

    public static function data(): array
    {
        return self::$data ??= json_decode(file_get_contents(resource_path('js/data/seo.json')), true);
    }

    /** URL absolue d'un chemin du site (utilisee par le sitemap). */
    public static function url(string $path = '/'): string
    {
        return rtrim(self::data()['siteUrl'], '/').'/'.ltrim($path, '/');
    }

    /**
     * @param  array<string, mixed>|null  $override  Valeurs fournies par un controleur (ex. un article).
     * @return array<string, mixed>|null
     */
    public static function forRequest(Request $request, ?array $override = null): ?array
    {
        $data = self::data();
        $routeName = $request->route()?->getName() ?? '';

        $page = $override
            ?? $data['pages'][$routeName]
            ?? (str_starts_with($routeName, 'service.') ? ($data['services'][substr($routeName, 8)] ?? null) : null);

        if ($page === null) {
            return null;
        }

        // Adresse officielle unique (sans www) : evite que www et sans-www soient indexes comme deux sites.
        $baseUrl = rtrim($data['siteUrl'], '/');
        $image = $page['image']
            ?? (str_starts_with($routeName, 'service.') ? (ServicePages::IMAGES[substr($routeName, 8)] ?? null) : null)
            ?? $data['defaultImage'];

        return [
            'title' => $page['title'],
            'description' => $page['description'],
            'keywords' => implode(', ', array_values(array_unique(array_filter([...($page['keywords'] ?? []), ...$data['defaultKeywords']])))),
            'image' => str_starts_with($image, 'http') ? $image : $baseUrl.'/'.ltrim($image, '/'),
            'canonical' => $page['canonical'] ?? $baseUrl.'/'.ltrim($request->path(), '/'),
            'type' => $page['type'] ?? 'website',
            'noindex' => $page['noindex'] ?? false,
            'siteName' => $data['siteName'],
        ];
    }

    /** Balises deja imprimees par app.blade.php a partir de forRequest(). */
    private const SERVER_META = [
        'description', 'keywords', 'robots', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image',
        'og:locale', 'og:type', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:image', 'og:image:type',
    ];

    /**
     * Head rendu par le SSR (composant SeoHead) sans les balises deja imprimees par Blade :
     * Blade reste la source unique du title, de la description, du canonical et de l'Open Graph,
     * on ne garde du SSR que ses ajouts (JSON-LD, og:image:alt, twitter:site...).
     */
    public static function withoutServerTags(string $ssrHead): string
    {
        return preg_replace_callback('/<title\b[^>]*>.*?<\/title>|<(?:meta|link)\b[^>]*>\n?/s', function (array $match) {
            $tag = $match[0];

            if (str_starts_with($tag, '<title') || preg_match('/\brel="canonical"/', $tag)) {
                return '';
            }

            return preg_match('/\b(?:name|property)="([^"]+)"/', $tag, $key) && in_array($key[1], self::SERVER_META, true) ? '' : $tag;
        }, $ssrHead);
    }
}

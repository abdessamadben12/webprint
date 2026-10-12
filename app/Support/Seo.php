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

        $baseUrl = rtrim($request->getSchemeAndHttpHost(), '/');
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
}

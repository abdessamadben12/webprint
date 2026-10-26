<?php

namespace App\Support;

/**
 * Pages services accessibles a la racine du site (/impression-numerique, ...).
 * Le contenu de chaque page est defini dans resources/js/data/services.ts (meme slug).
 */
class ServicePages
{
    public const IMAGES = [
        'habillage-vehicule' => '/images/services/habillage-vehicule-casablanca.webp',
        'balisage-chantier' => '/images/services/palissade-chantier-casablanca.webp',
        'impression-vinyle' => '/images/services/impression-vinyle-casablanca.webp',
        'impression-baches' => '/images/services/impression-bache-casablanca.webp',
        'impression-vitrine' => '/images/services/habillage-vitrine-casablanca.webp',
    ];

    public const SLUGS = [
        'impression-numerique',
        'impression-grand-format',
        'industrie-publicitaire',
        'habillage-vehicule',
        'balisage-chantier',
        'impression-vinyle',
        'design-graphique',
        'impression-baches',
        'impression-vitrine',
    ];

    /** Noms affiches des services (memes titres que resources/js/data/services.ts), utilises par /llms.txt. */
    public const TITLES = [
        'impression-numerique' => 'Impression numérique',
        'impression-grand-format' => 'Impression grand format',
        'industrie-publicitaire' => 'Industrie publicitaire',
        'habillage-vehicule' => 'Habillage de véhicule',
        'balisage-chantier' => 'Palissades de chantier',
        'impression-vinyle' => 'Impression vinyle',
        'design-graphique' => 'Design graphique',
        'impression-baches' => 'Impression de bâches',
        'impression-vitrine' => 'Habillage de vitrine',
    ];

    /** Anciennes URLs /services/{slug} redirigees en 301 pour conserver le referencement. */
    public const LEGACY_REDIRECTS = [
        'impression-offset' => 'impression-numerique',
        'impression-numerique' => 'impression-numerique',
        'grand-format' => 'impression-grand-format',
        'plv-industrie-publicitaire' => 'industrie-publicitaire',
        'stand-exposition' => 'industrie-publicitaire',
        'design-graphique' => 'design-graphique',
        'publicite-par-objet' => 'industrie-publicitaire',
    ];

    public static function legacyTarget(string $slug): string
    {
        if (in_array($slug, self::SLUGS, true)) {
            return '/'.$slug;
        }

        return isset(self::LEGACY_REDIRECTS[$slug]) ? '/'.self::LEGACY_REDIRECTS[$slug] : '/services';
    }
}

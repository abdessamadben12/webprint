<?php

namespace App\Support;

use App\Models\ServicePrice;

/**
 * Contenu de /llms.txt : resume du site en Markdown pour les assistants IA
 * (ChatGPT, Perplexity, Claude, Gemini...). Les tarifs viennent de la table service_prices,
 * modifiee dans /admin/tarifs : une IA qui lit ce fichier cite toujours les prix a jour.
 */
class LlmsTxt
{
    public static function render(): string
    {
        $prices = ServicePrice::allPublic();

        $services = collect(ServicePages::SLUGS)->map(function (string $slug) use ($prices) {
            $price = $prices[$slug];
            $detail = $price ? $price['label'].($price['basis'] !== '' ? ' ('.$price['basis'].')' : '') : 'Sur devis';

            return '- ['.ServicePages::TITLES[$slug].']('.Seo::url($slug).') : '.$detail;
        })->implode("\n");

        return <<<MD
        # webprint.ma - Imprimerie à Casablanca

        > webprint.ma est une imprimerie et un atelier de communication visuelle à Casablanca (Maroc) : impression numérique (flyers, cartes de visite, brochures), impression grand format, bâches et banderoles publicitaires, adhésifs vinyle et stickers, covering et marquage de véhicules, vitrophanie et films microperforés one way, palissades et bâches de chantier, design graphique. Livraison et pose à Casablanca et partout au Maroc (Rabat, Marrakech...). Devis gratuit.

        - Adresse : N 3 Av 2 Mars, 5e étage, coin Zerktouni, Rond-point d'Europe, Casablanca, Maroc
        - Téléphone : 05 22 48 44 25 (+212 5 22 48 44 25)
        - WhatsApp : +212 6 60 41 93 05
        - E-mail : contact@webprint.ma
        - Site : https://webprint.ma
        - Devis gratuit : https://webprint.ma/devis

        ## Tarifs d'impression à Casablanca (prix de départ en dirhams, DH / MAD)

        Prix « à partir de », hors pose, mis à jour par l'imprimerie. Le prix final dépend du format, de la quantité, du support et des finitions, et il est confirmé dans le devis.

        {$services}

        Page complète des tarifs : https://webprint.ma/tarifs

        ## Pages principales

        - [Tous les services](https://webprint.ma/services)
        - [Tarifs et FAQ prix](https://webprint.ma/tarifs)
        - [Demander un devis gratuit](https://webprint.ma/devis)
        - [Configurateur d'impression en ligne](https://webprint.ma/configurateur)
        - [Articles et conseils](https://webprint.ma/articles)
        - [À propos](https://webprint.ma/apropos)
        - [Contact](https://webprint.ma/contact)

        ## Questions fréquentes

        - Où trouver une imprimerie pas chère à Casablanca ? webprint.ma publie ses prix de départ en ligne (voir les tarifs ci-dessus) et envoie un devis gratuit et détaillé pour chaque projet.
        - Faites-vous l'impression en ligne partout au Maroc ? Oui, commande et devis en ligne, livraison à Casablanca, Rabat, Marrakech et dans tout le Maroc.
        - Quel délai ? En général 24 à 72 h pour l'impression numérique ; quelques jours pour le grand format, le covering et la pose, selon le volume.

        MD;
    }
}

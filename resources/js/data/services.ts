import { Brush, Car, Construction, Flag, Layers, type LucideIcon, MonitorUp, Scissors, Store, Tent } from 'lucide-react';

// Source unique des pages services.
// Chaque slug correspond a une URL a la racine du site (ex. /impression-numerique)
// et doit aussi figurer dans app/Support/ServicePages.php (routes + sitemap).
// Pour changer une image : remplacer le chemin ci-dessous (fichiers dans public/images).
const serviceImages = {
    numerique: '/images/services/a (2).png',
    grandFormat: '/images/services/015e5ae8b9c361586b96e37380522871.jpg',
    publicitaire: '/images/services/a (3).png',
    vehicule: '/images/services/habillage-vehicule-casablanca.webp',
    chantier: '/images/services/palissade-chantier-casablanca.webp',
    vinyle: '/images/services/impression-vinyle-casablanca.webp',
    design: '/images/services/a (4).png',
    baches: '/images/services/impression-bache-casablanca.webp',
    vitrine: '/images/services/habillage-vitrine-casablanca.webp',
    rotative: '/images/gallery/image6.png',
    encres: '/images/gallery/image2.png',
    etiquettes: '/images/gallery/image5.png',
} as const;

export interface ServiceAdvantage {
    title: string;
    text: string;
}

export interface ServiceDetail {
    slug: string;
    title: string;
    /** Accroche courte affichee au-dessus du titre. */
    tagline: string;
    /** Resume utilise dans les cartes et le hero. */
    description: string;
    /** Paragraphes de la section « Presentation du service ». */
    intro: string[];
    imageUrl: string;
    imageAlt: string;
    icon: LucideIcon;
    advantages: ServiceAdvantage[];
    /** Types de prestations proposees. */
    prestations: string[];
    materials: string[];
    gallery: { src: string; caption: string }[];
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
}

export const services: ServiceDetail[] = [
    {
        slug: 'impression-numerique',
        title: 'Impression numérique',
        tagline: 'Rapide, précise, personnalisable',
        description:
            'Flyers, cartes de visite, brochures, dépliants et documents personnalisés imprimés en haute définition, en petites et moyennes séries, avec des délais courts.',
        intro: [
            "L'impression numérique est la solution idéale pour vos supports de communication du quotidien : cartes de visite, flyers, brochures, menus, invitations, chemises ou rapports. Sans calage ni plaques, elle permet de lancer une production en quelques heures, de la première unité à plusieurs milliers d'exemplaires.",
            'Notre atelier à Casablanca est équipé de presses numériques couleur haute définition qui garantissent des aplats réguliers, des textes nets et des couleurs fidèles à votre charte. Chaque fichier est contrôlé avant impression et nous vous conseillons sur le papier, le grammage et les finitions les plus adaptés.',
        ],
        imageUrl: serviceImages.numerique,
        imageAlt: 'Calendriers et documents couleur en impression numérique chez webprint.ma à Casablanca',
        icon: MonitorUp,
        advantages: [
            { title: 'Délais express', text: 'Production en 24 à 72 h selon la quantité et les finitions.' },
            { title: 'Dès 1 exemplaire', text: 'Petites séries rentables, sans coût de calage.' },
            { title: 'Personnalisation', text: 'Données variables : noms, numéros, QR codes, adresses.' },
            { title: 'Couleurs fidèles', text: 'Calibration régulière et contrôle qualité avant livraison.' },
        ],
        prestations: [
            'Cartes de visite et cartes de correspondance',
            'Flyers, dépliants et brochures',
            'Catalogues, rapports et documents reliés',
            'Menus, invitations et faire-part',
            'Chemises à rabats, têtes de lettre et enveloppes',
            'Étiquettes et autocollants en feuilles',
        ],
        materials: [
            'Papiers couchés mat et brillant de 90 à 400 g',
            'Papiers de création et recyclés',
            'Pelliculage, vernis sélectif, pliage, reliure',
        ],
        gallery: [
            { src: serviceImages.numerique, caption: 'Calendriers et documents couleur' },
            { src: serviceImages.etiquettes, caption: 'Étiquettes et autocollants' },
        ],
        metaTitle: 'Impression numérique à Casablanca | Flyers, cartes, brochures - webprint.ma',
        metaDescription:
            'Imprimerie numérique à Casablanca : cartes de visite, flyers, brochures et documents personnalisés en haute définition. Délais express et devis gratuit.',
        keywords: ['impression numérique Casablanca', 'imprimerie numérique Maroc', 'impression flyers Casablanca', 'cartes de visite Casablanca'],
    },
    {
        slug: 'impression-grand-format',
        title: 'Impression grand format',
        tagline: 'Des visuels qui se voient de loin',
        description:
            "Affiches, kakémonos, roll-up, panneaux rigides et toiles imprimés jusqu'à plusieurs mètres de large pour vos salons, magasins et campagnes d'affichage.",
        intro: [
            "L'impression grand format donne de l'impact à votre marque là où vos clients passent : points de vente, salons, façades, événements ou bureaux. Nous imprimons sur supports souples et rigides avec des encres adaptées à l'intérieur comme à l'extérieur.",
            "Du simple poster au panneau composite de plusieurs mètres, nous prenons en charge l'adaptation de vos fichiers, l'impression, la découpe et la pose si nécessaire. Vous obtenez des visuels lumineux, nets et durables, prêts à être installés.",
        ],
        imageUrl: serviceImages.grandFormat,
        imageAlt: 'Traceur d’impression grand format en production dans l’atelier webprint.ma',
        icon: Flag,
        advantages: [
            { title: 'Très grandes dimensions', text: 'Laizes jusqu’à 3,20 m et assemblage pour les formats hors normes.' },
            { title: 'Intérieur & extérieur', text: 'Encres résistantes aux UV et à l’humidité pour l’affichage extérieur.' },
            { title: 'Supports variés', text: 'Papier, toile, PVC, forex, dibond, carton plume, textile.' },
            { title: 'Pose possible', text: 'Notre équipe installe vos visuels sur site à Casablanca et au Maroc.' },
        ],
        prestations: [
            'Affiches et posters grand format',
            'Roll-up, kakémonos et X-banners',
            'Panneaux rigides PVC, forex et dibond',
            'Toiles canvas et tableaux décoratifs',
            'Décoration murale et habillage de bureaux',
            'Plans, tirages techniques et présentations',
        ],
        materials: ['Papier photo et papier dos bleu', 'PVC expansé, forex, dibond, carton plume', 'Toile canvas, textile et films adhésifs'],
        gallery: [
            { src: serviceImages.grandFormat, caption: 'Impression grand format' },
            { src: serviceImages.vehicule, caption: 'Visuels haute définition' },
        ],
        metaTitle: 'Impression grand format à Casablanca | Affiches, roll-up, panneaux - webprint.ma',
        metaDescription:
            "Impression grand format au Maroc : affiches, roll-up, kakémonos, panneaux rigides et visuels pour l'intérieur comme l'extérieur. Fabrication et pose à Casablanca.",
        keywords: ['impression grand format Casablanca', 'roll-up Maroc', 'kakémono Casablanca', 'panneau publicitaire Maroc'],
    },
    {
        slug: 'industrie-publicitaire',
        title: 'Industrie publicitaire',
        tagline: 'Les supports de vos campagnes',
        description:
            'Production des supports imprimés de vos campagnes publicitaires : affichage, visuels pour salons et événements, kits multi-supports, de la préparation des fichiers à la pose.',
        intro: [
            'Nous accompagnons les annonceurs, les agences de communication et les entreprises dans la production des supports de leurs campagnes publicitaires. Affichage urbain, lancement de produit, événement ou salon professionnel : nous transformons votre campagne en supports imprimés prêts à diffuser.',
            "Nous coordonnons la préparation des fichiers, l'impression sur le support adapté, les finitions et la pose. Votre campagne garde un rendu homogène sur tous ses points de contact et elle est livrée dans les délais de votre lancement.",
        ],
        imageUrl: serviceImages.publicitaire,
        imageAlt: 'Visuels publicitaires imprimés pour un salon professionnel par webprint.ma',
        icon: Layers,
        advantages: [
            { title: 'Interlocuteur unique', text: 'Préparation, impression, finitions et pose coordonnées par la même équipe.' },
            { title: 'Délais tenus', text: 'Un planning de production calé sur la date de votre lancement.' },
            { title: 'Rendu homogène', text: 'Des couleurs identiques sur tous les supports de la campagne.' },
            { title: 'Grandes séries', text: 'Une capacité de production adaptée aux campagnes nationales.' },
        ],
        prestations: [
            'Affiches et campagnes d’affichage',
            'Visuels pour panneaux publicitaires 4x3 et abribus',
            'Habillage visuel de salons et d’événements',
            'Roll-up, kakémonos et X-banners',
            'Kits de campagne multi-supports',
            'Pose et dépose des visuels sur site',
        ],
        materials: ['Papier affiche dos bleu', 'Bâches, toiles et films adhésifs', 'Supports rigides PVC et dibond'],
        gallery: [
            { src: serviceImages.publicitaire, caption: 'Habillage de salon' },
            { src: serviceImages.encres, caption: 'Production des visuels' },
        ],
        metaTitle: 'Industrie publicitaire à Casablanca | Supports de campagne - webprint.ma',
        metaDescription:
            "Production des supports de vos campagnes publicitaires à Casablanca : affichage, visuels de salons et d'événements, roll-up et kits multi-supports. Impression et pose.",
        keywords: [
            'industrie publicitaire Casablanca',
            'affichage publicitaire Maroc',
            'impression campagne publicitaire',
            'visuels salon Casablanca',
        ],
    },
    {
        slug: 'habillage-vehicule',
        title: 'Habillage de véhicule',
        tagline: 'Votre flotte devient un support publicitaire',
        description:
            "Marquage et covering de voitures, utilitaires, camions et flottes d'entreprise : lettrage, adhésifs partiels ou habillage intégral avec des films de qualité.",
        intro: [
            "Un véhicule habillé à vos couleurs est vu chaque jour par des milliers de personnes. C'est l'un des supports publicitaires les plus rentables : un seul investissement, une visibilité permanente partout où vous circulez.",
            "Nous réalisons le marquage simple (logo, coordonnées), le covering partiel ou l'habillage intégral de vos véhicules. Les films coulés que nous utilisons épousent les formes de la carrosserie, protègent la peinture d'origine et se retirent proprement.",
        ],
        imageUrl: serviceImages.vehicule,
        imageAlt: 'Utilitaire blanc habillé de vinyle publicitaire bleu et orange',
        icon: Car,
        advantages: [
            { title: 'Publicité mobile', text: 'Une visibilité continue, sans coût de diffusion.' },
            { title: 'Films haut de gamme', text: 'Vinyles coulés et laminés anti-UV, durables plusieurs années.' },
            { title: 'Protection', text: 'Le film protège la carrosserie et se retire sans laisser de traces.' },
            { title: 'Flottes complètes', text: 'Déclinaison homogène sur tous vos véhicules.' },
        ],
        prestations: [
            'Lettrage et marquage de logo',
            'Covering partiel (portes, capot, hayon)',
            'Covering intégral et changement de couleur',
            'Habillage de camions, remorques et utilitaires',
            'Vitres microperforées pour lunette arrière',
            'Marquage de flotte d’entreprise',
        ],
        materials: ['Vinyle coulé et films de covering', 'Lamination anti-UV et anti-rayures', 'Microperforé pour vitres'],
        gallery: [
            { src: serviceImages.vehicule, caption: 'Exemple de covering sur utilitaire' },
            { src: serviceImages.vinyle, caption: 'Vinyle adhésif' },
        ],
        metaTitle: 'Habillage de véhicule à Casablanca | Covering et marquage - webprint.ma',
        metaDescription:
            "Covering, marquage et habillage de véhicules et flottes d'entreprise à Casablanca. Films vinyle haut de gamme, pose professionnelle, devis gratuit.",
        keywords: ['habillage véhicule Casablanca', 'covering voiture Maroc', 'marquage véhicule Casablanca', 'flocage utilitaire Maroc'],
    },
    {
        slug: 'balisage-chantier',
        title: 'Palissades et balisage de chantier',
        tagline: 'Sécurité et image sur vos chantiers',
        description:
            'Palissades publicitaires, panneaux de chantier, bâches de clôture et panneaux de sécurité pour informer, sécuriser et valoriser vos projets de construction.',
        intro: [
            "Un chantier bien balisé protège les riverains, informe le public et valorise le promoteur. Nous fabriquons l'ensemble des supports de balisage de vos chantiers : panneaux réglementaires, palissades habillées, bâches de clôture et panneaux de sécurité.",
            'Nos supports sont conçus pour résister aux intempéries, au vent et au soleil pendant toute la durée des travaux. Nous assurons la fabrication et la pose, à Casablanca et dans tout le Maroc.',
        ],
        imageUrl: serviceImages.chantier,
        imageAlt: 'Palissade de chantier habillée de panneaux imprimés avec des visuels architecturaux',
        icon: Construction,
        advantages: [
            { title: 'Conformité', text: 'Panneaux de permis et de sécurité conformes à la réglementation.' },
            { title: 'Résistance', text: 'Supports traités anti-UV, résistants au vent et à la pluie.' },
            { title: 'Communication', text: 'Palissades transformées en vitrine de votre futur projet.' },
            { title: 'Pose sur site', text: 'Installation par nos équipes, y compris en hauteur.' },
        ],
        prestations: [
            'Panneaux de chantier et de permis de construire',
            'Palissades et clôtures publicitaires',
            'Bâches de clôture micro-perforées',
            'Panneaux de sécurité et d’obligation',
            'Panneaux de promotion immobilière',
            'Rubalise et marquage de zones',
        ],
        materials: ['Dibond et PVC rigide extérieur', 'Bâches micro-perforées anti-vent', 'Adhésifs et encres anti-UV'],
        gallery: [
            { src: serviceImages.chantier, caption: 'Exemple de palissade publicitaire imprimée' },
            { src: serviceImages.grandFormat, caption: 'Panneaux grand format' },
        ],
        metaTitle: 'Palissades de chantier à Casablanca | webprint.ma',
        metaDescription:
            'Panneaux de chantier, palissades publicitaires, bâches de clôture et panneaux de sécurité. Fabrication et pose à Casablanca et partout au Maroc.',
        keywords: ['balisage chantier Casablanca', 'panneau de chantier Maroc', 'palissade publicitaire', 'bâche de chantier Maroc'],
    },
    {
        slug: 'impression-vinyle',
        title: 'Impression vinyle',
        tagline: 'Adhésifs pour toutes les surfaces',
        description:
            'Stickers, étiquettes, lettrages découpés et adhésifs muraux imprimés sur vinyle : une solution polyvalente pour vitrines, murs, sols, véhicules et emballages.',
        intro: [
            "Le vinyle adhésif s'applique sur presque toutes les surfaces lisses : verre, murs, mobilier, carrosserie, sols ou emballages. Imprimé en quadrichromie ou découpé à la forme, il permet de créer des visuels sur-mesure rapidement et à moindre coût.",
            'Nous sélectionnons le film adapté à votre usage : intérieur ou extérieur, permanent ou repositionnable, transparent, blanc, dépoli ou microperforé. Chaque adhésif peut être laminé pour renforcer sa durée de vie.',
        ],
        imageUrl: serviceImages.vinyle,
        imageAlt: 'Impression de motifs colorés sur un rouleau de vinyle adhésif',
        icon: Scissors,
        advantages: [
            { title: 'Polyvalent', text: 'Murs, vitres, véhicules, sols, mobilier et produits.' },
            { title: 'Découpe à la forme', text: 'Découpe numérique précise pour logos et lettrages.' },
            { title: 'Longue durée', text: 'Films extérieurs jusqu’à 7 ans avec lamination.' },
            { title: 'Pose facile', text: 'Transfert fourni ou pose réalisée par nos équipes.' },
        ],
        prestations: [
            'Stickers et autocollants personnalisés',
            'Étiquettes produits en rouleaux ou en planches',
            'Lettrage adhésif découpé',
            'Adhésifs muraux et décoration intérieure',
            'Stickers de sol antidérapants',
            'Films dépolis et occultants',
        ],
        materials: ['Vinyle monomère et polymère', 'Films transparents, dépolis, microperforés', 'Lamination mate, brillante ou antidérapante'],
        gallery: [
            { src: serviceImages.vinyle, caption: 'Vinyle adhésif imprimé' },
            { src: serviceImages.etiquettes, caption: 'Étiquettes et stickers' },
        ],
        metaTitle: 'Impression vinyle et stickers à Casablanca | webprint.ma',
        metaDescription:
            'Impression sur vinyle adhésif à Casablanca : stickers, étiquettes, lettrages découpés, adhésifs muraux et de sol. Intérieur et extérieur, devis gratuit.',
        keywords: ['impression vinyle Casablanca', 'stickers personnalisés Maroc', 'autocollant Casablanca', 'lettrage adhésif'],
    },
    {
        slug: 'design-graphique',
        title: 'Design graphique',
        tagline: 'Des visuels qui vous ressemblent',
        description:
            'Création de logos, identités visuelles, maquettes et supports de communication prêts à imprimer, conçus par notre studio graphique intégré.',
        intro: [
            "Un bon support imprimé commence par une bonne création. Notre studio graphique conçoit votre identité visuelle et l'ensemble de vos supports : logo, charte graphique, flyers, brochures, affiches, packaging et visuels pour les réseaux sociaux.",
            'Parce que nous imprimons aussi ce que nous créons, nos fichiers sont pensés dès le départ pour la production : bons formats, fonds perdus, profils colorimétriques et choix de papiers. Vous gagnez du temps et évitez les mauvaises surprises.',
        ],
        imageUrl: serviceImages.design,
        imageAlt: 'Graphiste travaillant sur une identité visuelle au studio webprint.ma',
        icon: Brush,
        advantages: [
            { title: 'Studio intégré', text: 'Création et impression sous le même toit.' },
            { title: 'Fichiers prêts à imprimer', text: 'Formats, fonds perdus et couleurs vérifiés.' },
            { title: 'Allers-retours inclus', text: 'Ajustements jusqu’à validation du BAT.' },
            { title: 'Cohérence de marque', text: 'Une charte appliquée à tous vos supports.' },
        ],
        prestations: [
            'Création de logo et identité visuelle',
            'Charte graphique',
            'Maquettes de flyers, brochures et catalogues',
            'Affiches, kakémonos et visuels grand format',
            'Packaging et étiquettes',
            'Visuels pour réseaux sociaux et web',
        ],
        materials: ['Fichiers vectoriels et haute définition', 'Déclinaisons print et digital', 'BAT numérique avant impression'],
        gallery: [
            { src: serviceImages.design, caption: 'Conception graphique' },
            { src: serviceImages.numerique, caption: 'Supports imprimés' },
        ],
        metaTitle: 'Design graphique à Casablanca | Logo, identité visuelle - webprint.ma',
        metaDescription:
            'Studio de design graphique à Casablanca : logo, identité visuelle, charte graphique, maquettes print et visuels web. Fichiers prêts à imprimer.',
        keywords: ['design graphique Casablanca', 'création logo Maroc', 'identité visuelle Casablanca', 'graphiste Casablanca'],
    },
    {
        slug: 'impression-baches',
        title: 'Impression de bâches',
        tagline: 'Banderoles et bâches publicitaires',
        description:
            'Bâches publicitaires, banderoles, kakémonos extérieurs et bâches de façade imprimées en haute définition, avec œillets, ourlets et fourreaux.',
        intro: [
            'La bâche publicitaire est le support incontournable pour annoncer un événement, une ouverture, une promotion ou habiller une façade. Robuste et économique, elle se fixe facilement sur une grille, une façade, une barrière ou une structure.',
            'Nous imprimons vos bâches dans toutes les dimensions, avec les finitions nécessaires à leur installation : œillets, ourlets renforcés, fourreaux, sandows. Pour les grandes surfaces exposées au vent, nous recommandons la bâche micro-perforée.',
        ],
        imageUrl: serviceImages.baches,
        imageAlt: 'Bâche publicitaire imprimée tendue sur cadre avec œillets et ourlets renforcés',
        icon: Tent,
        advantages: [
            { title: 'Toutes dimensions', text: 'De la banderole d’un mètre à la bâche de façade.' },
            { title: 'Finitions incluses', text: 'Œillets, ourlets, fourreaux et sandows.' },
            { title: 'Résistance extérieure', text: 'Bâches PVC traitées anti-UV et imperméables.' },
            { title: 'Prix compétitifs', text: 'Le support d’affichage le plus économique au m².' },
        ],
        prestations: [
            'Bâches publicitaires et banderoles',
            'Bâches de façade et d’échafaudage',
            'Bâches micro-perforées anti-vent',
            'Bâches de clôture et de barrière',
            'Calicots et banderoles événementielles',
            'Bâches tendues sur cadre',
        ],
        materials: ['Bâche PVC 440 à 510 g', 'Bâche micro-perforée Mesh', 'Bâche blockout opaque recto-verso'],
        gallery: [
            { src: serviceImages.baches, caption: 'Bâche publicitaire' },
            { src: serviceImages.rotative, caption: 'Production en rouleaux' },
        ],
        metaTitle: 'Impression de bâches publicitaires à Casablanca | webprint.ma',
        metaDescription:
            'Impression de bâches et banderoles publicitaires à Casablanca : toutes dimensions, œillets et ourlets inclus, bâches micro-perforées. Devis gratuit.',
        keywords: ['impression bâche Casablanca', 'bâche publicitaire Maroc', 'banderole Casablanca', 'bâche micro-perforée'],
    },
    {
        slug: 'impression-vitrine',
        title: 'Habillage de vitrine',
        tagline: 'Vitrophanie et habillage de façade',
        description:
            'Vitrophanie, adhésifs microperforés, films dépolis et lettrages pour transformer votre vitrine en un support de communication attractif.',
        intro: [
            'Votre vitrine est la première image que les passants ont de votre commerce. Bien habillée, elle attire le regard, annonce vos offres et renforce votre identité, de jour comme de nuit.',
            "Nous concevons et posons l'habillage de vos vitrines : vitrophanie imprimée, lettrage découpé, films dépolis pour l'intimité, adhésifs microperforés qui laissent passer la lumière, visuels saisonniers et promotions temporaires faciles à remplacer.",
        ],
        imageUrl: serviceImages.vitrine,
        imageAlt: 'Vitrine de commerce décorée de vinyle à motifs végétaux et de film dépoli',
        icon: Store,
        advantages: [
            { title: 'Attractivité', text: 'Une vitrine qui arrête le regard et attire les clients.' },
            { title: 'Visibilité préservée', text: 'Films microperforés : vue de l’intérieur conservée.' },
            { title: 'Intimité', text: 'Films dépolis et occultants pour bureaux et cabinets.' },
            { title: 'Pose soignée', text: 'Pose sans bulles par nos techniciens, retrait propre.' },
        ],
        prestations: [
            'Vitrophanie imprimée en quadrichromie',
            'Lettrage adhésif découpé (horaires, logo, coordonnées)',
            'Adhésifs microperforés One Way Vision',
            'Films dépolis, sablés et occultants',
            'Visuels promotionnels et saisonniers',
            'Habillage complet de façade commerciale',
        ],
        materials: ['Vinyle transparent et blanc', 'Film microperforé', 'Films dépolis et décoratifs'],
        gallery: [
            { src: serviceImages.vitrine, caption: 'Exemple de vitrophanie et de film dépoli' },
            { src: serviceImages.vinyle, caption: 'Adhésifs pour vitrine' },
        ],
        metaTitle: 'Habillage de vitrine à Casablanca | Vitrophanie - webprint.ma',
        metaDescription:
            'Habillage de vitrine à Casablanca : vitrophanie, adhésifs microperforés, films dépolis et lettrage découpé. Conception et pose professionnelle.',
        keywords: ['vitrophanie Casablanca', 'habillage vitrine Maroc', 'adhésif vitrine Casablanca', 'film dépoli Casablanca'],
    },
];

export function serviceUrl(slug: string): string {
    return `/${slug}`;
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
    return services.find((service) => service.slug === slug);
}

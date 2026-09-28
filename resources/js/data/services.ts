import { BadgePercent, Brush, Factory, Flag, Layers, MonitorUp, Printer, type LucideIcon } from 'lucide-react';

const serviceImages = {
  offset: '/images/services/a (1).png',
  numerique: '/images/services/a (2).png',
  grandFormat: '/images/services/015e5ae8b9c361586b96e37380522871.jpg',
  plv: '/images/services/a.png',
  stand: '/images/services/a (3).png',
  design: '/images/services/a (4).png',
  objet: '/images/services/a (6).png',
} as const;

export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: LucideIcon;
  details: string[];
  materials: string[];
  gallery: { src: string; caption: string }[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'impression-offset',
    title: 'Impression Offset',
    description:
      "Production de documents en grandes quantites avec un rendu net, regulier et professionnel. Une solution ideale pour affiches, brochures, calendriers, chemises, enveloppes et supports commerciaux.",
    imageUrl: serviceImages.offset,
    icon: Printer,
    details: [
      'Impression de documents de une a quatre couleurs sur differents grammages.',
      'Tirages en volume pour campagnes commerciales, catalogues et supports institutionnels.',
      'Accompagnement sur le choix du papier, du format et des finitions.',
      'Controle qualite avant livraison pour garantir une image coherente.',
    ],
    materials: ['Papiers couches et offset', 'Cartons et supports rigides', 'Finitions pelliculage, rainage, pliage et assemblage'],
    gallery: [
      { src: serviceImages.offset, caption: 'Production offset' },
      { src: serviceImages.grandFormat, caption: 'Supports imprimes' },
    ],
  },
  {
    slug: 'impression-numerique',
    title: 'Impression Numerique',
    description:
      "Impression rapide pour petites et moyennes series, documents personnalises et besoins urgents. La solution souple pour flyers, cartes, menus, invitations, dossiers et supports couleur.",
    imageUrl: serviceImages.numerique,
    icon: MonitorUp,
    details: [
      'Petites et moyennes series avec delais courts.',
      'Personnalisation de documents a l unite ou en serie.',
      'Impression noir et blanc ou couleur haute definition.',
      'Adaptation aux urgences commerciales et evenements ponctuels.',
    ],
    materials: ['Papier standard, creation et premium', 'Formats cartes, A5, A4, A3 et formats speciaux', 'Options de coupe, pliage et reliure'],
    gallery: [
      { src: serviceImages.numerique, caption: 'Impression numerique' },
      { src: serviceImages.design, caption: 'Documents personnalises' },
    ],
  },
  {
    slug: 'grand-format',
    title: 'Grand Format & Signalétique',
    description:
      "Impression grand format pour affichage, evenementiel et visibilite de marque: baches, banderoles, kakemonos, affiches, vitrophanie, vinyle adhesif, panneaux et supports exterieurs.",
    imageUrl: serviceImages.grandFormat,
    icon: Flag,
    details: [
      'Banderoles, baches, kakemonos, calicots, oriflammes et affiches.',
      'Signaletique commerciale pour vitrines, panneaux et espaces de vente.',
      'Supports interieurs et exterieurs selon les contraintes de pose.',
      'Conseil sur le format, l accroche et la resistance du support.',
    ],
    materials: ['Vinyle adhesif et microperfore', 'Bache et textile imprime', 'PVC, aluminium composite et supports rigides'],
    gallery: [
      { src: serviceImages.grandFormat, caption: 'Signaletique commerciale' },
      { src: serviceImages.plv, caption: 'Habillage vitrine' },
    ],
  },
  {
    slug: 'plv-industrie-publicitaire',
    title: 'PLV & Industrie Publicitaire',
    description:
      "Conception et fabrication de supports publicitaires pour points de vente, promotions et salons: presentoirs, palissades de chantier, enseignes, plaques et solutions de mise en avant.",
    imageUrl: serviceImages.plv,
    icon: Layers,
    details: [
      'PLV, presentoirs, comptoirs et supports promotionnels.',
      'Palissades de chantier et habillages publicitaires grand format.',
      'Enseignes publicitaires, plaques et marquage professionnel.',
      'Solutions adaptees a chaque budget et a chaque contexte de communication.',
    ],
    materials: ['PVC, carton plume, forex et dibond', 'Adhesifs, films et supports imprimes', 'Structures legeres pour affichage et exposition'],
    gallery: [
      { src: serviceImages.plv, caption: 'PLV et supports publicitaires' },
      { src: serviceImages.grandFormat, caption: 'Habillage promotionnel' },
    ],
  },
  {
    slug: 'stand-exposition',
    title: "Stands d'Exposition",
    description:
      "Amenagement de stands pour salons, foires et evenements professionnels. De la conception a l installation, l objectif est de valoriser votre marque et de rendre votre espace clair, visible et accueillant.",
    imageUrl: serviceImages.stand,
    icon: Factory,
    details: [
      'Stands personnalises pour lancement de produit, salon ou operation commerciale.',
      'Location et installation de solutions modulaires selon vos besoins.',
      'Stands portables et supports cle en main pour petits budgets.',
      'Mobilier, visuels et habillage coordonnes avec votre identite.',
    ],
    materials: ['Structures modulaires', 'Panneaux imprimes et habillages', 'Mobilier, eclairage et accessoires de stand'],
    gallery: [
      { src: serviceImages.stand, caption: 'Stand et espace evenementiel' },
      { src: serviceImages.plv, caption: 'Amenagement de stand' },
    ],
  },
  {
    slug: 'design-graphique',
    title: 'Design Graphique',
    description:
      "Creation de logotypes, chartes visuelles, maquettes et supports de communication. Une equipe creative vous aide a transformer une idee en visuels prets pour l impression et la diffusion.",
    imageUrl: serviceImages.design,
    icon: Brush,
    details: [
      'Creation de logo et declinaison d identite visuelle.',
      'Maquettes pour flyers, brochures, cartes, affiches et supports web.',
      'Preparation des fichiers pour une impression propre et conforme.',
      'Conseil graphique pour harmoniser vos supports de marque.',
    ],
    materials: ['Fichiers haute definition', 'Declinaisons print et digital', 'Supports prets a imprimer'],
    gallery: [
      { src: serviceImages.design, caption: 'Conception graphique' },
      { src: serviceImages.numerique, caption: 'Creation de supports' },
    ],
  },
  {
    slug: 'publicite-par-objet',
    title: "Publicité par l'Objet",
    description:
      "Personnalisation d objets publicitaires pour faire vivre votre marque au quotidien: stylos, porte-cles, plaques, cadeaux d entreprise et articles promotionnels.",
    imageUrl: serviceImages.objet,
    icon: BadgePercent,
    details: [
      'Objets publicitaires personnalises pour campagnes et cadeaux clients.',
      'Marquage sur stylos, porte-cles, plaques et articles promotionnels.',
      'Selection d objets adaptee a votre cible et a votre budget.',
      'Suivi de production jusqu a la livraison.',
    ],
    materials: ['Supports promotionnels varies', 'Marquage et personnalisation', 'Packaging et presentation selon besoin'],
    gallery: [
      { src: serviceImages.objet, caption: 'Objets publicitaires' },
      { src: serviceImages.design, caption: 'Personnalisation de marque' },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((service) => service.slug === slug);
}

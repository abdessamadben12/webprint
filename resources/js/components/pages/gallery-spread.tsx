import StackSpread, { type StackSpreadImage } from '@/components/ui/stack-spread';

const galleryImages: StackSpreadImage[] = [
    { src: '/images/gallery/image1.png', alt: "Contrôle d'une feuille imprimée à la sortie de la presse" },
    { src: '/images/gallery/image2.png', alt: "Finition des supports dans l'atelier d'impression" },
    { src: '/images/gallery/image3.png', alt: 'Cartes de visite, brochures et supports de communication' },
    { src: '/images/gallery/image4.png', alt: "Rouleaux d'une presse d'impression couleur" },
    { src: '/images/gallery/image5.png', alt: 'Feuilles de papier et massicot de finition' },
    { src: '/images/gallery/image6.png', alt: 'Imprimante grand format en production' },
];

export default function GallerySpread() {
    return <StackSpread images={galleryImages} />;
}

import Footer from '@/components/pages/Footer';
import Gallery from '@/components/pages/Gallery';
import Navbar from '@/components/pages/navbar';
import SeoHead from '@/components/seo-head';

export default function GaleriePage() {
    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]">
            <SeoHead
                title="Galerie webprint.ma | Realisations print et communication visuelle"
                description="Decouvrez des exemples de supports imprimes, grand format, baches, habillages de vehicules et de vitrines realises par webprint.ma."
                keywords={['realisations impression Casablanca', 'galerie impression grand format Maroc', 'habillage vehicule Casablanca', 'webprint.ma realisations']}
            />
            <Navbar />
            <main className="flex-grow">
                <Gallery />
            </main>
            <Footer />
        </div>
    );
}

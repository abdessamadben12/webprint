import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/navbar';
import Services from '@/components/pages/services';
import SeoHead from '@/components/seo-head';
import { router } from '@inertiajs/react';

export default function ServicesPage() {
    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]">
            <SeoHead
                title="Nos services d'impression à Casablanca | webprint.ma"
                description="Impression numérique et grand format, industrie publicitaire, habillage de véhicule, balisage de chantier, vinyle, bâches, vitrines et design graphique à Casablanca."
                keywords={['imprimerie Casablanca', 'impression numérique Maroc', 'impression grand format Casablanca', 'habillage véhicule Casablanca', 'vitrophanie Casablanca', 'webprint.ma services']}
            />
            <Navbar />
            <main className="flex-grow">
                <Services onQuoteWithService={(serviceName) => router.visit(`/devis?service=${encodeURIComponent(serviceName)}`)} />
            </main>
            <Footer />
        </div>
    );
}

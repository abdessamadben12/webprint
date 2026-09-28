import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/navbar';
import Services from '@/components/pages/services';
import SeoHead from '@/components/seo-head';
import { router } from '@inertiajs/react';

export default function ServicesPage() {
    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]">
            <SeoHead
                title="Services webprint.ma | Imprimerie, signaletique, PLV et stands"
                description="Impression offset et numerique, grand format, signaletique, PLV, stands, design graphique et objets publicitaires a Casablanca."
                keywords={['imprimerie Casablanca', 'impression numerique Maroc', 'PLV Casablanca', 'stand exposition Maroc', 'webprint.ma services']}
            />
            <Navbar />
            <main className="flex-grow">
                <Services onQuoteWithService={(serviceName) => router.visit(`/devis?service=${encodeURIComponent(serviceName)}`)} />
            </main>
            <Footer />
        </div>
    );
}

import Configurator from '@/components/pages/Configurator';
import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/navbar';
import SeoHead from '@/components/seo-head';
import { router } from '@inertiajs/react';

export default function ConfigurateurPage() {
    const handleSendToQuote = (configSummary: string, calculatedCost: number) => {
        sessionStorage.setItem('alidade_prefill_summary', configSummary);
        sessionStorage.setItem('alidade_prefill_cost', String(calculatedCost));
        router.visit('/devis');
    };

    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]">
            <SeoHead
                title="Configurateur webprint.ma | Estimez votre projet d'impression"
                description="Configurez vos supports imprimes, formats, quantites et finitions avant de demander un devis personnalise chez webprint.ma."
                keywords={['configurateur impression Casablanca', 'estimation impression Maroc', 'devis imprimerie en ligne']}
            />
            <Navbar />
            <main className="flex-grow">
                <Configurator onSendToQuote={handleSendToQuote} />
            </main>
            <Footer />
        </div>
    );
}

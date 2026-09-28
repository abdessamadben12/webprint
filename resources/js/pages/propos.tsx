import About from '@/components/pages/About';
import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/navbar';
import SeoHead from '@/components/seo-head';

export default function AproposPage() {
    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]">
            <SeoHead
                title="À propos de webprint.ma | Imprimerie et communication visuelle"
                description="Découvrez webprint.ma, son savoir-faire en impression, signalétique, PLV, stands et conception graphique au Maroc."
                keywords={['imprimerie Casablanca', 'communication visuelle Maroc', 'impression publicitaire', 'webprint.ma Maroc']}
                image="/images/qui-sommes-nous/atelier-finition.png"
            />
            <Navbar />
            <main className="flex-grow">
                <About />
            </main>
            <Footer />
        </div>
    );
}

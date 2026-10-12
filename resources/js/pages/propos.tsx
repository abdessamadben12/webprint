import About from '@/components/pages/About';
import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/navbar';
import SeoHead, { pageSeo } from '@/components/seo-head';

export default function AproposPage() {
    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]">
            <SeoHead {...pageSeo.apropos} />
            <Navbar />
            <main className="flex-grow">
                <About />
            </main>
            <Footer />
        </div>
    );
}

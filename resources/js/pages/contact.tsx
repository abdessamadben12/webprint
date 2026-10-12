import Contact from '@/components/pages/Contact';
import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/navbar';
import SeoHead, { pageSeo } from '@/components/seo-head';

export default function ContactPage() {
    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]">
            <SeoHead {...pageSeo.contact} />
            <Navbar />
            <main className="flex-grow">
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

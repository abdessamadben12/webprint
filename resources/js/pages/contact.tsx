import Contact from '@/components/pages/Contact';
import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/navbar';
import SeoHead from '@/components/seo-head';
import { contactHeroImage } from '@/image';

export default function ContactPage() {
    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]">
            <SeoHead
                title="Contact webprint.ma | Demandez votre devis impression"
                description="Contactez webprint.ma pour vos impressions numeriques et grand format, baches, habillage de vehicules et de vitrines au Maroc."
                keywords={['devis impression Casablanca', 'contact webprint.ma', 'imprimerie Casablanca', 'impression grand format Maroc']}
                image={contactHeroImage}
            />
            <Navbar />
            <main className="flex-grow">
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

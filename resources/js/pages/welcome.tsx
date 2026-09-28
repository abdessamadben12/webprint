import App from '@/components/pages/app';
import SeoHead from '@/components/seo-head';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Welcome() {
    const { appUrl } = usePage<SharedData>().props;
    const siteUrl = appUrl.replace(/\/$/, '');

    return (
        <>
            <SeoHead
                title="webprint.ma | Imprimerie et impression publicitaire en ligne au Maroc"
                description="webprint.ma réalise vos impressions offset et numériques, supports grand format, signalétique, PLV, stands et objets publicitaires au Maroc."
                keywords={[
                    'imprimerie Casablanca',
                    'impression offset Maroc',
                    'impression numérique Casablanca',
                    'grand format',
                    'PLV Casablanca',
                    'webprint.ma',
                ]}
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'LocalBusiness',
                    name: 'webprint.ma',
                    url: siteUrl,
                    image: `${siteUrl}/images/bannieres/menuiserie-Bois2-final.webp`,
                    areaServed: ['Casablanca', 'Maroc'],
                    serviceType: ['Impression offset', 'Impression numérique', 'Signalétique', 'PLV', 'Stands'],
                }}
            />
            <div>
                <App />
            </div>
        </>
    );
}

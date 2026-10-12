import App from '@/components/pages/app';
import SeoHead, { pageSeo } from '@/components/seo-head';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Welcome() {
    const { appUrl } = usePage<SharedData>().props;
    const siteUrl = appUrl.replace(/\/$/, '');

    return (
        <>
            <SeoHead
                {...pageSeo.home}
                structuredData={{
                    '@context': 'https://schema.org',
                    '@type': 'LocalBusiness',
                    name: 'webprint.ma',
                    url: siteUrl,
                    image: `${siteUrl}/images/webprint/hero-print-studio.png`,
                    areaServed: ['Casablanca', 'Maroc'],
                    description: 'Imprimerie à Casablanca : impression numérique, grand format, bâches, adhésifs vinyle, habillage de véhicules et de vitrines.',
                    telephone: '05 22 48 44 25',
                    serviceType: ['Impression numérique', 'Impression grand format', 'Impression sur bâche', 'Adhésif vinyle', 'Habillage de véhicule', 'Vitrophanie', 'Design graphique'],
                }}
            />
            <div>
                <App />
            </div>
        </>
    );
}

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
                title="Imprimerie à Casablanca | Impression grand format et numérique - webprint.ma"
                description="webprint.ma, votre imprimerie à Casablanca : impression numérique, impression grand format, bâches, adhésifs vinyle, habillage de véhicules et de vitrines. Devis gratuit et rapide."
                keywords={[
                    'imprimerie Casablanca',
                    'imprimerie à Casablanca',
                    'impression bâche Casablanca',
                    'impression vinyle Casablanca',
                    'impression grand format Maroc',
                    'impression numerique Casablanca',
                    'grand format',
                    'habillage vehicule Casablanca',
                    'webprint.ma',
                ]}
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

import { Reveal } from '@/components/motion';
import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/navbar';
import SeoHead, { absoluteUrl, pageSeo } from '@/components/seo-head';
import { services, serviceUrl } from '@/data/services';
import { site } from '@/data/site';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ArrowUpRight, ChevronRight, Phone } from 'lucide-react';

/** Tarif « à partir de » saisi dans l'admin (/admin/tarifs) ; null = sur devis. */
interface ServicePrice {
    amount: number;
    unit: string;
    basis: string;
    label: string;
}

interface TarifsProps {
    prices: Record<string, ServicePrice | null>;
}

/** « À partir de 35 DH / m² (Bâche imprimée, hors pose.) » ou « sur devis ». */
function priceSentence(price: ServicePrice | null | undefined) {
    if (!price) return 'sur devis, selon le format, la quantité et les finitions';
    return `${price.label.replace(/^À/, 'à')}${price.basis ? ` (${price.basis.replace(/\.$/, '')})` : ''}`;
}

export default function TarifsPage({ prices }: TarifsProps) {
    const { appUrl } = usePage<SharedData>().props;
    const baseUrl = appUrl.endsWith('/') ? appUrl : `${appUrl}/`;
    const pageUrl = absoluteUrl('/tarifs', baseUrl);

    // Questions posees aux moteurs et aux assistants IA ; les montants suivent l'admin.
    const faq = [
        {
            question: "Quelle est l'imprimerie la moins chère à Casablanca ?",
            answer: `webprint.ma affiche ses prix de départ en ligne pour comparer facilement : bâche publicitaire ${priceSentence(prices['impression-baches'])}, vinyle adhésif ${priceSentence(prices['impression-vinyle'])}. Chaque projet reçoit un devis gratuit et détaillé, sans frais cachés.`,
        },
        {
            question: "Quel est le prix d'une bâche publicitaire à Casablanca ?",
            answer: `L'impression de bâche publicitaire ou de banderole personnalisée est ${priceSentence(prices['impression-baches'])}. Les œillets et ourlets sont inclus ; la bâche microperforée est disponible pour les façades exposées au vent.`,
        },
        {
            question: "Combien coûte l'impression d'autocollants et de vinyle au m² ?",
            answer: `L'impression sur vinyle adhésif (autocollants, stickers, lettrages) est ${priceSentence(prices['impression-vinyle'])}. La découpe à la forme et la pose sont chiffrées dans le devis.`,
        },
        {
            question: 'Quel est le prix de la vitrophanie et du film microperforé one way ?',
            answer: `L'habillage de vitrine (vitrophanie, film microperforé one way, sticker de vitrine de magasin) est ${priceSentence(prices['impression-vitrine'])}.`,
        },
        {
            question: "Quel est le prix d'un covering voiture à Casablanca ?",
            answer: `Le covering et le marquage publicitaire de véhicule sont ${priceSentence(prices['habillage-vehicule'])}. Le prix varie selon la taille du véhicule (voiture, utilitaire, camion) et la surface couverte.`,
        },
        {
            question: "Combien coûte l'habillage d'une palissade de chantier ?",
            answer: `L'habillage de palissade et la bâche de chantier imprimée sont ${priceSentence(prices['balisage-chantier'])}. La pose sur site peut être assurée par notre équipe.`,
        },
        {
            question: "Quel est le prix d'un roll-up ou d'un support de salon ?",
            answer: `Le roll-up est ${priceSentence(prices['industrie-publicitaire'])}. Backdrops, drapeaux et kits de salon sont chiffrés sur devis.`,
        },
        {
            question: "Quel est le prix d'impression de cartes de visite et de flyers ?",
            answer: `L'impression numérique est ${priceSentence(prices['impression-numerique'])}. Les flyers et brochures sont chiffrés selon le format, le papier et la quantité.`,
        },
        {
            question: "Faites-vous l'impression en ligne pour Rabat, Marrakech et tout le Maroc ?",
            answer: 'Oui. Vous envoyez votre fichier et votre demande de devis en ligne, nous imprimons à Casablanca et livrons partout au Maroc, dont Rabat et Marrakech. La pose hors Casablanca est possible sur devis.',
        },
        {
            question: 'Comment obtenir un prix exact pour mon projet ?',
            answer: `Remplissez le formulaire de devis gratuit sur webprint.ma/devis ou appelez le ${site.phone}. Nous répondons rapidement avec un prix ferme selon le format, la quantité, le support et les finitions.`,
        },
    ];

    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#FDFCFA]">
            <SeoHead
                {...pageSeo.tarifs}
                extraSchema={[
                    {
                        '@type': 'OfferCatalog',
                        '@id': `${pageUrl}#tarifs`,
                        name: "Tarifs d'impression à Casablanca",
                        url: pageUrl,
                        itemListElement: services
                            .filter((service) => prices[service.slug])
                            .map((service) => {
                                const price = prices[service.slug]!;
                                return {
                                    '@type': 'Offer',
                                    url: absoluteUrl(serviceUrl(service.slug), baseUrl),
                                    itemOffered: { '@type': 'Service', name: service.title, description: price.basis || undefined },
                                    priceCurrency: 'MAD',
                                    priceSpecification: {
                                        '@type': 'UnitPriceSpecification',
                                        minPrice: price.amount.toFixed(2),
                                        priceCurrency: 'MAD',
                                        ...(price.unit ? { unitText: price.unit } : {}),
                                    },
                                    seller: { '@id': `${absoluteUrl('/', baseUrl)}#business` },
                                };
                            }),
                    },
                    {
                        '@type': 'FAQPage',
                        '@id': `${pageUrl}#faq`,
                        mainEntity: faq.map((item) => ({
                            '@type': 'Question',
                            name: item.question,
                            acceptedAnswer: { '@type': 'Answer', text: item.answer },
                        })),
                    },
                    {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Accueil', item: absoluteUrl('/', baseUrl) },
                            { '@type': 'ListItem', position: 2, name: 'Tarifs', item: pageUrl },
                        ],
                    },
                ]}
            />
            <Navbar />

            <main className="flex-grow">
                {/* Hero */}
                <section className="bg-alidade-navy relative overflow-hidden py-14 text-white sm:py-20">
                    <div className="absolute inset-0 bg-[url('/images/backround-print.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
                    <div className="from-alidade-navy/40 via-alidade-navy/80 to-alidade-navy absolute inset-0 bg-gradient-to-b" aria-hidden="true" />
                    <div className="site-container relative mx-auto px-4 sm:px-6 lg:px-8">
                        <nav aria-label="Fil d'Ariane" className="mb-8">
                            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
                                <li>
                                    <Link href="/" className="hover:text-white">
                                        Accueil
                                    </Link>
                                </li>
                                <ChevronRight size={14} aria-hidden="true" />
                                <li aria-current="page" className="text-white">
                                    Tarifs
                                </li>
                            </ol>
                        </nav>
                        <span className="text-alidade-gold text-sm font-bold tracking-[0.25em] uppercase">Prix en dirhams</span>
                        <h1 className="site-title serif-display mt-4 font-bold">Tarifs d'impression à Casablanca</h1>
                        <p className="site-text-lead mt-6 max-w-2xl text-white/80">
                            Prix de départ de votre imprimerie à Casablanca : bâche publicitaire, autocollant vinyle, vitrophanie one way, covering
                            voiture et utilitaire, palissade de chantier, roll-up et impression numérique. Impression en ligne et livraison partout au
                            Maroc, dont Rabat et Marrakech.
                        </p>
                    </div>
                </section>

                {/* Grille des tarifs */}
                <section className="site-container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <Reveal>
                        <h2 className="site-heading serif-display text-alidade-navy font-bold">Nos prix de départ</h2>
                        <p className="site-text text-alidade-text mt-3 max-w-2xl">
                            Tarifs indicatifs hors pose. Le prix final dépend du format, de la quantité, du support et des finitions ; il est confirmé
                            dans votre devis gratuit.
                        </p>
                    </Reveal>
                    <div className="border-brand-blue/15 mt-8 overflow-x-auto rounded-2xl border bg-white">
                        <table className="w-full min-w-[560px] text-left">
                            <thead className="bg-[#F9F7F3] text-sm">
                                <tr>
                                    <th scope="col" className="px-5 py-4 font-bold">
                                        Service
                                    </th>
                                    <th scope="col" className="px-5 py-4 font-bold">
                                        Prix
                                    </th>
                                    <th scope="col" className="px-5 py-4 font-bold">
                                        Base du tarif
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service) => {
                                    const price = prices[service.slug];
                                    return (
                                        <tr key={service.slug} className="border-t border-gray-100">
                                            <th scope="row" className="px-5 py-4 font-semibold">
                                                <Link href={serviceUrl(service.slug)} className="hover:text-brand-blue">
                                                    {service.title}
                                                </Link>
                                            </th>
                                            <td className="px-5 py-4 font-bold whitespace-nowrap">{price ? price.label : 'Sur devis'}</td>
                                            <td className="site-text-small text-alidade-text px-5 py-4">
                                                {price?.basis || 'Selon le format, la quantité et les finitions.'}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FAQ prix */}
                <section className="bg-[#F9F7F3] py-16">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6">
                        <h2 className="site-heading serif-display text-alidade-navy font-bold">Questions fréquentes sur les prix</h2>
                        <div className="mt-8 space-y-3">
                            {faq.map((item) => (
                                <details key={item.question} className="group rounded-xl border border-gray-200 bg-white p-5">
                                    <summary className="cursor-pointer font-semibold">{item.question}</summary>
                                    <p className="site-text text-alidade-text mt-3">{item.answer}</p>
                                </details>
                            ))}
                        </div>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link href="/devis" className="brand-button">
                                <span className="brand-button-label">Demander mon devis gratuit</span>
                                <span className="brand-button-icon" aria-hidden="true">
                                    <ArrowUpRight />
                                </span>
                            </Link>
                            <a href={site.phoneHref} className="text-alidade-navy inline-flex min-h-11 items-center gap-2 font-semibold">
                                <Phone size={18} aria-hidden="true" />
                                {site.phone}
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

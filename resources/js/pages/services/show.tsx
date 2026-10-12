import { EASE, Reveal, Stagger, StaggerItem } from '@/components/motion';
import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/navbar';
import SeoHead, { absoluteUrl } from '@/components/seo-head';
import { getServiceBySlug, services, serviceUrl } from '@/data/services';
import { site } from '@/data/site';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Phone, Sparkles } from 'lucide-react';

interface ServiceShowProps {
    slug: string;
}

export default function ServiceShowPage({ slug }: ServiceShowProps) {
    const service = getServiceBySlug(slug);
    const { appUrl } = usePage<SharedData>().props;
    const baseUrl = appUrl.endsWith('/') ? appUrl : `${appUrl}/`;

    if (!service) {
        return (
            <div className="text-alidade-navy flex min-h-screen flex-col bg-[#FDFCFA]">
                <SeoHead title="Service introuvable | webprint.ma" description="Ce service n'existe pas ou a été déplacé." keywords={[]} noIndex />
                <Navbar />
                <main className="flex-grow">
                    <section className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
                        <span className="text-alidade-gold-dark text-xs font-bold tracking-[0.3em] uppercase">Page introuvable</span>
                        <h1 className="site-title serif-display text-alidade-navy mt-4 font-bold">Ce service n'existe pas.</h1>
                        <p className="site-text mt-4 text-gray-500">Retrouvez l'ensemble de nos prestations sur la page services.</p>
                        <Link href="/services" className="brand-button mt-8">
                            <ArrowLeft size={16} />
                            <span>Voir tous nos services</span>
                        </Link>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }

    const quoteHref = `/devis?service=${encodeURIComponent(service.title)}`;
    const pageUrl = absoluteUrl(serviceUrl(service.slug), baseUrl);
    const Icon = service.icon;

    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#FDFCFA]">
            <SeoHead
                title={service.metaTitle}
                description={service.metaDescription}
                keywords={service.keywords}
                image={service.imageUrl}
                imageAlt={service.imageAlt}
                extraSchema={[
                    {
                        '@type': 'Service',
                        '@id': `${pageUrl}#service`,
                        name: service.title,
                        description: service.metaDescription,
                        serviceType: service.title,
                        url: pageUrl,
                        image: absoluteUrl(service.imageUrl, baseUrl),
                        provider: { '@id': `${absoluteUrl('/', baseUrl)}#business` },
                        areaServed: [
                            { '@type': 'City', name: 'Casablanca' },
                            { '@type': 'Country', name: 'Maroc' },
                        ],
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: service.title,
                            itemListElement: service.prestations.map((prestation) => ({
                                '@type': 'Offer',
                                itemOffered: { '@type': 'Service', name: prestation },
                            })),
                        },
                    },
                    {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Accueil', item: absoluteUrl('/', baseUrl) },
                            { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services', baseUrl) },
                            { '@type': 'ListItem', position: 3, name: service.title, item: pageUrl },
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
                                <li>
                                    <Link href="/services" className="hover:text-white">
                                        Services
                                    </Link>
                                </li>
                                <ChevronRight size={14} aria-hidden="true" />
                                <li aria-current="page" className="text-white">
                                    {service.title}
                                </li>
                            </ol>
                        </nav>

                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                            <Stagger className="space-y-6" amount={0.3}>
                                <StaggerItem>
                                    <span className="text-alidade-gold inline-flex items-center gap-2 text-sm font-bold tracking-[0.25em] uppercase">
                                        <Icon size={18} aria-hidden="true" />
                                        {service.tagline}
                                    </span>
                                </StaggerItem>
                                <StaggerItem>
                                    <h1 className="site-title serif-display font-bold">{service.title}</h1>
                                </StaggerItem>
                                <StaggerItem>
                                    <p className="site-text-lead max-w-xl text-white/80">{service.description}</p>
                                </StaggerItem>
                                <StaggerItem className="flex flex-wrap gap-4 pt-2">
                                    <Link href={quoteHref} className="brand-button">
                                        <span className="brand-button-label">Demander un devis gratuit</span>
                                        <span className="brand-button-icon" aria-hidden="true">
                                            <ArrowUpRight />
                                        </span>
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex min-h-[3.25rem] items-center gap-2 rounded-lg border border-white/30 px-5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                                    >
                                        Nous contacter
                                    </Link>
                                </StaggerItem>
                            </Stagger>

                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
                                className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
                            >
                                <img
                                    src={service.imageUrl}
                                    srcSet={
                                        service.imageUrl.endsWith('.webp')
                                            ? `${service.imageUrl.replace('.webp', '-640.webp')} 640w, ${service.imageUrl} 1280w`
                                            : undefined
                                    }
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    alt={service.imageAlt}
                                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    width={800}
                                    height={600}
                                    loading="eager"
                                    fetchPriority="high"
                                    decoding="async"
                                />
                                <div className="from-alidade-navy/50 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Présentation */}
                <section className="site-container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-24">
                    <Reveal className="space-y-6 lg:col-span-3">
                        <span className="text-alidade-gold-dark text-sm font-bold tracking-[0.3em] uppercase">Présentation</span>
                        <h2 className="site-heading serif-display text-alidade-navy font-bold">{service.title} à Casablanca</h2>
                        <div className="site-prose space-y-4">
                            {service.intro.map((paragraph) => (
                                <p key={paragraph.slice(0, 32)} className="site-text text-alidade-text">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal className="lg:col-span-2" delay={0.15}>
                        <div className="relative">
                            <div className="bg-brand-cyan absolute -right-3 -bottom-3 h-full w-full rounded-2xl" aria-hidden="true" />
                            <img
                                src={service.gallery[1]?.src ?? service.imageUrl}
                                alt={service.gallery[1]?.caption ?? service.imageAlt}
                                className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
                                width={600}
                                height={750}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </Reveal>
                </section>

                {/* Avantages */}
                <section className="bg-[#F9F7F3]">
                    <div className="site-container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                        <Reveal className="mb-12 space-y-3 text-center">
                            <span className="text-alidade-gold-dark text-sm font-bold tracking-[0.3em] uppercase">Avantages</span>
                            <h2 className="site-heading serif-display text-alidade-navy font-bold">Pourquoi choisir webprint.ma</h2>
                        </Reveal>
                        <Stagger stagger={0.1} amount={0.1} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {service.advantages.map((advantage) => (
                                <StaggerItem key={advantage.title} className="h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                                    <div className="bg-brand-blue/10 text-brand-blue mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                                        <Sparkles size={22} aria-hidden="true" />
                                    </div>
                                    <h3 className="site-label text-alidade-navy font-bold">{advantage.title}</h3>
                                    <p className="site-text-small mt-2 text-gray-500">{advantage.text}</p>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </section>

                {/* Prestations */}
                <section className="site-container mx-auto grid grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
                    <Reveal className="space-y-8">
                        <div className="space-y-3">
                            <span className="text-alidade-gold-dark text-sm font-bold tracking-[0.3em] uppercase">Nos prestations</span>
                            <h2 className="site-heading serif-display text-alidade-navy font-bold">Ce que nous réalisons</h2>
                        </div>
                        <Stagger stagger={0.06} className="space-y-4" amount={0.1}>
                            {service.prestations.map((prestation) => (
                                <StaggerItem key={prestation} y={16} className="flex items-start gap-3">
                                    <CheckCircle2 size={22} className="text-brand-blue mt-1 shrink-0" aria-hidden="true" />
                                    <span className="site-text text-alidade-text">{prestation}</span>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </Reveal>

                    <Reveal className="h-fit space-y-6" delay={0.15}>
                        <div className="rounded-2xl bg-[#F9F7F3] p-8 sm:p-10">
                            <h3 className="text-alidade-gold-dark text-sm font-bold tracking-[0.3em] uppercase">Matériaux & finitions</h3>
                            <ul className="mt-6 space-y-4">
                                {service.materials.map((material) => (
                                    <li
                                        key={material}
                                        className="site-text border-alidade-navy/10 text-alidade-navy border-b pb-4 last:border-0 last:pb-0"
                                    >
                                        {material}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {service.gallery.map((photo) => (
                                <figure key={photo.src} className="group relative aspect-square overflow-hidden rounded-2xl shadow-md">
                                    <img
                                        src={photo.src}
                                        alt={photo.caption}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <figcaption className="from-alidade-navy/80 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-4 text-sm font-semibold text-white">
                                        {photo.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </Reveal>
                </section>

                {/* Appel à l'action */}
                <section className="bg-alidade-navy text-white">
                    <Stagger className="site-container mx-auto space-y-8 px-4 py-20 text-center sm:px-6 lg:px-8" amount={0.3}>
                        <StaggerItem className="space-y-4">
                            <span className="text-alidade-gold text-sm font-bold tracking-[0.3em] uppercase">
                                Un projet de {service.title.toLowerCase()} ?
                            </span>
                            <h2 className="site-heading serif-display font-bold">Recevez votre devis gratuit sous 24 h</h2>
                            <p className="site-text-lead mx-auto max-w-2xl text-white/75">
                                Décrivez votre besoin : formats, quantités, délais. Notre équipe vous conseille et vous répond rapidement.
                            </p>
                        </StaggerItem>
                        <StaggerItem className="flex flex-wrap items-center justify-center gap-4">
                            <Link href={quoteHref} className="brand-button">
                                <span className="brand-button-label">Demander un devis</span>
                                <span className="brand-button-icon" aria-hidden="true">
                                    <ArrowUpRight />
                                </span>
                            </Link>
                            <a
                                href={site.phoneHref}
                                className="inline-flex min-h-[3.25rem] items-center gap-2 rounded-lg border border-white/30 px-5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                            >
                                <Phone size={18} aria-hidden="true" />
                                {site.phone}
                            </a>
                        </StaggerItem>
                    </Stagger>
                </section>

                {/* Autres services */}
                <section className="border-t border-gray-100 bg-white">
                    <Reveal className="site-container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                        <h2 className="site-heading serif-display text-alidade-navy font-bold">Nos autres services</h2>
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {services
                                .filter((s) => s.slug !== service.slug)
                                .map((s) => {
                                    const OtherIcon = s.icon;
                                    return (
                                        <Link
                                            key={s.slug}
                                            href={serviceUrl(s.slug)}
                                            className="group hover:border-brand-blue/30 flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3.5 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                                        >
                                            <OtherIcon size={20} className="text-brand-blue shrink-0" aria-hidden="true" />
                                            <span className="group-hover:text-brand-blue flex-1">{s.title}</span>
                                            <ArrowRight
                                                size={16}
                                                className="text-gray-400 transition-transform group-hover:translate-x-1"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    );
                                })}
                        </div>
                    </Reveal>
                </section>
            </main>

            <Footer />
        </div>
    );
}

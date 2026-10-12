import { EASE, Stagger, StaggerItem } from '@/components/motion';
import { Link, router } from '@inertiajs/react';
import { motion, type Variants } from 'framer-motion';
import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Gift,
} from 'lucide-react';
import { useState } from 'react';

const slideContent: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.35,
        },
    },
};

const slideItem: Variants = {
    hidden: {
        opacity: 0,
        y: 26,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: EASE,
        },
    },
};

interface HeroSliderProps {
    onDiscoverClick: () => void;
}

const heroImage = '/images/hero/hero_images_impremerier_casa.png';

const subImages = [
    '/images/hero/hero_images_impremerier_casa2.png',
    '/images/hero/hero_images_impremerier_casa3.png',
    '/images/hero/hero_images_impremerier_casa4.png',
    '/images/hero/hero_images_impremerier_casa5.png',
];

const brandIcons = [
    {
        image: '/images/webprint/icon-print.svg',
        title: 'Impression Publicitaire',
        text: 'Flyers, dépliants, cartes de visite',
        href: '/impression-numerique',
    },
    {
        image: '/images/webprint/icon-design.svg',
        title: 'Design Graphique',
        text: 'Logo, identité visuelle, maquettes',
        href: '/design-graphique',
    },
    {
        image: '/images/webprint/icon-large-format.svg',
        title: 'Grand Format & Bâches',
        text: 'Bâches, roll-up, palissades',
        href: '/impression-grand-format',
    },
    {
        image: null,
        title: 'Habillage Véhicule',
        text: 'Covering, marquage de flottes',
        href: '/habillage-vehicule',
    },
];

export default function Hero({
    onDiscoverClick,
}: HeroSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'Imprimerie à Casablanca & grand format',
            subtitle: 'webprint.ma',
            description:
                "Votre imprimerie à Casablanca, de la création à la pose : impression numérique, bâches publicitaires, adhésifs vinyle, habillage de véhicules et de vitrines.",
            cta: 'Découvrir nos produits',
        },
        {
            title: 'Design graphique & communication visuelle',
            subtitle: 'webprint.ma',
            description:
                'Logo, flyers, catalogues ou signalétique : nos graphistes à Casablanca créent vos fichiers prêts à imprimer et des supports qui valorisent votre marque.',
            cta: 'Demander un devis',
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + slides.length) % slides.length,
        );
    };

    return (
        <div className="bg-alidade-navy relative w-full overflow-hidden">
            <div
                className="relative w-full"
                role="region"
                aria-roledescription="carrousel"
                aria-label="Nos solutions d'impression"
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.title}
                        hidden={index !== currentSlide}
                        aria-label={`${index + 1} sur ${slides.length}`}
                        className={
                            index === currentSlide
                                ? 'flex w-full flex-col lg:min-h-[540px] lg:flex-row'
                                : 'hidden'
                        }
                    >
                        {/* =========================
                            CONTENU GAUCHE
                        ========================== */}
                        <div className="site-title-container bg-alidade-dark relative flex min-h-[340px] w-full flex-col justify-center px-6 py-10 text-white sm:px-12 sm:py-12 lg:w-[45%] lg:px-12 xl:px-16">
                            <motion.div
                                className="relative space-y-5"
                                variants={slideContent}
                                initial="hidden"
                                animate={
                                    index === currentSlide
                                        ? 'visible'
                                        : 'hidden'
                                }
                            >
                                <motion.div
                                    variants={slideItem}
                                    className="flex items-center gap-2"
                                >
                                    <span className="bg-brand-cyan h-0.5 w-8" />

                                    <span className="text-brand-cyan text-lg font-semibold">
                                        {slide.subtitle}
                                    </span>
                                </motion.div>

                                <motion.h1
                                    variants={slideItem}
                                    className="site-title max-w-lg font-bold text-white"
                                >
                                    {slide.title.split('&')[0]}

                                    {slide.title.includes('&') && (
                                        <span className="block">
                                            &amp;
                                            {slide.title.split('&')[1]}
                                        </span>
                                    )}
                                </motion.h1>

                                <motion.p
                                    variants={slideItem}
                                    className="site-text max-w-lg text-gray-300"
                                >
                                    {slide.description}
                                </motion.p>

                                <motion.div
                                    variants={slideItem}
                                    className="pt-4"
                                >
                                    <motion.button
                                        onClick={
                                            index === 0
                                                ? onDiscoverClick
                                                : () =>
                                                      router.visit(
                                                          '/devis',
                                                      )
                                        }
                                        className="brand-button"
                                        id={`hero-cta-btn-${index}`}
                                    >
                                        <span className="brand-button-label">{slide.cta}</span>

                                        <span className="brand-button-icon" aria-hidden="true"><ArrowUpRight /></span>
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* =========================
                            GALERIE DROITE
                        ========================== */}
                        <div className="relative grid h-[320px] w-full grid-cols-12 gap-[2px] bg-white lg:h-auto lg:min-h-[540px] lg:w-[55%]">
                            {/* GRANDE IMAGE */}
                            <div className="relative col-span-7 h-full overflow-hidden">
                                <img
                                    src={heroImage}
                                    alt="Imprimerie à Casablanca webprint.ma : supports imprimés et grand format"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    fetchPriority="high"
                                />
                            </div>

                            {/* 4 PETITES IMAGES */}
                            <div className="col-span-5 grid h-full min-h-0 grid-cols-2 grid-rows-2 gap-[2px]">
                                {subImages.map((item, key) => (
                                    <div
                                        key={key}
                                        className="relative min-h-0 overflow-hidden bg-gray-100"
                                    >
                                        <img
                                            src={item}
                                            alt={`Impression grand format et numérique à Casablanca - réalisation ${key + 1}`}
                                            className="absolute inset-0 h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {/* =========================
                    NAVIGATION SLIDER
                ========================== */}
                <div className="bg-alidade-dark flex h-14 items-center justify-center gap-5 border-b border-white/10">
                    <button
                        onClick={prevSlide}
                        className="flex h-11 w-11 items-center justify-center rounded-md text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Diapositive précédente"
                        title="Diapositive précédente"
                        id="hero-prev-btn"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center gap-2">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.title}
                                onClick={() =>
                                    setCurrentSlide(index)
                                }
                                aria-label={`Afficher : ${slide.title}`}
                                aria-pressed={
                                    index === currentSlide
                                }
                                className="group flex h-11 w-11 items-center justify-center rounded-md"
                                id={`slide-indicator-${index}`}
                            >
                                <span
                                    className={`h-1 w-7 rounded-full transition-colors ${
                                        index === currentSlide
                                            ? 'bg-brand-cyan'
                                            : 'bg-white/30 group-hover:bg-white/60'
                                    }`}
                                />
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="flex h-11 w-11 items-center justify-center rounded-md text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Diapositive suivante"
                        title="Diapositive suivante"
                        id="hero-next-btn"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* =========================
                SERVICES SOUS LE HERO
            ========================== */}
            <div className="relative z-20 border-b border-gray-100 bg-white py-6">
                <div className="mx-auto site-container px-4 sm:px-6 lg:px-8">
                    <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {brandIcons.map((item) => (
                            <StaggerItem key={item.title}>
                                <Link
                                    href={item.href}
                                    className="group flex h-full items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="h-16 w-16 object-contain"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <Gift
                                                size={28}
                                                className="text-brand-blue"
                                                strokeWidth={1.5}
                                                aria-hidden="true"
                                            />
                                        )}
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="site-label text-alidade-navy group-hover:text-brand-blue font-semibold">
                                            {item.title}
                                        </h3>

                                        <p className="site-text-small mt-1 text-gray-500">
                                            {item.text}
                                        </p>
                                    </div>
                                </Link>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </div>
        </div>
    );
}

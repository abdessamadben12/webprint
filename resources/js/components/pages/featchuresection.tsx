import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Award, ChevronRight, Clock, Headset, Home, ShieldCheck, User, Users } from 'lucide-react';
import React from 'react';

// --- Types ---
interface ServiceCardProps {
    number: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    subDescription: string;
    color: 'blue' | 'cyan' | 'pink';
    bgImage?: string;
    path: string;
}

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}

// --- Composants Internes ---

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, icon, description, subDescription, color, bgImage, path }) => {
    const colorVariants = {
        blue: { border: 'border-brand-blue', icon: 'bg-brand-blue/5 text-brand-blue', line: 'bg-brand-blue' },
        cyan: { border: 'border-brand-cyan', icon: 'bg-brand-cyan/10 text-[#087c8b]', line: 'bg-brand-cyan' },
        pink: { border: 'border-brand-pink', icon: 'bg-brand-pink/5 text-alidade-gold-dark', line: 'bg-brand-pink' },
    };

    return (
        <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className={`relative flex h-full flex-col overflow-hidden rounded-lg border-b-2 bg-white shadow-sm ${colorVariants[color].border}`}
        >
            {/* Header de la carte */}
            <div className="z-10 flex items-start justify-between p-8">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorVariants[color].icon}`}>{icon}</div>
                <span className="font-serif text-3xl font-bold text-gray-200" aria-hidden="true">
                    {number}
                </span>
            </div>

            {/* Zone Image/Illustration (Simulée avec un overlay) */}
            <div className="pointer-events-none absolute top-0 right-0 h-48 w-full opacity-10">
                {bgImage ? (
                    <img src={bgImage} alt="" className="h-full w-full object-cover" />
                ) : (
                    <div className="h-full w-full bg-gradient-to-br from-transparent to-current opacity-20"></div>
                )}
            </div>

            {/* Contenu */}
            <div className="flex-grow px-8 pb-20">
                <h3 className="site-subheading text-alidade-navy mb-3 font-semibold">{title}</h3>
                <div className={`mb-6 h-0.5 w-8 ${colorVariants[color].line}`}></div>

                <div className="site-prose">
                    <p className="site-text text-gray-600">{description}</p>
                    <p className="site-text text-gray-500">{subDescription}</p>
                </div>
            </div>

            {/* Bouton Flèche */}
            <div className="absolute right-8 bottom-6">
                <Link
                    href={path}
                    aria-label={`En savoir plus : ${title}`}
                    title={`En savoir plus : ${title}`}
                    className="text-brand-blue hover:bg-brand-blue flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors hover:text-white"
                >
                    <ChevronRight size={24} />
                </Link>
            </div>
        </motion.div>
    );
};

const FeatureItem: React.FC<FeatureProps> = ({ icon, title, subtitle }) => (
    <div className="flex min-w-0 flex-1 basis-[200px] items-center gap-4">
        <div className="bg-brand-blue/5 text-brand-blue flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">{icon}</div>
        <div className="min-w-0">
            <h4 className="site-label text-alidade-navy font-semibold">{title}</h4>
            <p className="site-text-small mt-1 text-gray-500">{subtitle}</p>
        </div>
    </div>
);

// --- Composant Principal ---

export const EngagementSection: React.FC = () => {
    return (
        <section className="bg-slate-50 px-4 pt-10 sm:px-6 lg:px-8">
            <div className="mx-auto site-container">
                {/* Header Section */}
                <Reveal className="mb-16 text-center">
                    <h2 className="site-heading text-alidade-navy serif-display font-bold">Un partenaire de confiance à chaque étape</h2>
                </Reveal>

                {/* Grille de Cartes */}
                <Stagger stagger={0.15} className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <StaggerItem className="h-full">
                        <ServiceCard
                            number="01"
                            title="Qui Sommes Nous"
                            icon={<User size={28} />}
                            color="blue"
                            description="Besoin d'un partenaire pour creer, imprimer et livrer vos supports de communication..."
                            subDescription="webprint.ma accompagne vos projets d'impression, signaletique, PLV, stands et objets publicitaires au Maroc."
                            path="/apropos"
                        />
                    </StaggerItem>

                    <StaggerItem className="h-full">
                        <ServiceCard
                            number="02"
                            title="Atelier Print"
                            icon={<Home size={28} />}
                            color="cyan"
                            description="Nous accordons une attention particuliere au choix du papier, du support, des couleurs et des finitions."
                            subDescription="Du fichier a la production, chaque support est prepare pour obtenir un rendu propre, durable et professionnel."
                            path="/apropos"
                        />
                    </StaggerItem>

                    <StaggerItem className="h-full">
                        <ServiceCard
                            number="03"
                            title="La Communication Chez webprint.ma"
                            icon={<Award size={28} />}
                            color="pink"
                            description="Votre campagne, votre salon ou votre point de vente devient notre sujet, avec le serieux d'une production suivie."
                            subDescription="Nous vous conseillons sur le format, le support et la finition afin de respecter vos delais et votre budget."
                            path="/savoir-faire"
                        />
                    </StaggerItem>
                </Stagger>

                {/* Barre de réassurance (Footer bar) */}
                {/* <Reveal className="flex flex-wrap items-center justify-between gap-8 border-t border-gray-200 pt-10">
                    <FeatureItem
                        icon={<ShieldCheck className="h-6 w-6 lg:h-7 lg:w-7" />}
                        title="Qualité Garantie"
                        subtitle="Supports et finitions soignes"
                    />
                    <FeatureItem
                        icon={<Users className="h-6 w-6 lg:h-7 lg:w-7" />}
                        title="Équipe Expérimentée"
                        subtitle="Conseil print et production"
                    />
                    <FeatureItem
                        icon={<Clock className="h-6 w-6 lg:h-7 lg:w-7" />}
                        title="Respect des Délais"
                        subtitle="Production suivie et claire"
                    />
                    <FeatureItem
                        icon={<Headset className="h-6 w-6 lg:h-7 lg:w-7" />}
                        title="Accompagnement"
                        subtitle="Conseil et support à chaque étape"
                    />
                </Reveal> */}
            </div>
        </section>
    );
};

export default EngagementSection;

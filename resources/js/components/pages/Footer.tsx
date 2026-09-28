import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { site } from '@/data/site';
import { logoImage } from '@/image';
import { motion } from 'framer-motion';

import {
    Award,
    Facebook,
    Handshake,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
} from 'lucide-react';

import React from 'react';

const socialLinks = [
    {
        href: site.socials.facebook,
        icon: <Facebook size={18} />,
        label: 'Facebook',
    },
    {
        href: site.socials.instagram,
        icon: <Instagram size={18} />,
        label: 'Instagram',
    },
    {
        href: site.socials.linkedin,
        icon: <Linkedin size={18} />,
        label: 'LinkedIn',
    },
].filter((s) => s.href);

const Footer: React.FC = () => {
    return (
        <footer
            className="
                relative
                overflow-hidden
                bg-[url('/images/bg-footer.png')]
                bg-cover
                bg-center
                bg-no-repeat
                text-white
            "
        >
            {/* Overlay */}
            {/* <div className="pointer-events-none absolute inset-0 bg-[#071421]/80" /> */}

            {/* Gradient */}
            <div
                className="
                    pointer-events-none
                    absolute inset-0
                  
                "
            />

            {/* CONTENU PRINCIPAL */}
            <div
                className="
                    relative z-10
                    mx-auto
                    flex
                    max-w-7xl
                    flex-col
                    lg:flex-row
                "
            >
                {/* Logo + description */}
                <Reveal
                    className="
                        flex
                        w-full
                        flex-col
                        justify-center
                        p-8
                        lg:w-[38%]
                        lg:px-12
                        xl:p-12
                    "
                    amount={0.15}
                >
                    <div className="mb-6">
                        <img
                            src={logoImage}
                            alt="Logo webprint.ma"
                            className="
                                h-auto
                                w-60
                                max-w-full
                                rounded-lg
                                bg-white
                                px-3
                                py-2
                                shadow-lg
                            "
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <p className="site-text-small mb-8 max-w-sm text-gray-300">
                        Imprimerie et communication visuelle à Casablanca.
                        <br />
                        Nous transformons vos idées en supports visibles et mémorables.
                    </p>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <Phone className="text-alidade-gold h-5 w-5 shrink-0" />

                            <a
                                href={site.phoneHref}
                                className="
                                    site-text-small
                                    text-gray-300
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                {site.phone}
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <MapPin className="text-alidade-gold h-5 w-5 shrink-0" />

                            <span className="site-text-small text-gray-300">
                                {site.address}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="text-alidade-gold h-5 w-5 shrink-0" />

                            <a
                                href={`mailto:${site.email}`}
                                className="
                                    site-text-small
                                    min-w-0
                                    text-gray-300
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                {site.email}
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    {socialLinks.length > 0 && (
                        <div className="mt-8 flex gap-3">
                            {socialLinks.map((s) => (
                                <SocialCircle
                                    key={s.label}
                                    href={s.href}
                                    label={s.label}
                                    icon={s.icon}
                                />
                            ))}
                        </div>
                    )}
                </Reveal>

                {/* Atouts */}
                <Stagger
                    stagger={0.15}
                    className="
                        grid
                        flex-1
                        grid-cols-1
                        items-center
                        border-t
                        border-white/10
                        md:grid-cols-3
                        lg:border-t-0
                        lg:border-l
                    "
                >
                    <FeatureItem
                        icon={
                            <Award
                                className="
                                    text-alidade-gold
                                    h-10 w-10
                                    lg:h-16 lg:w-14
                                "
                                strokeWidth={1}
                            />
                        }
                        title="QUALITÉ"
                        description="Des supports adaptés et des finitions soignées."
                    />

                    <FeatureItem
                        icon={
                            <Handshake
                                className="
                                    text-alidade-gold
                                    h-10 w-10
                                    lg:h-16 lg:w-16
                                "
                                strokeWidth={1}
                            />
                        }
                        title="ENGAGEMENT"
                        description="Respect des délais et accompagnement personnalisé."
                        hasBorder
                    />

                    <FeatureItem
                        icon={
                            <ShieldCheck
                                className="
                                    text-alidade-gold
                                    h-10 w-10
                                    lg:h-16 lg:w-16
                                "
                                strokeWidth={1}
                            />
                        }
                        title="CONFIANCE"
                        description="Une équipe print et conseil à votre service."
                    />
                </Stagger>
            </div>

            {/* Bas de page */}
            <div
                className="
                    relative z-10
                    border-t
                    border-white/10
                    bg-[#0d1a2d]/70
                    py-6
                    backdrop-blur-sm
                "
            >
                <div
                    className="
                        container mx-auto
                        flex flex-col
                        items-center
                        justify-center
                        gap-2
                        px-6
                        md:flex-row
                    "
                >
                    <p className="site-text-small text-center text-gray-300">
                        © {new Date().getFullYear()} webprint.ma. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const FeatureItem = ({
    icon,
    title,
    description,
    hasBorder,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    hasBorder?: boolean;
}) => (
    <StaggerItem
        className={`
            flex
            min-w-0
            flex-col
            items-center
            px-5
            py-10
            text-center
            ${hasBorder ? 'border-white/10 md:border-x' : ''}
        `}
    >
        <div className="mb-6">{icon}</div>

        <h3 className="site-label mb-4 font-bold uppercase">
            {title}
        </h3>

        <p className="site-text-small max-w-[220px] text-gray-300">
            {description}
        </p>
    </StaggerItem>
);

const SocialCircle = ({
    icon,
    href,
    label,
}: {
    icon: React.ReactNode;
    href: string;
    label: string;
}) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        whileHover={{
            scale: 1.15,
            y: -2,
        }}
        whileTap={{
            scale: 0.95,
        }}
        transition={{
            type: 'spring',
            stiffness: 400,
            damping: 18,
        }}
        className="
            hover:text-alidade-gold
            hover:border-alidade-gold
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/5
            text-gray-300
            backdrop-blur-sm
            transition-colors
        "
    >
        {icon}
    </motion.a>
);

export default Footer;
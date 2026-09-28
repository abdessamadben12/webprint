import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import ServiceImage from '@/components/pages/service-image';
import { services } from '@/data/services';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, FileSignature, PackageCheck, Printer, Shapes } from 'lucide-react';

interface ServicesGridProps {
    onQuoteWithService: (serviceName: string) => void;
}

export default function Services({ onQuoteWithService }: ServicesGridProps) {
    return (
        <section className="text-alidade-navy w-full bg-[#FDFCFA]" id="services-section">
          <div
    className="
        relative
        overflow-hidden
        bg-[url('/images/backround-print.png')]
        bg-cover
        bg-center
        bg-no-repeat
        py-10
        text-white
        sm:py-18
    "
>

    <Stagger
        className="relative mx-auto site-container space-y-6 px-4 text-center sm:px-6 lg:px-8"
        amount={0.3}
    >
        <StaggerItem className="inline-block">
            <span className="text-alidade-gold text-sm font-bold tracking-[0.3em] uppercase sm:text-xl">
                Services
            </span>
        </StaggerItem>

        <StaggerItem>
            <h1 className="site-title serif-display font-bold">
                Imprimerie, stand et industrie publicitaire
            </h1>
        </StaggerItem>

        <StaggerItem>
            <p className="site-text-lead mx-auto max-w-2xl text-white/80">
                webprint.ma accompagne les entreprises au Maroc avec des solutions
                d'impression, de signalétique, de PLV, de stands et de conception
                graphique adaptées à chaque budget.
            </p>
        </StaggerItem>
    </Stagger>

    <Stagger
        stagger={0.15}
        delay={0.2}
        className="
            relative
            mx-auto
            mt-16
            grid
            max-w-4xl
            grid-cols-3
            divide-x
            divide-white/10
            border-t
            border-white/10
            px-4
            pt-8
            sm:px-6
            lg:px-8
        "
    >
        <StaggerItem className="px-2 text-center">
            <div className="serif-display text-alidade-gold text-3xl font-bold sm:text-4xl">
                7
            </div>
            <div className="mt-1 text-[10px] tracking-[0.2em] text-white/60 uppercase sm:text-xs">
                Familles de services
            </div>
        </StaggerItem>

        <StaggerItem className="px-2 text-center">
            <div className="serif-display text-alidade-gold text-3xl font-bold sm:text-4xl">
                6+
            </div>
            <div className="mt-1 text-[10px] tracking-[0.2em] text-white/60 uppercase sm:text-xs">
                Ans d'expérience
            </div>
        </StaggerItem>

        <StaggerItem className="px-2 text-center">
            <div className="serif-display text-alidade-gold text-3xl font-bold sm:text-4xl">
                1
            </div>
            <div className="mt-1 text-[10px] tracking-[0.2em] text-white/60 uppercase sm:text-xs">
                Partenaire print
            </div>
        </StaggerItem>
    </Stagger>
</div>

            <div className="mx-auto site-container px-4 py-10 sm:px-6 sm:py-18 lg:px-8">
                <Reveal className="mb-16 space-y-3 text-center">
                    <h2 className="site-heading serif-display text-alidade-navy font-bold">Une gamme complete pour votre communication</h2>
                </Reveal>

                <Stagger stagger={0.1} amount={0.05} className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        const number = String(index + 1).padStart(2, '0');

                        return (
                            <StaggerItem key={service.slug} className="h-full">
                                <Link
                                    href={route('services.show', service.slug)}
                                    className="group bg-alidade-navy relative flex h-full flex-col rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
                                >
                                    <div
                                        className="relative h-52 overflow-hidden rounded-t-2xl"
                                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 78%, 0% 100%)' }}
                                    >
                                        <ServiceImage
                                            service={service}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="from-alidade-navy via-alidade-navy/10 absolute inset-0 bg-gradient-to-t to-black/20" />
                                    </div>

                                    <span className="serif-display pointer-events-none absolute top-3 right-5 text-6xl font-bold text-white/[0.06] select-none">
                                        {number}
                                    </span>

                                    <div className="relative -mt-7 pl-6">
                                        <div className="border-alidade-navy text-alidade-navy group-hover:bg-alidade-navy group-hover:text-alidade-gold flex h-14 w-14 items-center justify-center rounded-full border-4 bg-white shadow-lg transition-colors duration-300">
                                            <IconComponent size={22} />
                                        </div>
                                    </div>

                                    <div className="flex flex-grow flex-col space-y-3 px-6 pt-4 pb-7">
                                        <h3 className="site-subheading serif-display font-bold text-white">{service.title}</h3>
                                        <p className="site-text text-white/80">{service.description}</p>

                                        <span className="text-alidade-gold mt-auto inline-flex items-center gap-2 pt-3 text-xs font-bold tracking-[0.2em] uppercase">
                                            <span>Decouvrir</span>
                                            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                                        </span>
                                    </div>

                                    <div className="group-hover:ring-alidade-gold/50 pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 transition-all duration-500 ring-inset" />
                                </Link>
                            </StaggerItem>
                        );
                    })}
                </Stagger>
            </div>

            <div className="bg-[#F9F7F3]">
                <div className="mx-auto site-container px-4 py-10 sm:px-6 sm:py-18 lg:px-8">
                    <Reveal className="mb-16 space-y-3 text-center">
                        <h2 className="site-heading serif-display text-alidade-navy font-bold">Comment nous travaillons</h2>
                    </Reveal>

                    <Stagger stagger={0.18} className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: FileSignature, step: '01', title: 'Brief', desc: 'Ecoute du besoin, formats, quantites, delais et budget.' },
                            { icon: Shapes, step: '02', title: 'Creation', desc: 'Maquette graphique, adaptation des fichiers et validation BAT.' },
                            { icon: Printer, step: '03', title: 'Production', desc: 'Impression, decoupe, finitions et controle qualite.' },
                            {
                                icon: PackageCheck,
                                step: '04',
                                title: 'Livraison',
                                desc: 'Preparation, emballage et remise de vos supports prets a diffuser.',
                            },
                        ].map((item, idx, arr) => {
                            const StepIcon = item.icon;
                            return (
                                <StaggerItem key={item.step} className="relative space-y-4 text-center">
                                    {idx < arr.length - 1 && (
                                        <span className="bg-alidade-gold absolute top-8 left-[60%] hidden h-px w-full lg:block" />
                                    )}
                                    <div className="border-alidade-navy/30 bg-alidade-navy text-alidade-gold relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border shadow-md">
                                        <StepIcon size={26} />
                                    </div>
                                    <div className="text-alidade-muted text-[11px] font-bold tracking-[0.3em] uppercase">Etape {item.step}</div>
                                    <h4 className="site-subheading text-alidade-navy font-bold">{item.title}</h4>
                                    <p className="site-text text-alidade-muted">{item.desc}</p>
                                </StaggerItem>
                            );
                        })}
                    </Stagger>
                </div>
            </div>

            <div className="bg-alidade-navy text-white">
                <Stagger className="mx-auto site-container space-y-8 px-4 py-20 text-center sm:px-6 lg:px-8" amount={0.3}>
                    <StaggerItem className="space-y-4">
                        <span className="text-alidade-gold text-sm font-bold tracking-[0.3em] uppercase sm:text-xl">Un support a imprimer ?</span>
                        <h2 className="site-heading serif-display font-bold">Parlons de votre prochaine campagne</h2>
                    </StaggerItem>
                    <StaggerItem>
                        <motion.button
                            onClick={() => onQuoteWithService('un projet d impression ou de communication visuelle')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            className="brand-button"
                        >
                            <span>Obtenir un devis gratuit</span>
                            <ArrowRight size={16} />
                        </motion.button>
                    </StaggerItem>
                </Stagger>
            </div>
        </section>
    );
}

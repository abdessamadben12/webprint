import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { aboutCraftHero, aboutProjectOne, aboutProjectThree, aboutProjectTwo } from '@image';
import { Award, Brush, CheckCircle, Compass, Flag, Printer, Shield, Users } from 'lucide-react';

export default function About() {
    const highlights = [
        {
            title: 'Impression tous supports',
            description: 'Offset, numerique, petit format et grand format pour vos documents commerciaux et supports de marque.',
            icon: Printer,
        },
        {
            title: 'Creation graphique',
            description: 'Logo, maquettes, habillage et preparation de fichiers prets a imprimer.',
            icon: Brush,
        },
        {
            title: 'Signaletique et PLV',
            description: 'Enseignes, panneaux, presentoirs, palissades de chantier et solutions visibles sur point de vente.',
            icon: Flag,
        },
    ];

    const values = [
        {
            title: 'Qualite',
            description: 'Des supports adaptes, des couleurs maitrisees et un rendu professionnel.',
            icon: Shield,
        },
        {
            title: 'Conseil',
            description: 'Une equipe qui vous oriente sur le format, le papier, la finition et le budget.',
            icon: Users,
        },
        {
            title: 'Reactivite',
            description: 'Des solutions rapides pour les urgences commerciales et evenementielles.',
            icon: CheckCircle,
        },
        {
            title: 'Accompagnement',
            description: 'Du brief initial a la livraison finale, un suivi clair et direct.',
            icon: Compass,
        },
    ];

    const projects = [
        {
            image: aboutProjectOne,
            title: 'Impression',
            subtitle: 'Offset, numerique, brochures, flyers et cartes',
        },
        {
            image: aboutProjectTwo,
            title: 'Grand format',
            subtitle: 'Baches, affiches, vitrophanie et signaletique',
        },
        {
            image: aboutProjectThree,
            title: 'Industrie publicitaire',
            subtitle: 'PLV, stands, enseignes et objets personnalises',
        },
    ];

    return (
        <div className="text-alidade-navy relative w-full bg-[#FDFCFA]">
           <section
    className="
        relative flex min-h-[420px] w-full
        items-center justify-center overflow-hidden
        bg-[url('/images/backround-print.png')]
        bg-cover bg-center bg-no-repeat
        px-6 py-12 text-center text-white
        md:min-h-[500px]
    "
>
    <div className="relative z-10 mx-auto w-full max-w-4xl">
        <Stagger
            className="flex flex-col items-center justify-center space-y-6 text-center"
            amount={0.3}
        >
            <StaggerItem className="text-alidade-gold inline-flex items-center justify-center gap-3">
                <span className="bg-alidade-gold h-px w-8" />

                <span className="text-sm font-bold tracking-[0.35em] uppercase sm:text-xl">
                    Notre imprimerie
                </span>

                <span className="bg-alidade-gold h-px w-8" />
            </StaggerItem>

            <StaggerItem>
                <h1 className="site-title serif-display text-center font-bold text-white">
                    Donner forme à votre communication
                </h1>
            </StaggerItem>

            <StaggerItem>
                <p className="site-text-lead mx-auto max-w-2xl text-center text-white/80">
                    webprint.ma accompagne les entreprises, commerçants et porteurs de projets
                    avec des impressions, des supports publicitaires et des solutions visuelles
                    conçues pour être vues, comprises et mémorisées.
                </p>
            </StaggerItem>
        </Stagger>
    </div>
</section>

            <section className="relative z-10">
                <div className="mx-auto site-container px-4 py-10 sm:px-6 sm:py-18 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <Reveal className="relative overflow-hidden rounded-2xl shadow-lg" y={36}>
                            <img
                                src={aboutCraftHero}
                                alt="Atelier webprint.ma"
                                className="aspect-[4/5] h-full w-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="from-alidade-navy/50 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

                            <div className="absolute top-6 left-6 flex items-center gap-3 rounded-xl bg-white p-4 shadow-lg">
                                <div className="bg-alidade-navy text-alidade-gold flex h-10 w-10 items-center justify-center rounded-lg">
                                    <Award size={20} />
                                </div>
                                <div>
                                    <div className="text-alidade-navy text-xl font-bold">6+</div>
                                    <div className="text-alidade-muted text-[9px] font-semibold tracking-[0.2em] uppercase">Ans d experience</div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal className="space-y-6" delay={0.15}>
                            <div className="space-y-3">
                                <div className="inline-block">
                                    <span className="text-alidade-navy text-sm font-bold tracking-[0.3em] uppercase sm:text-xl">Qui sommes-nous</span>
                                </div>
                                <h2 className="site-heading serif-display text-alidade-navy font-bold">Une equipe print et conseil</h2>
                            </div>

                            <p className="site-text text-alidade-muted">
                                webprint.ma propose une gamme complete de solutions pour creer, imprimer et installer vos supports de communication.
                                Notre role est de vous aider a choisir le bon format, le bon support et la bonne finition pour obtenir un resultat
                                efficace, propre et adapte a votre budget.
                            </p>

                            <div className="space-y-3 pt-4">
                                {highlights.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.title} className="group flex gap-4">
                                            <div className="text-alidade-gold flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors">
                                                <Icon size={18} />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h4 className="site-label text-alidade-navy font-bold">{item.title}</h4>
                                                <p className="site-text text-alidade-muted mt-1">{item.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

           

            <section className="bg-white">
                <div className="mx-auto site-container px-4 py-10 sm:px-6 sm:py-18 lg:px-8">
                    <Reveal className="mb-16 text-center">
                        <span className="text-alidade-navy text-sm font-bold tracking-[0.3em] uppercase sm:text-xl">Nos valeurs</span>
                        <h2 className="site-heading serif-display text-alidade-navy mt-3 font-bold">Ce qui guide notre travail</h2>
                    </Reveal>

                    <Stagger stagger={0.12} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((item) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={item.title} className="h-full rounded-lg bg-[#ffffff] p-6 transition-colors hover:bg-[#F3EDE4]">
                                    <div className="bg-alidade-navy text-alidade-gold mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                                        <Icon size={20} />
                                    </div>
                                    <h4 className="site-label text-alidade-navy font-bold">{item.title}</h4>
                                    <p className="site-text text-alidade-muted mt-3">{item.description}</p>
                                </StaggerItem>
                            );
                        })}
                    </Stagger>
                </div>
            </section>
{/* 
            <section className="bg-alidade-navy text-white">
                <div className="mx-auto site-container px-4 py-10 sm:px-6 sm:py-18 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <Reveal className="order-2 space-y-6 lg:order-1">
                            <div className="space-y-3">
                                <h2 className="site-heading serif-display font-bold">De la maquette au support fini</h2>
                            </div>

                            <p className="site-text text-white/80">
                                Nous vous aidons a transformer une idee en support concret: choix du format, creation graphique, impression, finition
                                et preparation pour la pose ou la distribution. Chaque projet est traite avec rigueur pour servir votre image.
                            </p>
                        </Reveal>

                        <Reveal className="relative order-1 aspect-[4/3] overflow-hidden rounded-xl shadow-2xl lg:order-2" delay={0.15}>
                            <img
                                src={aboutCraftGrid}
                                alt="Production et finition webprint.ma"
                                className="h-full w-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="via-alidade-navy/20 to-alidade-navy/40 absolute inset-0 bg-gradient-to-l from-transparent" />
                        </Reveal>
                    </div>
                </div>
            </section> */}
        </div>
    );
}

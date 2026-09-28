import { Reveal } from '@/components/motion';
import { clientLogos } from '@/data/clients';

const availableFiles = new Set(
    Object.keys(import.meta.glob('/public/images/clients/*', { query: '?url', import: 'default' })).map((path) => path.replace('/public', '')),
);
const availableLogos = clientLogos.filter((path) => availableFiles.has(path));

// Une rangée de logos qui défile en boucle. La liste est dupliquée pour un défilement sans coupure.
const MarqueeRow = ({ logos, reverse = false }: { logos: string[]; reverse?: boolean }) => (
    <div className="marquee-mask overflow-hidden">
        <div className={`flex w-max items-center gap-12 pr-12 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
            {[...logos, ...logos].map((logo, index) => (
                <img
                    key={`${logo}-${index}`}
                    src={logo}
                    alt="Logo client webprint.ma"
                    className="h-12 w-auto max-w-[130px] shrink-0 object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 lg:h-14"
                    loading="lazy"
                    decoding="async"
                />
            ))}
        </div>
    </div>
);

// Section « Ils nous font confiance » : deux rangées de logos en défilement opposé, pause au survol.
export default function PartnersSection() {
    if (availableLogos.length === 0) return null;

    const half = Math.ceil(availableLogos.length / 2);
    const rowOne = availableLogos.slice(0, half);
    const rowTwo = availableLogos.slice(half);

    return (
        <section className="border-t border-gray-100 bg-white py-20">
            <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
                <Reveal className="space-y-3 text-center">
                    <h3 className="site-heading serif-display font-bold text-[#1a1c1f] uppercase">Ils nous font confiance</h3>
                    <p className="site-text mx-auto max-w-xl text-gray-500">
                        Des entreprises et institutions de tous secteurs nous confient leurs projets d'impression, de signaletique et de communication
                        visuelle.
                    </p>
                </Reveal>

                <Reveal className="marquee-group space-y-8" y={0} delay={0.2}>
                    <MarqueeRow logos={rowOne} />
                    <MarqueeRow logos={rowTwo} reverse />
                </Reveal>
            </div>
        </section>
    );
}

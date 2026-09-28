import { EASE, Reveal } from '@/components/motion';
import ServiceImage from '@/components/pages/service-image';
import { services, type ServiceDetail } from '@/data/services';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FEATURED_SLUGS = ['impression-offset', 'impression-numerique', 'grand-format', 'plv-industrie-publicitaire'];

const featured = FEATURED_SLUGS.map((slug) => services.find((s) => s.slug === slug)).filter((s): s is ServiceDetail => s !== undefined);

function MetierCard({ service, index }: { service: ServiceDetail; index: number }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
                hidden: { opacity: 0, y: 48 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
        >
            <Link
                href={`/services/${service.slug}`}
                className="group hover:border-brand-blue/25 flex min-h-[7.5rem] items-stretch overflow-hidden rounded-lg border border-gray-100 bg-gray-50 transition-colors hover:bg-white sm:min-h-[8.5rem]"
            >
                <span className="serif-display group-hover:text-brand-blue flex w-16 shrink-0 items-center justify-center text-3xl font-bold text-gray-300 transition-colors duration-300 sm:w-24 sm:text-4xl">
                    {String(index + 1).padStart(2, '0')}
                </span>

                <div className="flex min-w-0 flex-grow flex-col justify-center py-5 pr-4">
                    <h4 className="site-subheading text-alidade-navy font-semibold">{service.title}</h4>
                    <motion.div
                        className="overflow-hidden"
                        variants={{
                            hidden: { height: 0, opacity: 0, marginTop: 0 },
                            visible: { height: 'auto', opacity: 1, marginTop: 4, transition: { duration: 0.7, delay: 0.3, ease: EASE } },
                        }}
                    >
                        <p className="site-text-small text-gray-500">{service.description}</p>
                    </motion.div>
                </div>

                <div className="relative hidden w-2/5 max-w-xs shrink-0 overflow-hidden sm:block">
                    <ServiceImage service={service} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-50/40" />

                    <span className="group-hover:bg-brand-blue text-brand-blue absolute top-1/2 right-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-sm transition-colors group-hover:text-white">
                        <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                </div>

                <span className="text-alidade-navy mr-4 flex items-center self-center sm:hidden">
                    <ArrowRight size={18} />
                </span>
            </Link>
        </motion.div>
    );
}

export default function MetiersSection() {
    return (
        <section className="border-t border-gray-100 bg-white py-20">
            <div className="mx-auto site-container px-4 sm:px-6 lg:px-8">
                <Reveal className="space-y-3 text-center">
                    <h3 className="site-heading text-alidade-navy serif-display font-bold">Impression, signaletique et communication visuelle</h3>
                </Reveal>

                <div className="mt-12 space-y-6">
                    {featured.map((service, index) => (
                        <MetierCard key={service.slug} service={service} index={index} />
                    ))}
                </div>

                <Reveal className="mt-12 text-center" delay={0.15}>
                    <Link href="/savoir-faire" className="brand-outline-button">
                        <span>Voir tous nos services</span>
                        <ArrowRight size={15} />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}

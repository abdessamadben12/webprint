import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export type StackSpreadImage = { src: string; alt: string };

const stackRotations = [-10, 6, 10, 5, -4, -9];

function SpreadCard({ item, index, progress, compact }: {
    item: StackSpreadImage;
    index: number;
    progress: MotionValue<number>;
    compact: boolean;
}) {
    const columns = compact ? 2 : 3;
    const targetX = compact ? 26 + (index % columns) * 48 : 18 + (index % columns) * 32;
    const targetY = compact ? 18 + Math.floor(index / columns) * 32 : 18 + Math.floor(index / columns) * 64;
    const left = useTransform(progress, [0, 1], ['50%', `${targetX}%`]);
    const top = useTransform(progress, [0, 1], ['50%', `${targetY}%`]);
    const rotate = useTransform(progress, [0, 1], [stackRotations[index] ?? 0, index % 2 === 0 ? -2 : 2]);
    const scale = useTransform(progress, [0, 1], [0.9, 1]);

    return (
        <motion.figure
            className="stack-spread-card"
            style={{ left, top, rotate, scale, translateX: '-50%', translateY: '-50%', zIndex: index + 1 }}
        >
            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" draggable={false} />
        </motion.figure>
    );
}

export default function StackSpread({ images }: { images: StackSpreadImage[] }) {
    const sectionRef = useRef<HTMLElement>(null);
    const reduceMotion = useReducedMotion();
    const [compact, setCompact] = useState(false);
    const [shortScreen, setShortScreen] = useState(false);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
    const progress = useTransform(scrollYProgress, [0, 0.08, 0.8, 1], [0, 0, 1, 1]);
    const titleOpacity = useTransform(progress, [0.1, 0.65], [0, 1]);
    const isStatic = Boolean(reduceMotion || shortScreen);

    useEffect(() => {
        const mobile = window.matchMedia('(max-width: 767px)');
        const short = window.matchMedia('(max-height: 650px)');
        const update = () => {
            setCompact(mobile.matches);
            setShortScreen(short.matches);
        };
        update();
        mobile.addEventListener('change', update);
        short.addEventListener('change', update);
        return () => {
            mobile.removeEventListener('change', update);
            short.removeEventListener('change', update);
        };
    }, []);

    return (
        <section ref={sectionRef} id="galerie-accueil" aria-labelledby="gallery-heading"
            className={`stack-spread${isStatic ? ' stack-spread-static' : ''}`}>
            <div className="stack-spread-stage">
                <motion.div className="stack-spread-heading" style={{ opacity: isStatic || compact ? 1 : titleOpacity }}>
                    <span className="site-text-small font-semibold text-brand-blue">Galerie</span>
                    <h2 id="gallery-heading" className="site-heading mt-2 font-bold text-alidade-navy">
                        Notre savoir-faire <span className="text-brand-blue">en images.</span>
                    </h2>
                    <p className="site-text mt-3 text-gray-600">De l'impression aux finitions, le soin du détail.</p>
                </motion.div>
                <div className="stack-spread-images">
                    {images.map((item, index) => isStatic ? (
                        <figure className="stack-spread-card" key={item.src}>
                            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                        </figure>
                    ) : (
                        <SpreadCard key={item.src} item={item} index={index} progress={progress} compact={compact} />
                    ))}
                </div>
            </div>
        </section>
    );
}

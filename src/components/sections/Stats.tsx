import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { stats } from '../../data/portfolio';

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        if (isInView) {
            const animation = animate(count, value, { duration: 2, ease: "easeOut" });
            return animation.stop;
        }
    }, [value, count, isInView]);

    return (
        <span ref={ref} className="text-4xl font-bold font-serif text-white inline-block min-w-[100px]">
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
}

export default function Stats() {
    // Generate random stats on mount
    const displayStats = stats.map(stat => {
        if (stat.label === "Cups of coffee") {
            return { ...stat, value: Math.floor(Math.random() * (1000 - 500 + 1) + 500) };
        }
        if (stat.label === "Lines of Code") {
            return { ...stat, value: Math.floor(Math.random() * (250000 - 150000 + 1) + 150000) };
        }
        return stat;
    });

    return (
        <section className="py-20 bg-cover bg-fixed relative" style={{ backgroundImage: `url("${import.meta.env.BASE_URL}images/stats_bg.png")` }}>
            <div className="absolute inset-0 bg-primary/90" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {displayStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <span className="block text-white/80 uppercase tracking-widest text-xs font-semibold">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { services } from '../../data/portfolio';

import { ChevronRight } from 'lucide-react';

// Colors for services cards
const serviceColors = [
    'border-b-accent-blue text-accent-blue',
    'border-b-accent-red text-accent-red',
    'border-b-accent-green text-accent-green',
    'border-b-accent-yellow text-accent-yellow',
    'border-b-accent-purple text-accent-purple',
];

export default function Services() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 1280) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(3);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(services.length / itemsPerPage);

    const scrollTo = (pageIndex: number) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const targetItemIndex = Math.min(pageIndex * itemsPerPage, services.length - 1);
            const item = container.children[targetItemIndex] as HTMLElement;
            if (item) {
                container.scrollTo({
                    left: item.offsetLeft - container.offsetLeft,
                    behavior: 'smooth'
                });
                setActiveIndex(pageIndex);
            }
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollLeft = container.scrollLeft;
            const itemWidth = container.children[0].clientWidth;
            const gap = 32;

            const firstVisibleIndex = Math.round(scrollLeft / (itemWidth + gap));
            let pageIndex = Math.floor(firstVisibleIndex / itemsPerPage);

            if (scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                pageIndex = totalPages - 1;
            }

            setActiveIndex(pageIndex);
        }
    };

    return (
        <section id="skills" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative">

                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-2">
                            My Specialty
                        </span>
                        <h2 className="text-3xl font-bold font-serif mb-6 uppercase tracking-[3px]">
                            My Skills & Expertise
                        </h2>
                    </motion.div>
                </div>

                {/* Services Horizontal Scroll */}
                <div className="relative group">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory no-scrollbar scroll-smooth"
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const colorClass = serviceColors[index % serviceColors.length];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`w-full xl:w-[calc(33.333%-21.33px)] flex-shrink-0 p-8 bg-white shadow-xl text-center rounded-sm border-b-4 ${colorClass.split(' ')[0]} snap-start hover:-translate-y-2 transition-transform duration-300`}
                                >
                                    <div className={`mb-6 inline-block p-4 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors ${colorClass.split(' ')[1]}`}>
                                        <Icon size={40} />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif mb-1">{service.title}</h3>
                                    <span className="block text-xs uppercase tracking-wider text-gray-400 mb-4">{service.subtitle}</span>
                                    <p className="text-gray-600 leading-relaxed font-sans mb-6 text-sm">{service.description}</p>

                                    <ul className="space-y-3 text-left border-t border-gray-100 pt-6">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-700 font-sans text-xs uppercase tracking-wider font-semibold">
                                                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1 mr-3 shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

                {/* Pagination Dots */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-3 mt-8">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Mobile Scroll Indicator */}
                <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-gray-400 animate-pulse">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Swipe for more</span>
                    <ChevronRight size={16} />
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </section>
    );
}

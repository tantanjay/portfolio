import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personalInfo } from '../../data/portfolio';

const slides = [
    'images/hero_bg.png', // Relative path, will prepend BASE_URL in component
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center w-full overflow-hidden">
            {/* Background Slideshow */}
            {slides.map((slide, index) => (
                <motion.div
                    key={slide}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${slide})` }}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                        opacity: index === currentSlide ? 1 : 0,
                        scale: index === currentSlide ? 1 : 1.1
                    }}
                    transition={{ duration: 1.5 }}
                />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold font-serif text-black mb-6 leading-tight">
                        Hi! <br /> I'm {personalInfo.name.split(' ')[0]}
                    </h1>
                    <p className="text-xl md:text-2xl font-sans text-black/80 mb-8 border-b-2 border-primary inline-block pb-2">
                        Software Developer | Architect | Tech Enthusiast
                    </p>
                    <a
                        href="/public/images/ITAX.png" // Placeholder CV download or link
                        download
                        className="btn inline-block px-6 py-3 border border-black text-black font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors whitespace-nowrap"
                    >
                        Download CV
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

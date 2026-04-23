import { motion } from 'framer-motion';
import { about } from '../../data/portfolio';

export default function About() {
    return (
        <section id="about" className="py-20 px-6 md:px-12">
            <div className="container mx-auto">

                {/* About Text */}
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-2">
                            About Me
                        </span>
                        <h2 className="text-3xl font-bold font-serif mb-8 uppercase tracking-[3px]">
                            {about.heading}
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed font-sans text-lg">
                            {about.text.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

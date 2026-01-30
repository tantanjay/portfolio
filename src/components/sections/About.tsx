import { motion } from 'framer-motion';
import { about } from '../../data/portfolio';

// Map color names to Tailwind classes
const colorMap: Record<string, string> = {
    blue: 'border-b-accent-blue',
    red: 'border-b-accent-red',
    yellow: 'border-b-accent-yellow',
    purple: 'border-b-accent-purple',
};

const iconColorMap: Record<string, string> = {
    blue: 'text-accent-blue',
    red: 'text-accent-red',
    yellow: 'text-accent-yellow',
    purple: 'text-accent-purple',
};

export default function About() {
    return (
        <section id="about" className="py-20 px-6 md:px-12">
            <div className="container mx-auto">

                {/* About Text */}
                <div className="mb-16">
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

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {about.services.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`p-8 bg-white shadow-lg border-b-4 ${colorMap[item.color] || 'border-gray-200'} hover:-translate-y-2 transition-transform duration-300`}
                            >
                                <div className={`mb-4 ${iconColorMap[item.color]}`}>
                                    <Icon size={40} />
                                </div>
                                <h3 className="text-xl font-medium font-serif">{item.title}</h3>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Hire Me Banner */}
                <div className="mt-16 bg-secondary p-8 md:p-12 text-center rounded-sm">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                        I am available for freelance work <br /> and exciting new opportunities.
                    </h2>
                    <a href="#contact" className="inline-block border border-black font-medium uppercase tracking-widest px-8 py-3 hover:bg-black hover:text-white transition-colors">
                        Hire me
                    </a>
                </div>

            </div>
        </section>
    );
}

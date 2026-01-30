import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';

// Colors for skill categories
const skillColors = [
    'border-l-accent-blue',
    'border-l-accent-red',
    'border-l-accent-purple',
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-2">
                            {skills.specialty}
                        </span>
                        <h2 className="text-3xl font-bold font-serif mb-6 uppercase tracking-[3px]">
                            My Skills
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg font-sans">
                            {skills.description}
                        </p>
                    </motion.div>
                </div>

                {/* Skills Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.categories.map((category, index) => {
                        const colorClass = skillColors[index % skillColors.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`bg-white p-6 shadow-md border-l-4 ${colorClass}`}
                            >
                                <h3 className="text-xl font-bold font-serif mb-1">{category.title}</h3>
                                <span className="block text-xs uppercase tracking-wider text-gray-400 mb-4">{category.subtitle}</span>

                                <ul className="space-y-3">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-700 font-sans">
                                            <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { services } from '../../data/portfolio';

// Colors for services cards
const serviceColors = [
    'border-b-accent-blue text-accent-blue',
    'border-b-accent-red text-accent-red',
    'border-b-accent-yellow text-accent-yellow',
];

export default function Services() {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">

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

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const colorClass = serviceColors[index % serviceColors.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`p-8 bg-white shadow-xl text-center rounded-sm border-b-4 ${colorClass.split(' ')[0]} group hover:-translate-y-2 transition-transform duration-300`}
                            >
                                <div className={`mb-6 inline-block p-4 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors ${colorClass.split(' ')[1]}`}>
                                    <Icon size={40} />
                                </div>
                                <h3 className="text-xl font-bold font-serif mb-1">{service.title}</h3>
                                <span className="block text-xs uppercase tracking-wider text-gray-400 mb-4">{service.subtitle}</span>
                                <p className="text-gray-600 leading-relaxed font-sans mb-6">{service.description}</p>

                                <ul className="space-y-3 text-left border-t border-gray-100 pt-6">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-700 font-sans text-sm">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1.5 mr-3 shrink-0"></span>
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

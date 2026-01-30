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
        <section id="services" className="py-20 bg-white">
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
                            What I do?
                        </span>
                        <h2 className="text-3xl font-bold font-serif mb-6 uppercase tracking-[3px]">
                            Here are some of my expertise
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
                                <h3 className="text-xl font-medium font-serif mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-sans">{service.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

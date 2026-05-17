import { motion } from 'framer-motion';
import { evolution } from '../../data/portfolio';
import { Activity, Network, Layers, Cpu, BrainCircuit } from 'lucide-react';

const generationIcons = [
    Activity,     // Gen 0: Foundation
    Network,      // Gen 1: Workflow
    Layers,       // Gen 2: Distributed Enterprise
    Cpu,          // Gen 3: Platform & AI
    BrainCircuit  // Gen 4: AI-Native
];

export default function Evolution() {
    return (
        <section id="evolution" className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-2">
                            Engineering Evolution
                        </span>
                        <h2 className="text-3xl font-bold font-serif mb-6 uppercase tracking-[3px]">
                            The Arc of Abstraction
                        </h2>
                        <p className="text-gray-600 max-w-2xl text-sm leading-relaxed">
                            A continuous, unbroken evolution from foundational database-driven applications to localized, offline-first AI architecture. This timeline traces how constraints and production realities shaped the abstraction layers across a decade of engineering.
                        </p>
                    </motion.div>
                </div>

                <div className="relative border-l-2 border-dashed border-gray-200 ml-6 md:ml-12 space-y-16">
                    {evolution.map((item, index) => {
                        const Icon = generationIcons[index] || Activity;
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="relative pl-12 group"
                            >
                                {/* Generation Bubble */}
                                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-gray-400 shadow-sm z-10 group-hover:border-primary group-hover:text-primary transition-all duration-300">
                                    <Icon size={20} />
                                </div>

                                <div className="bg-gray-50/50 rounded-xl p-8 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="px-3 py-1 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                                {item.generation}
                                            </span>
                                            <h3 className="text-2xl font-bold font-serif text-gray-900 flex items-baseline gap-2 flex-wrap">
                                                <span>{item.title}</span>
                                                {'impact' in item && item.impact && (
                                                    <span className="text-sm font-bold text-gray-500">
                                                        ({item.impact})
                                                    </span>
                                                )}
                                            </h3>
                                        </div>
                                        <span className="text-sm font-bold text-gray-400 tracking-wider">
                                            {item.period}
                                        </span>
                                    </div>

                                    <div className="mb-6 pl-4 border-l-2 border-primary/20">
                                        <p className="text-gray-600 font-sans leading-relaxed italic">
                                            "{item.description}"
                                        </p>
                                    </div>



                                    <div>
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                                            Key Systems & Milestones
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {item.projects.map((project, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-700">
                                                    <span className="mr-2 text-primary mt-1 opacity-60 flex-shrink-0">•</span>
                                                    <span>{project}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                    
                    <div className="pl-12">
                        <div className="w-3 h-3 bg-gray-300 rounded-full absolute -left-[7px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

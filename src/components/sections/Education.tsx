import { motion } from 'framer-motion';
import { education } from '../../data/portfolio';
import { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';

export default function Education() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="education" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">

                <div className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-2">
                            Education
                        </span>
                        <h2 className="text-3xl font-bold font-serif mb-6 uppercase tracking-[3px]">
                            Education
                        </h2>
                    </motion.div>
                </div>

                <div className="w-full">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 border border-gray-100 shadow-sm
                  ${openIndex === index ? 'bg-primary text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}
                `}
                            >
                                <div className="flex items-center gap-4">
                                    <GraduationCap size={24} />
                                    <span className="font-medium font-sans uppercase tracking-wider text-sm md:text-base">
                                        {item.title}
                                    </span>
                                </div>
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-white border-l border-r border-b border-gray-100"
                            >
                                <div className="p-6">
                                    <p className="font-bold text-gray-800 mb-2">{item.institution}</p>
                                    <p className="text-sm text-gray-500 mb-4">{item.year}</p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                                        {item.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

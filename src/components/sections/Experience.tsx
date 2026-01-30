import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';
import { Briefcase } from 'lucide-react';

const colors = [
    'bg-accent-blue',
    'bg-accent-red',
    'bg-accent-yellow',
    'bg-accent-purple',
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">

                <div className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-2">
                            Experience
                        </span>
                        <h2 className="text-3xl font-bold font-serif mb-6 uppercase tracking-[3px]">
                            Work Experience
                        </h2>
                    </motion.div>
                </div>

                <div className="relative border-l-4 border-gray-200 ml-6 md:ml-12 space-y-12">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-12"
                        >
                            {/* Icon Bubble */}
                            <div className={`absolute -left-[22px] top-0 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md z-10 ${colors[index % colors.length]}`}>
                                <Briefcase size={18} />
                            </div>

                            <div className="bg-white p-8 shadow-md rounded-sm relative group hover:-translate-y-1 transition-transform duration-300">
                                {/* Arrow */}
                                <div className="absolute top-4 -left-3 w-0 h-0 border-t-[10px] border-t-transparent border-r-[12px] border-r-white border-b-[10px] border-b-transparent" />

                                <h3 className="text-xl font-bold font-serif mb-1">
                                    {item.role} <span className="font-sans font-normal text-gray-500">at {item.company}</span>
                                </h3>
                                <span className="block text-xs uppercase tracking-widest text-gray-400 mb-4">{item.period}</span>
                                <p className="text-gray-600 leading-relaxed font-sans">
                                    {item.description}
                                </p>
                                {/* 
                <div className="mt-4">
                  <ul className="list-disc list-inside text-gray-500 text-sm">
                     If we parsed list items in data, we could map them here. 
                     For now sticking to description.
                  </ul>
                </div> 
                */}
                            </div>
                        </motion.div>
                    ))}

                    <div className="pl-12">
                        <div className="w-4 h-4 bg-gray-300 rounded-full absolute -left-[10px]" />
                    </div>
                </div>

            </div>
        </section>
    );
}

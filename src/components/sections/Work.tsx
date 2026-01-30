import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolio';
import { Folder, Code2, Layers, Users, Globe, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const categoryColors: Record<string, string> = {
    'AI / ML': 'bg-blue-100 text-blue-800',
    'Security': 'bg-red-100 text-red-800',
    'Full Stack': 'bg-yellow-100 text-yellow-800',
    'Government': 'bg-purple-100 text-purple-800',
    'Healthcare': 'bg-green-100 text-green-800',
};

export default function Work() {
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

    return (
        <section id="work" className="py-20 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">

                <div className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-2">
                            My Work
                        </span>
                        <h2 className="text-3xl font-bold font-serif mb-6 uppercase tracking-[3px]">
                            Recent Projects
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                                        <Folder size={28} className="text-gray-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${categoryColors[project.category] || 'bg-gray-100 text-gray-600'}`}>
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-6 font-sans text-sm leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="space-y-3 mb-6 flex-grow">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Layers size={16} className="text-primary/70" />
                                        <span className="font-semibold text-gray-700">Role:</span> {project.roles}
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-gray-500">
                                        <Code2 size={16} className="text-primary/70 mt-1 flex-shrink-0" />
                                        <span>
                                            <span className="font-semibold text-gray-700">Stack:</span> {project.stack}
                                        </span>
                                    </div>
                                    {/* Show basic info in card, detailed in modal */}
                                </div>

                                <div className="mt-auto pt-6 border-t border-gray-100">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="text-primary text-sm font-bold uppercase tracking-widest hover:underline flex items-center gap-2"
                                    >
                                        View Details <ExternalLink size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-10">
                                <span className={`inline-block mb-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${categoryColors[selectedProject.category] || 'bg-gray-100 text-gray-600'}`}>
                                    {selectedProject.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4 text-gray-900">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-gray-600 mb-8 font-sans leading-relaxed text-lg">
                                    {selectedProject.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-start gap-3">
                                        <Layers className="text-primary shrink-0" size={20} />
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Roles</h4>
                                            <p className="text-sm text-gray-600">{selectedProject.roles}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Code2 className="text-primary shrink-0" size={20} />
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Tech Stack</h4>
                                            <p className="text-sm text-gray-600">{selectedProject.stack}</p>
                                        </div>
                                    </div>
                                    {'teamSize' in selectedProject && (
                                        <div className="flex items-start gap-3">
                                            <Users className="text-primary shrink-0" size={20} />
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Team Size</h4>
                                                <p className="text-sm text-gray-600">{(selectedProject as any).teamSize}</p>
                                            </div>
                                        </div>
                                    )}
                                    {'deployment' in selectedProject && (
                                        <div className="flex items-start gap-3">
                                            <Globe className="text-primary shrink-0" size={20} />
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Deployment</h4>
                                                <p className="text-sm text-gray-600">{(selectedProject as any).deployment}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-primary rounded-full"></span> Key Contributions
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedProject.keyPoints.map((point, idx) => (
                                            <li key={idx} className="flex items-start text-gray-600 text-sm md:text-base">
                                                <span className="mr-3 text-primary mt-1.5">•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

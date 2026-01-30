import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import { Mail, Linkedin, Briefcase } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-2">
                            Get in Touch
                        </span>
                        <h2 className="text-3xl font-bold font-serif mb-6 uppercase tracking-[3px]">
                            Contact
                        </h2>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">

                    <motion.a
                        href={personalInfo.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center justify-center p-10 bg-white shadow-lg rounded-sm w-full md:w-1/3 text-center group border-b-4 border-transparent hover:border-blue-600 transition-all"
                    >
                        <div className="mb-4 text-gray-400 group-hover:text-blue-600 transition-colors">
                            <Linkedin size={40} />
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">LinkedIn</h3>
                        <span className="text-sm text-gray-500">Connect with me</span>
                    </motion.a>

                    <motion.a
                        href={personalInfo.socials.jobstreet}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center justify-center p-10 bg-white shadow-lg rounded-sm w-full md:w-1/3 text-center group border-b-4 border-transparent hover:border-yellow-500 transition-all"
                    >
                        <div className="mb-4 text-gray-400 group-hover:text-yellow-500 transition-colors">
                            <Briefcase size={40} />
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">Jobstreet</h3>
                        <span className="text-sm text-gray-500">View Profile</span>
                    </motion.a>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center justify-center p-10 bg-white shadow-lg rounded-sm w-full md:w-1/3 text-center group border-b-4 border-transparent hover:border-red-500 transition-all"
                    >
                        <div className="mb-4 text-gray-400 group-hover:text-red-500 transition-colors">
                            <Mail size={40} />
                        </div>
                        <h3 className="font-serif font-bold text-lg mb-2">Email</h3>
                        <a href={`mailto:${personalInfo.email}`} className="text-sm text-gray-500 hover:text-red-500 transition-colors">
                            {personalInfo.email}
                        </a>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

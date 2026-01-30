import { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { Menu, X } from 'lucide-react';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Mobile Menu Toggle */}
            <button
                onClick={toggleMenu}
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg"
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Sidebar Container */}
            <aside className={`
        fixed top-0 left-0 h-full w-[300px] bg-sidebar z-40 transition-transform duration-300 ease-in-out font-sans
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
                <div className="h-full flex flex-col items-center justify-center p-8 text-center overflow-y-auto">

                    {/* Profile Image */}
                    <div
                        className="w-[150px] h-[150px] rounded-full bg-cover bg-center mb-8 mx-auto"
                        style={{ backgroundImage: `url("${import.meta.env.BASE_URL}images/profile_placeholder.png")` }}
                    />

                    {/* Name & Role */}
                    <h1 className="text-2xl font-bold font-serif mb-2">
                        <a href="#home" onClick={() => scrollToSection('home')}>{personalInfo.name}</a>
                    </h1>
                    <span className="text-xs uppercase tracking-widest text-accent-blue mb-8 block">
                        {personalInfo.role} <br /> in {personalInfo.location}
                    </span>

                    {/* Navigation */}
                    <nav className="w-full mb-8">
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-xs font-medium uppercase tracking-[1px] hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary
                      ${activeSection === item.id ? 'text-primary border-primary' : 'text-gray-600'}
                    `}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Footer */}
                    <div className="text-sm text-gray-500 mt-auto">
                        <p className="mb-4">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                        <div className="flex justify-center space-x-4">
                            {/* Add Social Icons if needed */}
                        </div>
                    </div>

                </div>
            </aside>
        </>
    );
}

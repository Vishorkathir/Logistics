import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logomain.png';
import NotificationBell from './NotificationBell';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/catalog' },
        { name: 'About', path: '/about' },
        { name: 'Track Order', path: '/track' },
        { name: 'Contact', path: '/#contact' },
    ];

    // Helper to handle hash scrolling if on same page, or navigation
    const handleNavClick = (path) => {
        setIsOpen(false);
        if (path.startsWith('/#')) {
            const hash = path.substring(2);
            if (location.pathname === '/') {
                const element = document.getElementById(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
            // If not on home, Link will handle to /#hash, but we might need Effect to scroll after load. 
            // React Router doesn't always auto-scroll to hash on new route. 
        } else {
            window.scrollTo(0, 0);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/'
                ? 'bg-stone-900/80 backdrop-blur-md shadow-lg py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center text-white">
                <Link to="/" className="text-2xl font-bold flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
                    <img src={logo} alt="Merixo Export Logo" className="h-12 w-auto Node.js backend  object-contain rounded-full" />
                    <span className="tracking-wider">MERIXO<span className="" style={{WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg,rgba(255, 102, 0, 1) 0%, rgba(255, 123, 0, 1) 50%, rgba(255, 145, 0, 1) 100%)"}}>LOGISTICS</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => handleNavClick(link.path)}
                            className="text-sm font-medium hover:text-spice-gold transition-colors relative group"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {link.name}
                            </motion.span>
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-spice-gold transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link to="/quote">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-spice hover:bg-spice-red text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg shadow-spice/20 flex items-center gap-2"
                        >
                            <Phone size={16} />
                            Get Quote
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-stone-900 overflow-hidden"
                    >
                        <div className="p-6 flex flex-col gap-4 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => handleNavClick(link.path)}
                                    className="text-white hover:text-spice-gold text-lg"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

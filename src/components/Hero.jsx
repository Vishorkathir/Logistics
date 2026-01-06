import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import BgVideo from '../assets/BgVideo.mp4';
import { ArrowRight, Globe, Package, ChevronDown } from 'lucide-react';

const Hero = () => {
    const videoRef = useRef(null);
    const heroRef = useRef(null);

    // Scroll-based parallax effects
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
    const textY = useTransform(scrollY, [0, 300], [0, 50]);

    useEffect(() => {
        const videoElement = videoRef.current;
        const heroElement = heroRef.current;

        // Intersection Observer to detect when Hero section is visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Hero section is visible - play video with audio
                        if (videoElement) {
                            videoElement.muted = false; // Enable audio
                            videoElement.play().catch(err => {
                                console.log('Video play failed:', err);
                                // If autoplay with audio fails, try muted
                                videoElement.muted = true;
                                videoElement.play();
                            });
                        }
                    } else {
                        // Hero section is not visible - pause video
                        if (videoElement) {
                            videoElement.pause();
                            videoElement.muted = true; // Mute when paused
                        }
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the section is visible
            }
        );

        if (heroElement) {
            observer.observe(heroElement);
        }

        // Cleanup observer on component unmount
        return () => {
            if (heroElement) {
                observer.unobserve(heroElement);
            }
        };
    }, []);

    return (
        <div ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video with Overlay */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{ scale }}
            >
                <video
                    ref={videoRef}
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={BgVideo} type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            {/* Content */}
            <motion.div 
                className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white mt-16"
                style={{ y: textY, opacity }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    

                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-spice-gold to-spice-red">Indian Products</span> <br className="hidden sm:block" />
                        Delivered <span className="text-transparent bg-clip-text bg-gradient-to-r from-coconut-light to-coconut">Worldwide</span>
                    </motion.h1>
                    

                    <motion.p 
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto font-light px-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                        Exporting premium Basmati Rice, Spices, Fresh Fruits & Vegetables to 16+ countries.
                        Quality assured with ISO & FSSAI certifications.
                    </motion.p>


                    
                    <motion.div 
                        className="flex justify-center mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className="bg-white/10 backdrop-blur-sm mt-[-10px] border border-white/20 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase flex items-center gap-2">
                            <Globe size={14} className="text-spice-gold" />
                            Trusted Indian Export Partner
                        </span>
                    </motion.div>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                    >
                        <Link to="/quote">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-spice hover:bg-spice-red text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all shadow-xl shadow-spice/30 flex items-center gap-2 group"
                            >
                                Get Free Quote
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                        <Link to="/track">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border border-white/30 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all backdrop-blur-sm flex items-center gap-2"
                            >
                                <Package size={20} />
                                Track Order
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white/70 text-xs sm:text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            ISO 9001 Certified
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            FSSAI Approved
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            APEDA Registered
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-white/70 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs sm:text-sm font-medium tracking-wider">Scroll Down</span>
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;

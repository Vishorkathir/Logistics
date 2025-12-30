import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BgVideo from '../assets/BgVideo.mp4';
import { ArrowRight, Globe, Package } from 'lucide-react';

const Hero = () => {
    const videoRef = useRef(null);
    const heroRef = useRef(null);

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
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                >
                    <source src={BgVideo} type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center mb-4">
                        <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1 rounded-full text-sm font-medium tracking-wide uppercase flex items-center gap-2">
                            <Globe size={14} className="text-spice-gold" />
                            Global Logistics Partner
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Exporting <span className="text-transparent bg-clip-text bg-gradient-to-r from-coconut-light to-coconut">Nature's</span> Finest <br />
                        To The <span className="text-transparent bg-clip-text bg-gradient-to-r from-spice-gold to-spice-red">World</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
                        Premium supply chain solutions for Coconuts & Spices.
                        From our farms to your warehousing, we handle Ocean & Air Freight with precision.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Link to="/quote">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-spice hover:bg-spice-red text-white text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-spice/30 flex items-center gap-2 group"
                            >
                                Start Shipping
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border border-white/30 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all backdrop-blur-sm flex items-center gap-2"
                        >
                            <Package size={20} />
                            Track Shipment
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </motion.div> */}
        </div>
    );
};

export default Hero;

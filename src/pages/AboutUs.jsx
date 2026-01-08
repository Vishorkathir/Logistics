import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Globe, Shield } from 'lucide-react';
import founderImage from '../assets/Founder.png';

const AboutUs = () => {
    const values = [
        { icon: Heart, title: 'Quality First', desc: 'We never compromise on the quality of our products' },
        { icon: Users, title: 'Customer Focus', desc: 'Your success is our priority' },
        { icon: Globe, title: 'Global Reach', desc: 'Connecting India to the world' },
        { icon: Shield, title: 'Trust & Reliability', desc: 'Building long-term partnerships' },
    ];

    const team = [
        { name: 'Sheshuaakaash', role: 'Founder & CEO', image: founderImage },
        { name: 'Priya Patel', role: 'Operations Director', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
        { name: 'Amit Singh', role: 'Export Manager', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { name: 'Sunita Reddy', role: 'Quality Assurance', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    ];

    return (
        <div className="min-h-screen bg-white pt-20 sm:pt-24">
            {/* Hero Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-stone-900 to-stone-800">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">About Merixo</h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Your Trusted Export Partner Since 2015
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4 sm:mb-6">Our Story</h2>
                            <p className="text-stone-600 mb-4 leading-relaxed text-sm sm:text-base">
                                Founded in 2015, Merixo started with a simple mission: to bring the finest Indian products to the global market. What began as a small trading operation has grown into a trusted export partner serving clients across 16+ countries.
                            </p>
                            <p className="text-stone-600 mb-4 leading-relaxed">
                                Our journey has been driven by a passion for quality and a commitment to building lasting relationships with our clients. We work directly with farmers and producers across India to source the best spices, rice, fruits, and vegetables.
                            </p>
                            <p className="text-stone-600 leading-relaxed">
                                Today, Merixo is recognized as a leading exporter of premium Indian agricultural products, known for our reliability, quality assurance, and exceptional customer service.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600"
                                alt="Spices"
                                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full"
                            />
                            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-spice text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                                <p className="text-2xl sm:text-3xl font-bold">10+</p>
                                <p className="text-xs sm:text-sm">Years of Excellence</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg"
                        >
                            <Target className="w-10 h-10 sm:w-12 sm:h-12 text-spice mb-3 sm:mb-4" />
                            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 sm:mb-4">Our Mission</h3>
                            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                                To connect Indian farmers and producers with global markets, ensuring fair trade practices while delivering premium quality products that exceed customer expectations.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg"
                        >
                            <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-spice-gold mb-3 sm:mb-4" />
                            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 sm:mb-4">Our Vision</h3>
                            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                                To become the world's most trusted source for Indian agricultural exports, setting new standards for quality, sustainability, and customer satisfaction in international trade.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 sm:mb-10 md:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-3 sm:mb-4">Our Values</h2>
                        <p className="text-stone-600 text-sm sm:text-base">The principles that guide everything we do</p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center p-4 sm:p-5 md:p-6"
                            >
                                <value.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-spice mx-auto mb-2 sm:mb-3 md:mb-4" />
                                <h3 className="font-bold text-stone-900 mb-1 sm:mb-2 text-sm sm:text-base">{value.title}</h3>
                                <p className="text-stone-600 text-xs sm:text-sm">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 sm:mb-10 md:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-3 sm:mb-4">Meet Our Team</h2>
                        <p className="text-stone-600 text-sm sm:text-base">The people behind Merixo's success</p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {team.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg text-center"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
                                />
                                <h3 className="font-bold text-stone-900 text-sm sm:text-base">{member.name}</h3>
                                <p className="text-spice text-xs sm:text-sm">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;

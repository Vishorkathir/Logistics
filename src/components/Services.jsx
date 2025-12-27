import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            type: "spring"
        }
    })
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-sand relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-coconut-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-spice-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-spice font-semibold tracking-wider uppercase mb-3"
                    >
                        Our Expertise
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold text-stone-800"
                    >
                        Global Logistics Services
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <Link to={`/services/${service.id}`} key={service.id}>
                            <motion.div
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-b-4 border-transparent hover:border-spice-gold group h-full"
                            >
                                <div className="w-16 h-16 bg-stone-100 rounded-xl flex items-center justify-center text-stone-600 mb-6 group-hover:bg-spice group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-stone-800 mb-3">{service.title}</h3>
                                <p className="text-stone-600 leading-relaxed">{service.shortDesc}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import productsImg from '../assets/products.png';
import { CheckCircle } from 'lucide-react';

const Products = () => {
    return (
        <section id="products" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img src={productsImg} alt="Coconuts and Spices" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                        </div>
                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-stone-100 hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-coconut-dark">
                                    <CheckCircle size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-stone-500 font-medium">Quality Guaranteed</p>
                                    <p className="text-xl font-bold text-stone-800">100% Organic</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-spice font-semibold tracking-wider uppercase">Premium Exports</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-6 leading-tight">
                            Authentic <span className="text-coconut-dark">Coconuts</span> & <br />
                            Aromatic <span className="text-spice-red">Spices</span>
                        </h2>
                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            We bridge the gap between local farms and international markets. Our specialized logistics network ensures fresh deliveries to major hubs including **Dubai**, **London**, and **Singapore**.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Fresh Green & Dry Coconuts",
                                "Premium Cardamom, Pepper & Turmeric",
                                "Cold Chain Warehousing Solutions",
                                "Direct to Port: GCC & Europe"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-2 h-2 rounded-full bg-spice-gold" />
                                    <span className="text-lg text-stone-700 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Link to="/catalog">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-10 bg-stone-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-stone-800 transition-colors shadow-lg"
                            >
                                View Product Catalog
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Products;

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-stone-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-coconut rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-spice-red rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Move Your Cargo</h2>
                        <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                            Ready to export to Dubai or anywhere in the world? <br />
                            Get a competitive quote for your Coconut & Spice logistics today.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-stone-800 p-3 rounded-lg text-spice-gold">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Call Us</h4>
                                    <p className="text-stone-400">+1 (555) 123-4567</p>
                                    <p className="text-stone-500 text-sm">Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-stone-800 p-3 rounded-lg text-spice-gold">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Email Us</h4>
                                    <p className="text-stone-400">exports@globalexport.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-stone-800 p-3 rounded-lg text-spice-gold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Headquarters</h4>
                                    <p className="text-stone-400">
                                        123 Logistics Way, Port City<br />
                                        Warehousing: Dubai, Singapore, Rotterdam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-stone-400 font-medium">Your Name</label>
                                    <input type="text" className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spice-gold transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-stone-400 font-medium">Email Address</label>
                                    <input type="email" className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spice-gold transition-colors" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-stone-400 font-medium">Freight Type</label>
                                <select className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spice-gold transition-colors">
                                    <option>Ocean Freight</option>
                                    <option>Air Freight</option>
                                    <option>Warehousing</option>
                                    <option>Supply Chain Consultancy</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-stone-400 font-medium">Message</label>
                                <textarea rows="4" className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spice-gold transition-colors" placeholder="Tell us about your shipment..." />
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-spice to-spice-red hover:from-spice-red hover:to-spice text-white font-bold py-4 rounded-xl shadow-lg shadow-spice/20 transition-all flex items-center justify-center gap-2 group">
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="border-t border-white/10 mt-20 pt-8 text-center text-stone-500 text-sm">
                    <p>&copy; 2024 Global Export Logistics. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Package } from 'lucide-react';

const Quote = () => {
    return (
        <div className="pt-24 min-h-screen bg-sand pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Start Shipping</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Tell us about your cargo and destination. We will provide a competitive quote within 24 hours.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Contact Info Side */}
                    <div className="bg-stone-900 text-white p-10 md:w-1/3 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-spice-gold">Fast Track</h3>
                            <p className="text-stone-300 mb-8">Need immediate assistance? Call our export desk directly.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-spice-gold">
                                        <Package size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-400 uppercase">Export License</p>
                                        <p className="font-medium">IEC: AA12345678</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-spice-gold">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-400 uppercase">Headquarters</p>
                                        <p className="font-medium">Kerala, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <p className="text-sm text-stone-500">Global Export Partner &copy; 2024</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-10 md:w-2/3">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-spice outline-none focus:ring-2 focus:ring-spice/20 transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-spice outline-none focus:ring-2 focus:ring-spice/20 transition-all" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Cargo Type</label>
                                    <select className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-spice outline-none focus:ring-2 focus:ring-spice/20 transition-all">
                                        <option>Fresh Coconuts</option>
                                        <option>Spices (Bulk)</option>
                                        <option>Mixed Container</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-2">Destination Port</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-spice outline-none focus:ring-2 focus:ring-spice/20 transition-all" placeholder="e.g., Jebel Ali, Dubai" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Additional Details</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-spice outline-none focus:ring-2 focus:ring-spice/20 transition-all" placeholder="Quantity, special handling requirements, etc."></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-spice hover:bg-spice-red text-white py-4 rounded-lg font-bold shadow-lg shadow-spice/20 flex items-center justify-center gap-2 transition-colors"
                            >
                                Request Quote
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;

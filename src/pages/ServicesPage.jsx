import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import { ClipboardList, Truck, Handshake, Globe } from 'lucide-react';

const ServicesPage = () => {
    const processSteps = [
        {
            icon: <ClipboardList size={32} />,
            title: "Order & Verification",
            desc: "We verify your requirements and check stock availability immediately."
        },
        {
            icon: <Handshake size={32} />,
            title: "Quality Control",
            desc: "Our field experts inspect every batch before packaging."
        },
        {
            icon: <Truck size={32} />,
            title: "Logistics & Customs",
            desc: "We handle all documentation, fumigation, and port clearance."
        },
        {
            icon: <Globe size={32} />,
            title: "Global Delivery",
            desc: "Shipment tracking until it reaches your destination port."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-sand">
            {/* Reuse existing component for the main grid */}
            <Services />

            {/* New Content: The Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">How It Works</h2>
                        <p className="text-stone-600">A seamless journey from our farms to your warehouse.</p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-stone-200 via-spice-gold to-stone-200 -translate-y-1/2 z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-xl text-center md:bg-transparent"
                                >
                                    <div className="w-20 h-20 mx-auto bg-stone-900 text-spice-gold rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-stone-800 mb-2">{step.title}</h3>
                                    <p className="text-stone-500 text-sm">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;

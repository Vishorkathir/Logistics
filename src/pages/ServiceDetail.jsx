import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { servicesData } from '../data/services';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) {
        return (
            <div className="pt-32 text-center">
                <h2 className="text-2xl font-bold">Service not found</h2>
                <Link to="/services" className="text-spice hover:underline mt-4 inline-block">Back to Services</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-sand pb-20">
            {/* Header */}
            <div className="bg-stone-900 text-white py-20">
                <div className="container mx-auto px-6">
                    <Link to="/services" className="inline-flex items-center gap-2 text-stone-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={20} />
                        Back to Services
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="w-16 h-16 bg-spice rounded-xl flex items-center justify-center mb-6">
                            {/* We need to clone element to pass size, but icon is already an element in data. 
                                Ideally data should store component reference, but for now we render it as is or ignore resizing here */}
                            {React.cloneElement(service.icon, { size: 32, className: "text-white" })}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
                        <p className="text-xl text-stone-300 max-w-2xl">{service.shortDesc}</p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-10 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Video / Animation Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-black"
                        >
                            {/* Using a video tag with the stock footage */}
                            <video
                                src={service.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white font-medium">
                                    Live Operation View
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-bold text-stone-800 mb-6">Service Overview</h3>
                            <p className="text-stone-600 text-lg leading-relaxed mb-8">
                                {service.longDesc}
                            </p>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-stone-800">Key Benefits:</h4>
                                <ul className="space-y-3">
                                    {[1, 2, 3].map((_, i) => (
                                        <li key={i} className="flex items-center gap-3 text-stone-600">
                                            <CheckCircle size={20} className="text-spice-gold" />
                                            <span>Premium quality assurance step {i + 1}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/quote">
                                <button className="mt-10 bg-stone-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-spice transition-colors w-full md:w-auto">
                                    Get {service.title} Quote
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;

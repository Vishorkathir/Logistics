import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-stone-100 group"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-stone-800 shadow-sm">
                    {product.category}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">{product.name}</h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-coconut-dark">{product.price}</span>
                    <button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
                        View Details &rarr;
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;

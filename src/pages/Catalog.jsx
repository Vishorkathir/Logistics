import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="pt-24 min-h-screen bg-stone-50 pb-20">
            {/* Header */}
            <div className="bg-stone-900 text-white py-16 mb-12">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our Premium Collection
                    </motion.h1>
                    <p className="text-stone-400 max-w-2xl mx-auto">
                        Explore our wide range of exported goods, from fresh tropical coconuts to aromatic spices.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === cat.id
                                    ? 'bg-spice-gold text-stone-900 shadow-md transform scale-105'
                                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-stone-500">
                        No products found in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Catalog;

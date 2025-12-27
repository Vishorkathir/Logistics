import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! 👋 How can I help you with your shipping needs today?", isBot: true }
    ]);
    const [input, setInput] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { text: input, isBot: false };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Simple Keyword Logic
        setTimeout(() => {
            let botResponse = "I'm not sure about that. Please contact our support team at support@globalexport.com.";
            const lowerInput = input.toLowerCase();

            if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
                botResponse = "Hello! Ready to ship some coconuts or spices?";
            } else if (lowerInput.includes("price") || lowerInput.includes("quote") || lowerInput.includes("cost")) {
                botResponse = "You can get a competitive quote instantly by visiting our Quote page! Click 'Start Shipping' in the menu.";
            } else if (lowerInput.includes("track") || lowerInput.includes("status")) {
                botResponse = "To track a shipment, please use the 'Track Shipment' button on the home page and enter your Bill of Lading number.";
            } else if (lowerInput.includes("contact") || lowerInput.includes("phone")) {
                botResponse = "You can reach us at +91 98765 43210 or visit our Contact section.";
            }

            setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-2xl w-80 mb-4 overflow-hidden border border-stone-200"
                    >
                        {/* Header */}
                        <div className="bg-stone-900 p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-semibold">Support Assistant</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:text-spice-gold transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-80 overflow-y-auto p-4 bg-stone-50 space-y-3">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isBot
                                                ? 'bg-white border border-stone-200 text-stone-700 rounded-tl-none'
                                                : 'bg-spice text-white rounded-tr-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 bg-white border-t border-stone-200 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 px-3 py-2 bg-stone-100 rounded-lg text-sm outline-none focus:ring-1 focus:ring-spice/50"
                            />
                            <button
                                type="submit"
                                className="bg-stone-900 text-white p-2 rounded-lg hover:bg-spice transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                layout
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-spice hover:bg-spice-red text-white p-4 rounded-full shadow-lg shadow-spice/30 transition-colors"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
};

export default Chatbot;

import React from 'react';
import { Ship, Plane, Warehouse, Boxes, Truck, Package, Globe, ShieldCheck } from 'lucide-react';
import flight from '../assets/flight.jpg';

export const servicesData = [
    {
        id: 'supply-chain',
        title: "Supply Chain Solutions",
        icon: <Boxes size={40} />,
        shortDesc: "Intelligent end-to-end logistics with real-time visibility.",
        longDesc: "Transform your supply chain with our cutting-edge solutions. We integrate advanced IoT sensors, AI-powered demand forecasting, and blockchain-verified tracking to give you complete visibility from origin to destination. Our smart logistics platform reduces transit times by up to 30% while cutting operational costs. Whether you're managing seasonal inventory spikes or maintaining just-in-time delivery schedules, our adaptive supply chain network scales seamlessly with your business needs.",
        features: ["Real-time GPS tracking", "Predictive analytics", "Inventory optimization", "Demand forecasting"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    },
    {
        id: 'warehousing',
        title: "Warehousing & Distribution",
        icon: <Warehouse size={40} />,
        shortDesc: "Modern storage facilities with smart inventory management.",
        longDesc: "Our strategically located warehouses across 50+ global locations offer more than just storage—they're distribution powerhouses. Featuring automated sorting systems, climate-controlled zones (-25°C to +25°C), and 24/7 security surveillance, we protect your inventory while ensuring rapid fulfillment. Our WMS (Warehouse Management System) provides real-time stock visibility, automated reorder alerts, and seamless e-commerce integration. From pick-and-pack services to custom labeling and kitting, we handle every aspect of your distribution needs.",
        features: ["Climate-controlled storage", "Automated inventory tracking", "Cross-docking services", "Custom packaging solutions"],
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
    },
    {
        id: 'ocean-freight',
        title: "Ocean Freight",
        icon: <Ship size={40} />,
        shortDesc: "Cost-effective global shipping with guaranteed capacity.",
        longDesc: "Navigate the seas with confidence through our comprehensive ocean freight services. With partnerships spanning 200+ major shipping lines, we secure competitive rates and priority space allocation for your cargo. Our services include FCL (Full Container Load), LCL (Less than Container Load), and specialized equipment for oversized or hazardous goods. Real-time container tracking, port-to-port and door-to-door options, and dedicated customs brokerage ensure smooth sailing for your shipments across all major trade routes worldwide.",
        features: ["FCL & LCL options", "Reefer container services", "Hazmat certified handling", "Port-to-door delivery"],
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
    },
    {
        id: 'air-freight',
        title: "Air Freight",
        icon: <Plane size={40} />,
        shortDesc: "Rapid worldwide delivery for time-critical shipments.",
        longDesc: "When speed is paramount, our air freight services deliver excellence. Operating through 500+ airports globally, we offer same-day, next-day, and economy air options tailored to your urgency and budget. Specialized handling for pharmaceuticals, electronics, perishables, and high-value goods ensures your cargo arrives in perfect condition. Our express customs clearance partnerships and on-board courier services mean your shipments reach their destination within 24-72 hours, anywhere in the world.",
        features: ["Express 24-hour delivery", "Temperature-sensitive handling", "Charter flight options", "Priority customs clearance"],
        image: flight
    },
    // {
    //     id: 'ground-transport',
    //     title: "Ground Transportation",
    //     icon: <Truck size={40} />,
    //     shortDesc: "Flexible road freight solutions for regional distribution.",
    //     longDesc: "Complete your logistics chain with our extensive ground transportation network. From dedicated full truckload (FTL) services to flexible less-than-truckload (LTL) options, we cover last-mile delivery with precision. Our modern fleet includes refrigerated trucks, flatbeds, and specialized vehicles for oversized cargo. GPS-enabled tracking, driver communication apps, and route optimization technology ensure on-time deliveries while minimizing carbon footprint. Cross-border expertise and customs documentation support make international road freight seamless.",
    //     features: ["FTL & LTL services", "Last-mile delivery", "Cross-border solutions", "Fleet GPS tracking"],
    //     image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
    // },
    {
        id: 'customs-brokerage',
        title: "Customs Brokerage",
        icon: <ShieldCheck size={40} />,
        shortDesc: "Expert customs clearance and trade compliance services.",
        longDesc: "Navigate complex international trade regulations with our licensed customs brokerage team. We handle all documentation, duty calculations, and regulatory compliance so your goods clear customs without delays. Our experts stay current with ever-changing trade agreements, tariff codes, and import/export restrictions across 120+ countries. From preferential duty programs to temporary import permits, we identify cost-saving opportunities while ensuring 100% compliance. Avoid costly penalties and storage fees with our proactive approach to customs management.",
        features: ["Duty optimization", "Trade compliance consulting", "Documentation management", "Regulatory updates"],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
];

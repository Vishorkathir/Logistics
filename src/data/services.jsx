import React from 'react';
import { Ship, Plane, Warehouse, Boxes } from 'lucide-react';

export const servicesData = [
    {
        id: 'supply-chain',
        title: "Supply Chain Solutions",
        icon: <Boxes size={40} />,
        shortDesc: "End-to-end logistics management optimized for perishables.",
        longDesc: "We provide comprehensive supply chain visibility from farm to fork. Our proprietary tracking systems ensure that your perishable goods are monitored at every stage of the journey, minimizing waste and maximizing freshness.",
        video: "https://player.vimeo.com/external/371842368.sd.mp4?s=344ba878707122709679169fa3c44c540da45474&profile_id=164&oauth2_token_id=57447761" // Placeholder stock footage
    },
    {
        id: 'warehousing',
        title: "Warehousing & Distribution",
        icon: <Warehouse size={40} />,
        shortDesc: "State-of-the-art climate controlled storage facilities.",
        longDesc: "Our network of climate-controlled warehouses in key global hubs ensures your products maintain their quality while awaiting distribution. We offer bonding, labeling, and repacking services directly at the port of entry.",
        video: "https://player.vimeo.com/external/494226123.sd.mp4?s=6a9785836934c118181710976860361366914616&profile_id=164&oauth2_token_id=57447761"
    },
    {
        id: 'ocean-freight',
        title: "Ocean Freight",
        icon: <Ship size={40} />,
        shortDesc: "Reliable container shipping with temperature monitoring.",
        longDesc: "We have partnered with major shipping lines to offer competitive rates and guaranteed space for reefer containers. Our ocean freight services handle FCL (Full Container Load) and LCL (Less than Container Load) with precision.",
        video: "https://player.vimeo.com/external/517090081.sd.mp4?s=1240c749b5ae7d67069145690b2075a34241680d&profile_id=164&oauth2_token_id=57447761"
    },
    {
        id: 'air-freight',
        title: "Air Freight",
        icon: <Plane size={40} />,
        shortDesc: "Express delivery options for time-sensitive consignments.",
        longDesc: "When time is of the essence, our air freight solutions deliver. Ideal for high-value spices and urgent samples, we ensure customs clearance and delivery within 48-72 hours globally.",
        video: "https://player.vimeo.com/external/368763567.sd.mp4?s=0fc2418e272a803a675037042502690d56ee536a&profile_id=164&oauth2_token_id=57447761"
    },
];

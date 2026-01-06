
import React from 'react'
import PL from '../ProductImages/image.png'
import TC from "../ProductImages/TC.png"
import RiceB from "../ProductImages/RiceB.jpg"
import RiceNB from "../ProductImages/RiceNB.jpg"
import RedChilli from "../ProductImages/Chilli.png"
import MasalaBlends from "../ProductImages/MasalaBlends.jpg"
import Turmeric from "../ProductImages/Turmeric.png"
import Cumin from "../ProductImages/Cumin.png"
// import DragonFruit from "../ProductImages/DragonFruit.jpg"
import Banana from "../ProductImages/Banana.png"
import Pomegranate from "../ProductImages/Pomegranate.png"
import Onion from "../ProductImages/Onion.png"
import Potato from "../ProductImages/Potato.webp"
import Drumstick from "../ProductImages/Drumstick.png"


export const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Rice', name: 'Rice' },
    { id: 'spices', name: 'Spices' },
    { id: 'freshvegetables', name: 'Freshvegetables' },
    { id: 'fruits', name: 'Fruits' },
];

export const products = [

    {
        id: 1,
        name: 'Pulses and Lentils',
        category: '',
        image: PL,
    },

    {
        id: 1,
        name: 'Basmati Rice',
        category: 'Rice',
        image: 'https://images.unsplash.com/photo-1541525032626-44477c7f7f32?q=80&w=600&auto=format&fit=crop', // Real Unsplash image

        description: 'Sweet water and tender meat, freshly harvested from organic farms.',
        price: '$12 / box'
    },
    {
        id: 2,

        name: 'Tea & Coffee',
        category: '',
        image: TC,
        description: 'Sweet water and tender meat, freshly harvested from organic farms.',
        price: '$12 / box'
    },



    //Rice
    {
        id: 3,
        name: 'Basmati Rice',
        category: 'Rice',
        image: RiceB,
        description: 'Sweet water and tender meat, freshly harvested from organic farms.',
        price: '$12 / box'
    },
    {
        id: 4,
        name: 'Non-Basmati Rice',
        category: 'Rice',
        image: RiceNB,
        description: 'High oil content premium copra ideal for oil extraction and culinary use.',
        price: '$18 / kg'
    },

    // Spicess
    {
        id: 5,
        name: 'Chilli',
        category: 'spices',
        image: RedChilli,

        name: 'Non-Basmati Rice',
        category: 'Rice',
        image: 'https://images.unsplash.com/photo-1621685450410-d02325988d40?q=80&w=600&auto=format&fit=crop',
        description: 'High oil content premium copra ideal for oil extraction and culinary use.',
        price: '$18 / kg'
    },
    {
        id: 3,
        name: 'Chilli',
        category: 'spices',
        image: 'https://images.unsplash.com/photo-1587049016149-655767b0d77f?q=80&w=600&auto=format&fit=crop',

        description: 'Hand-picked green cardamom pods with intense aroma.',
        price: '$45 / kg'
    },
    {

        id: 6,
        name: 'Masala Blends ',
        category: 'spices',
        image: MasalaBlends,

        id: 4,
        name: 'Masala Blends ',
        category: 'spices',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop',

        description: 'Bold black peppercorns from the Malabar coast.',
        price: '$15 / kg'
    },
    {

        id: 7,
        name: 'Turmeric ',
        category: 'spices',
        image: Turmeric,

        id: 5,
        name: 'Turmeric ',
        category: 'spices',
        image: 'https://images.unsplash.com/photo-1627932620718-f2b3e86c07e0?q=80&w=600&auto=format&fit=crop',

        description: 'High curcumin content turmeric roots, cleaned and polished.',
        price: '$8 / kg'
    },
    {

        id: 8,
        name: 'Cumin',
        category: 'spices',
        image: Cumin,
        description: 'True Ceylon cinnamon quills with delicate flavor.',
        price: '$25 / kg'
    },

    //Friuts

    // {
    //     id: 9,
    //     name: 'Exotic Dragon Fruit',
    //     category: 'fruits',
    //     image: {DragonFruit},
    //     description: 'Vibrant pink skin with sweet, speckled flesh.',
    //     price: '$5 / pc'
    // },
    {
        id: 10,
        name: 'Banana',
        category: 'fruits',
        image: Banana,
        description: 'Vibrant pink skin with sweet, speckled flesh.',
        price: '$5 / pc'
    },

    {
        id: 11,
        name: 'Pomegranate',
        category: 'fruits',
        image: Pomegranate,
        description: 'Vibrant pink skin with sweet, speckled flesh.',
        price: '$5 / pc'
    },


    // fresh Vegetables

    {
        id: 12,
        name: 'Onion',
        category: 'freshvegetables',
        image: Onion,
        description: 'Crisp and flavorful onions, perfect for all your culinary needs.',
        price: '$2 / kg'
    },{
        id: 6,
        name: 'Exotic Dragon Fruit',
        category: 'fruits',
        image: 'https://images.unsplash.com/photo-1527663472097-d86b978dd632?q=80&w=600&auto=format&fit=crop',
        description: 'Vibrant pink skin with sweet, speckled flesh.',
        price: '$5 / pc'
    },
    {
        id: 7,
        name: 'Banana',
        category: 'fruits',
        image: 'https://images.unsplash.com/photo-1527663472097-d86b978dd632?q=80&w=600&auto=format&fit=crop',
        description: 'Vibrant pink skin with sweet, speckled flesh.',
        price: '$5 / pc'
    },
    {
        id: 8,
        name: 'Mango',
        category: 'fruits',
        image: 'https://images.unsplash.com/photo-1527663472097-d86b978dd632?q=80&w=600&auto=format&fit=crop',
        description: 'Vibrant pink skin with sweet, speckled flesh.',
        price: '$5 / pc'
    },
    {
        id: 8,
        name: 'Pomegranate',
        category: 'fruits',
        image: 'https://images.unsplash.com/photo-1527663472097-d86b978dd632?q=80&w=600&auto=format&fit=crop',
        description: 'Vibrant pink skin with sweet, speckled flesh.',
        price: '$5 / pc'
    },
    // {
    //     id: 7,
    //     name: 'Desiccated Coconut',
    //     category: 'Rice',
    //     image: 'https://plus.unsplash.com/premium_photo-1675237626359-99433367b6ce?q=80&w=600&auto=format&fit=crop',
    //     description: 'Finely shredded and dried coconut meat, perfect for baking.',
    //     price: '$10 / kg'
    // },
    {
        id: 9,
        name: 'Cumin',
        category: 'spices',
        image: 'https://images.unsplash.com/photo-1556912167-f556f7f57614?q=80&w=600&auto=format&fit=crop',
        description: 'True Ceylon cinnamon quills with delicate flavor.',
        price: '$25 / kg'
    },
    {
        id: 10,
        name: 'Onion',
        category: 'freshvegetables',
        image: 'https://images.unsplash.com/photo-1556912167-f556f7f57614?q=80&w=600&auto=format&fit=crop',

        description: 'True Ceylon cinnamon quills with delicate flavor.',
        price: '$25 / kg'
    },
    {

        id: 13,
        name: 'potato',
        category: 'freshvegetables',
        image: Potato,

        id: 11,
        name: 'potato',
        category: 'freshvegetables',
        image: 'https://images.unsplash.com/photo-1556912167-f556f7f57614?q=80&w=600&auto=format&fit=crop',

        description: 'True Ceylon cinnamon quills with delicate flavor.',
        price: '$25 / kg'
    },
    {

        id: 14,
        name: 'drumstick',
        category: 'freshvegetables',
        image: Drumstick,
        description: 'True Ceylon cinnamon quills with delicate flavor.',
        price: '$25 / kg'
    },

    {
        id: 12,
        name: 'drumstick',
        category: 'freshvegetables',
        image: 'https://images.unsplash.com/photo-1556912167-f556f7f57614?q=80&w=600&auto=format&fit=crop',
        description: 'True Ceylon cinnamon quills with delicate flavor.',
        price: '$25 / kg'
    }   

];

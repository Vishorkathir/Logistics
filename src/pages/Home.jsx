import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import GlobalReach from '../components/GlobalReach';
import Products from '../components/Products';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <GlobalReach />
            <Products />
            <Contact />
        </>
    );
};

export default Home;

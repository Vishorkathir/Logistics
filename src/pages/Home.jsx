import React from 'react';
import Hero from '../components/Hero';
// import Stats from '../components/Stats';
import Services from '../components/Services';
import GlobalReach from '../components/GlobalReach';
import Products from '../components/Products';
import ShippingCalculator from '../components/ShippingCalculator';
import Testimonials from '../components/Testimonials';
// import Partners from '../components/Partners';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            {/* <Stats /> */}
            <GlobalReach />
            <Services />
            <Products />
            <ShippingCalculator />
            <Testimonials />
            {/* <Partners /> */}
            <FAQ />
            <Contact />
        </>
    );
};

export default Home;

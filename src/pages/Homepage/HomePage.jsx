import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default HomePage;
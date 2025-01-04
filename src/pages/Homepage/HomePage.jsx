import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Education from './Education/Education';

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <About></About>
            <Skills></Skills>
            <Education></Education>
        </div>
    );
};

export default HomePage;
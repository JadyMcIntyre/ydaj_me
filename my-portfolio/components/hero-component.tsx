import React from 'react';

const Hero = ({ isDarkMode }) => { // Accept isDarkMode as a prop
  return (
    <section className={`hero-section flex flex-col justify-between h-screen px-8 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <div className="container mx-auto text-left mt-16">
        <h1 className={`text-8xl font-bold leading-none ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Websites <br />that Inspire
        </h1>
        <p className={`text-2xl mt-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          specialized in Web Design, UX / UI, Webflow, and Front End Development.
        </p>
      </div>
    </section>
  );
};

export default Hero;

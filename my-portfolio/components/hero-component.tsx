import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section flex flex-col justify-between h-screen px-8">

      {/* Hero Section */}
      <div className="container mx-auto text-left mt-16">
        <h1 className="text-8xl font-bold leading-none text-white">
          Web <br /> Design
        </h1>
        <p className="text-2xl mt-4 text-white">
          specialized in Web Design, UX / UI, Webflow, and Front End Development.
        </p>
      </div>
    </section>
  );
};

export default Hero;

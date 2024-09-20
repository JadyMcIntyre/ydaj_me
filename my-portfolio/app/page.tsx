"use client";

import Image from "next/image";
import Hero from '../components/hero-component'; // Import the Hero component
import Link from 'next/link'; // Import Link for navigation
import { useState } from 'react'; // Import useState for managing state

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark mode state
  };

  return (
    <div className={`relative min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      {/* Navigation Bar */}
      <nav className={`absolute top-8 left-8 right-8 flex items-center justify-between ${isDarkMode ? 'text-white' : 'text-black'}`}>
        {/* Name on the left */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:underline">Jady McIntyre</Link> {/* Make name clickable to index page */}
        </div>

        {/* Navigation Links in the center */}
        <div className={`flex space-x-6 text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
          <Link href="/about-page" className="hover:underline">About</Link> {/* Corrected link */}
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#process" className="hover:underline">Process</a>
          <Link href="/contact-page" className="hover:underline">Contact</Link> {/* Updated link */}
        </div>

        {/* Dark mode toggle on the right */}
        <div className="text-lg">
          <button className="focus:outline-none" onClick={toggleDarkMode}>
            {isDarkMode ? '🌞 Light' : '🌙 Dark'} {/* Change icon and text */}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero isDarkMode={isDarkMode} /> {/* Pass the dark mode state */}

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content remains unchanged */}
      </footer>
    </div>
  );
}

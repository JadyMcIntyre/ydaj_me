import Image from "next/image";
import Hero from '../components/hero-component'; // Import the Hero component
import Link from 'next/link'; // Import Link for navigation

export default function Home() {
  return (
    <div className="relative min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* Navigation Bar */}
      <nav className="absolute top-8 left-8 right-8 flex items-center justify-between text-white">
        {/* Name on the left */}
        <div className="text-white text-2xl font-bold">Jady McIntyre</div>

        {/* Navigation Links in the center */}
        <div className="flex space-x-6 text-white text-lg">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#process" className="hover:underline">Process</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Dark mode toggle on the right */}
        <div className="text-white text-lg">
          <button className="focus:outline-none">🌙 Dark</button>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content remains unchanged */}
      </footer>
    </div>
  );
}

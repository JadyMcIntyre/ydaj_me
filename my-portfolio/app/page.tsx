"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Moon, Sun, Globe, Code, Search } from 'lucide-react'

export default function Component() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <header className="p-5 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Your Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="#work" className="hover:text-gray-300">Work</Link></li>
            <li><Link href="#process" className="hover:text-gray-300">Process</Link></li>
            <li><Link href="#contact" className="hover:text-gray-300">Drop me a line</Link></li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          <span className="sr-only">Toggle dark mode</span>
        </button>
      </header>
      <main>
        <section className="flex flex-col justify-center items-start h-screen p-10">
          <h2 className="text-7xl font-bold leading-tight mb-4">
            Digital<br />Designer
          </h2>
          <p className="text-xl text-gray-400 max-w-md">
            specialized in Web Design, UX / UI, Webflow, and Front End Development.
          </p>
        </section>

        <section className="py-20 px-10">
          <h3 className="text-4xl font-bold mb-12 text-center">Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Web Design', icon: Globe, description: 'Creating beautiful, user-friendly websites that capture your brands essence.' },
              { title: 'Development', icon: Code, description: 'Building robust, scalable web applications with cutting-edge technologies.' },
              { title: 'SEO', icon: Search, description: 'Optimizing your online presence to increase visibility and drive organic traffic.' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <service.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
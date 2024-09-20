"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Component() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <header className="p-5 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Jady McIntyre</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="#work" className="hover:text-gray-300">Work</Link></li>
            <li><Link href="#process" className="hover:text-gray-300">Process</Link></li>
            <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          <span className="sr-only">Toggle dark mode</span>
        </button>
      </header>
      <main className="flex flex-col justify-center items-start h-[calc(100vh-80px)] p-10">
        <h2 className="text-9xl font-bold leading-tight mb-4">
          Digital<br />Designer
        </h2>
        <p className="text-xl text-gray-400 max-w-md">
          specialized in Web Design, UX / UI, Webflow, and Front End Development.
        </p>
      </main>
    </div>
  )
}
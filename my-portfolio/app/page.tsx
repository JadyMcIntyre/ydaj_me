"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Moon, Sun, Globe, Code, Search, PhoneCall, Palette, Laptop, Send, ArrowRight } from 'lucide-react'

export default function Component() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const processSteps = [
    {
      title: 'Intro Call',
      shortDescription: 'Discuss what you envision',
      longDescription: 'This is where we get to know each other! We\'ll explore your vision, define your goals, and ensure we\'re aligned on creating something impactful.',
      icon: PhoneCall
    },
    {
      title: 'Web Design',
      shortDescription: 'Crafting your vision',
      longDescription: 'Here\'s where your ideas begin to take shape. I\'ll design a stunning and intuitive layout that reflects your brand and engages your audience.',
      icon: Palette
    },
    {
      title: 'Web Development',
      shortDescription: 'Bringing design to life',
      longDescription: 'I\'ll transform the design into a fully functional website, ensuring smooth performance, responsiveness, and seamless user experience.',
      icon: Laptop
    },
    {
      title: 'Hand Over',
      shortDescription: 'Empowering you to take charge',
      longDescription: 'After rigorous testing, I\'ll deliver the final product and provide all the resources you need to maintain and manage your website with ease.',
      icon: Send
    },
  ]

  const projects = [
    {
      title: "Project Alpha",
      description: "A visual showcase of innovation and creativity, blending clean design with robust functionality.",
      image: "/placeholder.png?height=400&width=600"
    },
    {
      title: "Project Beta",
      description: "This project captures a seamless user experience and demonstrates cutting-edge development skills.",
      image: "/placeholder.png?height=400&width=600"
    },
    {
      title: "Project Gamma",
      description: "Designed for engagement, this project delivers both aesthetic appeal and technical performance.",
      image: "/placeholder.png?height=400&width=600"
    }
  ]

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
              { title: 'Web Design', icon: Globe, description: 'Creating beautiful, user-friendly websites that capture your brand\'s essence.' },
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

        <section id="process" className="py-20 px-10">
          <h3 className="text-4xl font-bold mb-12 text-center">Process</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-700"></div>
            {processSteps.map((step, index) => (
              <div key={index} className={`flex items-center mb-20 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg inline-block max-w-md">
                    <step.icon className="w-12 h-12 mb-4 text-blue-400 mx-auto" />
                    <h4 className="text-2xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-lg text-blue-400 mb-4">{step.shortDescription}</p>
                    <p className="text-gray-400">{step.longDescription}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-400 rounded-full absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-black font-bold text-xl">{index + 1}</span>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="py-20 px-10">
          <h3 className="text-4xl font-bold mb-12 text-center">My Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/work" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
              See More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
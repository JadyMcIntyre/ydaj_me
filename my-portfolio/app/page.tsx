"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Moon, Sun, Globe, Code, Search, PhoneCall, Palette, Laptop, Send, ArrowRight, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react'

export default function Component() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const processSteps = [
    {
      title: "Intro Call",
      shortDescription: "Discuss what you envision",
      longDescription: "This is where we get to know each other! We'll explore your vision, define your goals, and ensure we're aligned on creating something impactful.",
      icon: PhoneCall
    },
    {
      title: "Web Design",
      shortDescription: "Crafting your vision",
      longDescription: "Here's where your ideas begin to take shape. I'll design a stunning and intuitive layout that reflects your brand and engages your audience.",
      icon: Palette
    },
    {
      title: "Web Development",
      shortDescription: "Bringing design to life",
      longDescription: "I'll transform the design into a fully functional website, ensuring smooth performance, responsiveness, and seamless user experience.",
      icon: Laptop
    },
    {
      title: "Hand Over",
      shortDescription: "Empowering you to take charge",
      longDescription: "After rigorous testing, I'll deliver the final product and provide all the resources you need to maintain and manage your website with ease.",
      icon: Send
    },
  ]

  const projects = [
    {
      title: "Project Alpha",
      description: "A visual showcase of innovation and creativity, blending clean design with robust functionality.",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Project Beta",
      description: "This project captures a seamless user experience and demonstrates cutting-edge development skills.",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      title: "Project Gamma",
      description: "Designed for engagement, this project delivers both aesthetic appeal and technical performance.",
      image: "/placeholder.svg?height=400&width=600"
    }
  ]

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <header className="p-5 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Jady McIntyre</h1>
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

        <section id="about" className="py-20 px-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Professional headshot"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-4xl font-bold mb-6">About Me</h3>
              <p className="text-xl leading-relaxed text-gray-300">
                Hi, I'm Jady McIntyre. With a passion for web development and design, I focus on delivering tailored, functional, and aesthetically striking websites. With experience in creating digital solutions that help businesses grow, I'm committed to providing value-driven results and building meaningful connections with my clients.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-10">
          <h3 className="text-4xl font-bold mb-12 text-center">Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Web Design", icon: Globe, description: "Creating beautiful, user-friendly websites that capture your brand's essence." },
              { title: "Development", icon: Code, description: "Building robust, scalable web applications with cutting-edge technologies." },
              { title: "SEO", icon: Search, description: "Optimizing your online presence to increase visibility and drive organic traffic." }
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

        <section id="contact" className="py-20 px-10">
          <h3 className="text-4xl font-bold mb-12 text-center">Contact Me</h3>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h4 className="text-2xl font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-blue-400" />
                  <a href="mailto:jadymcintyre@outlook.com" className="hover:text-blue-400">jadymcintyre@outlook.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-blue-400" />
                  <a href="tel:+27796934212" className="hover:text-blue-400">+27 79 693 4212</a>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="https://www.linkedin.com/in/jady-douglas-mcintyre-1657b0231/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://github.com/JadyMcIntyre" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    <Github className="w-6 h-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <input type="text" id="name" className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-400" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input type="email" id="email" className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-400" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea id="message" rows={4} className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-400" required></textarea>
                </div>
                <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Jady McIntyre. All rights reserved.</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="#about" className="hover:text-blue-400">About</Link></li>
              <li><Link href="#work" className="hover:text-blue-400">Work</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/jady-douglas-mcintyre-1657b0231/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/JadyMcIntyre" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
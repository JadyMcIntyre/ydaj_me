"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
// import {Moon, Sun,} from 'lucide-react'
import {  Globe, Code, Search, PhoneCall, Palette, Laptop, Send, ArrowRight, Mail, Phone, Linkedin, Github, Menu, X } from 'lucide-react'

export default function Component() {
  // const [darkMode, setDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode)
  // }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
      title: "Learn Craft",
      description: "LearnCraft Academy, an online learning platform providing a variety of courses. The site features a clean, responsive design with an engaging user experience, guiding users from course exploration to enrollment seamlessly.",
      image: "/images/learn-craft.png"
    },
    {
      title: "Aurora Photography",
      description: "This project showcases a sleek, modern landing page for Aurora Photography, a professional photography business. The site highlights their portfolio, case studies, testimonials, and an integrated booking form, providing visitors with a seamless browsing experience.",
      image: "/images/aurora-photography.png"
    },
    {
      title: "Pinnacle Strategy",
      description: "This project showcases a clean, professional business consulting site for Pinnacle Strategy Group. The site highlights their strategic planning services, client testimonials, and a call-to-action for consultations, providing visitors with an engaging and informative browsing experience.",
      image: "/images/pinnacle-strategy.png"
    }
  ]

  return (
    // <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className={`min-h-screen 'bg-white text-black'}`}>
      <header className="p-5 flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          <Link href="/" className="hover:text-gray-300">Jady McIntyre</Link>
        </h1>
        {isMobile ? (
          <button onClick={toggleMenu} className="z-50">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        ) : (
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#about" className="hover:text-gray-300">About</Link></li>
              <li><Link href="/previous-work" className="hover:text-gray-300">Work</Link></li>
              <li><Link href="#process" className="hover:text-gray-300">Process</Link></li>
              <li><Link href="#contact" className="hover:text-gray-300">Contact me</Link></li>
            </ul>
          </nav>
        )}
        {/* <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          <span className="sr-only">Toggle dark mode</span>
        </button> */}
      </header>
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center">
          <nav>
            <ul className="flex flex-col space-y-4 text-center">
              <li><Link href="#about" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>About</Link></li>
              <li><Link href="/previous-work" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>Work</Link></li>
              <li><Link href="#process" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>Process</Link></li>
              <li><Link href="#contact" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>Contact me</Link></li>
            </ul>
          </nav>
        </div>
      )}
      <main>
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-start md:items-start h-screen p-10 md:p-20">
          <h2 className="text-6xl md:text-9xl font-bold leading-tight mb-4 text-center md:text-left w-full">
            Digital<br />Designer
          </h2>
          <p className="text-xl text-gray-400 max-w-md text-center md:text-left w-full">
            specialized in Web Design, UX / UI, Webflow, and Front End Development.
          </p>
        </section>

        {/* Services Section */}
        <section className="py-20 px-10">
          <h3 className="text-4xl font-bold mb-12 text-center">Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Web Design", icon: Globe, description: "Creating beautiful, user-friendly websites that capture your brand's essence." },
              { title: "Development", icon: Code, description: "Building robust, scalable web applications with cutting-edge technologies." },
              { title: "SEO", icon: Search, description: "Optimizing your online presence to increase visibility and drive organic traffic." }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <service.icon className="w-12 h-12 mb-4 text-blue-400 mx-auto" />
                <h4 className="text-xl font-semibold mb-2 text-center">{service.title}</h4>
                <p className="text-gray-400 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 px-10">
          <h3 className="text-4xl font-bold mb-12 text-center">Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <step.icon className="w-12 h-12 mb-4 text-blue-400 mx-auto" />
                <h4 className="text-2xl font-semibold mb-2 text-center">{step.title}</h4>
                <p className="text-lg text-blue-400 mb-4 text-center">{step.shortDescription}</p>
                <p className="text-gray-400 text-center">{step.longDescription}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 px-10">
          <h3 className="text-4xl font-bold mb-12 text-center">My Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <Link href={project.title === "Learn Craft" ? "/learn-craft" : project.title === "Aurora Photography" ? "/aurora-photography" : project.title === "Pinnacle Strategy" ? "/pinnacle-strategy" : "#"}>
                  <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" />
                </Link>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-center">{project.title}</h4>
                  <p className="text-gray-400 text-center">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/previous-work" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
              See More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/jady.jpg"
                alt="Jady McIntyre"
                width={1024}
                height={949}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-4xl font-bold mb-6 text-center md:text-left">About Me</h3>
              <p className="text-xl leading-relaxed text-gray-300 text-center md:text-left">
                Hi, I'm Jady McIntyre. With a passion for web development and design, I focus on delivering tailored, functional, and aesthetically striking websites. With experience in creating digital solutions that help businesses grow, I'm committed to providing value-driven results and building meaningful connections with my clients.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-10">
          <h3 className="text-4xl font-bold mb-12 text-center">Contact Me</h3>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h4 className="text-2xl font-semibold mb-4 text-center md:text-left">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-6 h-6 mr-2 text-blue-400" />
                  <a href="mailto:jadymcintyre@outlook.com" className="hover:text-blue-400">jadymcintyre@outlook.com</a>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-6 h-6 mr-2 text-blue-400" />
                  <a href="tel:+27796934212" className="hover:text-blue-400">+27 79 693 4212</a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-4">
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
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Jady McIntyre. All rights reserved.</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="#about" className="hover:text-blue-400">About</Link></li>
              <li><Link href="/previous-work" className="hover:text-blue-400">Work</Link></li>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
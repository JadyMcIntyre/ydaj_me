"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function PreviousWork() {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
    <div className="min-h-screen bg-black text-white">
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
              <li><Link href="/#about" className="hover:text-gray-300">About</Link></li>
              <li><Link href="/#work" className="hover:text-gray-300">Work</Link></li>
              <li><Link href="/#process" className="hover:text-gray-300">Process</Link></li>
              <li><Link href="/#contact" className="hover:text-gray-300">Contact me</Link></li>
            </ul>
          </nav>
        )}
      </header>
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center">
          <nav>
            <ul className="flex flex-col space-y-4 text-center">
              <li><Link href="/#about" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>About</Link></li>
              <li><Link href="/#work" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>Work</Link></li>
              <li><Link href="/#process" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>Process</Link></li>
              <li><Link href="/#contact" className="text-2xl hover:text-gray-300" onClick={toggleMenu}>Contact me</Link></li>
            </ul>
          </nav>
        </div>
      )}
      <main>
        <section className="py-20 px-10">
          <h2 className="text-4xl font-bold mb-6 text-center">Previous Work</h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Please note that not all clients that I've worked with are comfortable with placing their site here. For demonstration purposes, these are some very basic websites for you to look through. Please note that since this is a demo site, functionality will be limited.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <Link href={project.title === "Learn Craft" ? "/learn-craft" : project.title === "Aurora Photography" ? "/aurora-photography" : project.title === "Pinnacle Strategy" ? "/pinnacle-strategy" : "#"}>
                  <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                  <p className="text-gray-400 text-center">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center mt-12 text-xl italic">...more to come soon</p>
        </section>
      </main>
    </div>
  )
}

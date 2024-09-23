import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronRight, Camera, BookOpen, MessageSquare, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="#hero" className="text-2xl font-bold">
            Aurora Photography
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#portfolio" className="hover:text-primary-400 transition-colors">
              Portfolio
            </Link>
            <Link href="#case-studies" className="hover:text-primary-400 transition-colors">
              Case Studies
            </Link>
            <Link href="#testimonials" className="hover:text-primary-400 transition-colors">
              Testimonials
            </Link>
            <Link href="#book-now" className="hover:text-primary-400 transition-colors">
              Book Now
            </Link>
          </div>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/images/aurora/aurora-hero.jpg?height=1080&width=1920"
          alt="Aurora Photography Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Capturing Moments, Creating Art
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in animation-delay-300">
            Welcome to Aurora Photography, where every frame tells a story.
          </p>
          <Button size="lg" className="animate-fade-in animation-delay-600">
            Explore Our Work
          </Button>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src={`/images/aurora/portfolio-${item}.jpg?height=600&width=600&text=Portfolio+${item}`}
                  alt={`Portfolio ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-2xl font-bold">View Gallery</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/portfolio">
                View Full Portfolio
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section id="case-studies" className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/aurora/case-study.jpg?height=800&width=1200&text=Case+Study+Image"
                alt="Case Study: City Lights"
                width={1200}
                height={800}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">City Lights Project</h3>
              <p className="mb-6">
                Our client, a luxury real estate developer, needed captivating nighttime cityscapes to showcase their
                new high-rise apartments. We used long-exposure techniques to capture the energy and beauty of the city at night.
              </p>
              <Button asChild>
                <Link href="/case-studies">
                  Read Full Case Study
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section id="testimonials" className="py-20 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Marketing Director", company: "TechCorp" },
              { name: "Michael Chen", role: "Event Planner", company: "Gala Events" },
              { name: "Emily Rodriguez", role: "Art Director", company: "Creative Solutions" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={`/images/aurora/testimonial-${index + 1}.png?height=64&width=64&text=${testimonial.name.charAt(0)}`}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="italic">
                  "Aurora Photography captured our vision perfectly. The images were stunning and really elevated our brand."
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/testimonials">
                View All Testimonials
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Form Preview */}
      <section id="book-now" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Book a Session</h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Name
                </label>
                <Input type="text" id="name" name="name" required className="bg-gray-800 border-gray-700" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email
                </label>
                <Input type="email" id="email" name="email" required className="bg-gray-800 border-gray-700" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-semibold">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                required
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <Button type="submit" className="w-full">
              Request Booking
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Aurora Photography</h3>
              <p>Capturing moments, creating memories.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#portfolio" className="hover:text-primary-400 transition-colors">Portfolio</Link></li>
                <li><Link href="#case-studies" className="hover:text-primary-400 transition-colors">Case Studies</Link></li>
                <li><Link href="#testimonials" className="hover:text-primary-400 transition-colors">Testimonials</Link></li>
                <li><Link href="#book-now" className="hover:text-primary-400 transition-colors">Book Now</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>123 Photography Lane</p>
              <p>Shuttersville, CA 90210</p>
              <p>contact@auroraphotography.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2023 Aurora Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
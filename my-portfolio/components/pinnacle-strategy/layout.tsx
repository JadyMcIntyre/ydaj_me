import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Pinnacle Strategy Group
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-primary hover:text-primary/80">Home</Link>
            <Link href="/services" className="text-primary hover:text-primary/80">Services</Link>
            <Link href="/blog" className="text-primary hover:text-primary/80">Blog</Link>
            <Link href="/contact" className="text-primary hover:text-primary/80">Contact</Link>
          </nav>
          <Button className="hidden md:inline-flex">Get Started</Button>
          <Button variant="ghost" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Pinnacle Strategy Group</h3>
              <p className="text-gray-600">Empowering businesses with innovative solutions and strategic insights.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-primary">Our Services</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-primary">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600">123 Business Ave, Suite 100<br />Metropolis, CA 90001<br />contact@pinnaclesg.com<br />(555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            © 2024 Pinnacle Strategy Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
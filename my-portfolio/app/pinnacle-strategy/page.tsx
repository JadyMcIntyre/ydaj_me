import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Elevate Your Business with Strategic Insights</h1>
            <p className="text-xl mb-8">Pinnacle Strategy Group helps businesses navigate complex challenges and achieve sustainable growth.</p>
            <Button size="lg" asChild>
              <Link href="/pinnacle-strategy-contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Strategic Planning', 'Market Analysis', 'Operational Efficiency'].map((service) => (
              <Card key={service}>
                <CardHeader>
                  <CardTitle>{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Leverage our expertise in {service.toLowerCase()} to drive your business forward.</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/pinnacle-strategy-services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'John Doe', title: 'CEO, Tech Innovators', quote: 'Pinnacle Strategy Group transformed our business with their insightful strategies.' },
              { name: 'Jane Smith', title: 'CFO, Global Enterprises', quote: 'Their market analysis was crucial in our successful expansion to new markets.' }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="italic mb-4 text-gray-700">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Your Business to New Heights?</h2>
          <p className="text-xl mb-8">Let's collaborate to create tailored strategies that drive growth and success.</p>
          <Button size="lg" asChild>
            <Link href="/pinnacle-strategy-contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
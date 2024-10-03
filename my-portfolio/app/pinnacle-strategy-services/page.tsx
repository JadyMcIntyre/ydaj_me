import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Strategic Planning",
      description: "Develop comprehensive strategies to achieve your long-term business goals and overcome challenges.",
    },
    {
      title: "Market Analysis",
      description: "Gain deep insights into your market landscape, competitors, and opportunities for growth.",
    },
    {
      title: "Operational Efficiency",
      description: "Streamline your processes and improve productivity to maximize your resources and profitability.",
    },
    {
      title: "Financial Advisory",
      description: "Optimize your financial performance with expert guidance on budgeting, forecasting, and investment strategies.",
    },
    {
      title: "Digital Transformation",
      description: "Leverage cutting-edge technologies to modernize your operations and stay ahead in the digital age.",
    },
    {
      title: "Change Management",
      description: "Navigate organizational changes smoothly with our proven methodologies and expert support.",
    },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Blog() {
  const blogPosts = [
    {
      title: "5 Key Strategies for Business Growth in 2024",
      description: "Discover the top strategies that successful businesses are implementing to drive growth in the current market landscape.",
      date: "March 15, 2024",
      slug: "5-key-strategies-business-growth-2024",
    },
    {
      title: "The Impact of AI on Strategic Decision Making",
      description: "Explore how artificial intelligence is revolutionizing the way businesses make critical strategic decisions.",
      date: "March 10, 2024",
      slug: "impact-ai-strategic-decision-making",
    },
    {
      title: "Navigating Economic Uncertainty: A Guide for CEOs",
      description: "Learn how to lead your organization through turbulent economic times with confidence and strategic foresight.",
      date: "March 5, 2024",
      slug: "navigating-economic-uncertainty-guide-ceos",
    },
    {
      title: "Sustainable Business Practices: The New Competitive Advantage",
      description: "Understand why sustainability is becoming a crucial factor in business success and how to implement eco-friendly strategies.",
      date: "February 28, 2024",
      slug: "sustainable-business-practices-competitive-advantage",
    },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Industry Insights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline mt-4 inline-block">
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
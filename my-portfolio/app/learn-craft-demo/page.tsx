import Link from "next/link"
import { BookOpen, CheckCircle, ChevronRight, GraduationCap, Menu, Search } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function LearnCraftAcademy() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-800 shadow-md">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <span className="ml-2 text-2xl font-bold text-purple-600 dark:text-purple-400">LearnCraft</span>
        </Link>
        <NavigationMenu className="hidden lg:flex ml-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 dark:text-gray-200">Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500 to-purple-600 p-6 no-underline outline-none focus:shadow-md"
                        href="#"
                      >
                        <BookOpen className="h-6 w-6 text-white" />
                        <div className="mb-2 mt-4 text-lg font-medium text-white">All Courses</div>
                        <p className="text-sm leading-tight text-purple-100">
                          Explore our wide range of courses designed to help you succeed.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100 hover:text-purple-600 focus:bg-purple-100 focus:text-purple-600"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Web Development</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Learn to build modern web applications
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100 hover:text-purple-600 focus:bg-purple-100 focus:text-purple-600"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Data Science</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Master the art of data analysis and machine learning
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100 hover:text-purple-600 focus:bg-purple-100 focus:text-purple-600"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Digital Marketing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Learn to create effective digital marketing strategies
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 dark:text-gray-200" href="#">
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-gray-700 dark:text-gray-200" href="#">
                Quizzes
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <form className="hidden lg:flex">
            <Input
              className="w-full sm:w-[300px] md:w-[200px] lg:w-[300px]"
              placeholder="Search courses..."
              type="search"
            />
          </form>
          <Button className="hidden lg:flex" variant="outline">
            Log in
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Sign up</Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden ml-4" size="icon" variant="outline">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6">
              <Link className="flex items-center space-x-2" href="#">
                <GraduationCap className="h-6 w-6" />
                <span className="font-bold">LearnCraft Academy</span>
              </Link>
              <div className="grid gap-4">
                <h4 className="font-medium text-sm">Menu</h4>
                <nav className="grid gap-2">
                  <Link className="flex items-center py-2" href="#">
                    Courses
                    <ChevronRight className="ml-auto h-4 w-4" />
                  </Link>
                  <Link className="flex items-center py-2" href="#">
                    Blog
                  </Link>
                  <Link className="flex items-center py-2" href="#">
                    Quizzes
                  </Link>
                </nav>
              </div>
              <div className="grid gap-4">
                <h4 className="font-medium text-sm">Account</h4>
                <nav className="grid gap-2">
                  <Link className="flex items-center py-2" href="#">
                    Log in
                  </Link>
                  <Link className="flex items-center py-2" href="#">
                    Sign up
                  </Link>
                </nav>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-purple-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to LearnCraft Academy
                </h1>
                <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl">
                  Unlock your potential with our expert-led courses. Start your learning journey today.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-purple-600 hover:bg-purple-100">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-purple-700">Explore Courses</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-purple-600 dark:text-purple-400">
              Featured Courses
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full bg-purple-50 dark:bg-gray-700 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="text-purple-600 dark:text-purple-400">Web Development Fundamentals</CardTitle>
                  <CardDescription>Learn the basics of HTML, CSS, and JavaScript</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>Master the core technologies that power the web and start building your own websites.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Enroll Now</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col h-full bg-purple-50 dark:bg-gray-700 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="text-purple-600 dark:text-purple-400">Data Science Essentials</CardTitle>
                  <CardDescription>Dive into the world of data analysis and machine learning</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>Learn to extract insights from data and build predictive models using Python.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Enroll Now</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col h-full bg-purple-50 dark:bg-gray-700 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="text-purple-600 dark:text-purple-400">Digital Marketing Mastery</CardTitle>
                  <CardDescription>Create effective online marketing strategies</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>Discover the latest techniques in SEO, social media marketing, and content creation.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Enroll Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-purple-600 dark:text-purple-400">
              Latest from Our Blog
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <article className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105">
                <Link className="space-y-2 p-4 flex flex-col h-full" href="#">
                  <img
                    alt="Blog post thumbnail"
                    className="rounded-lg object-cover w-full aspect-video"
                    height={180}
                    src="/placeholder.svg"
                    width={320}
                  />
                  <h3 className="text-2xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                    10 Tips for Effective Online Learning
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 flex-grow">
                    Maximize your online learning experience with these proven strategies.
                  </p>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">Read more →</span>
                </Link>
              </article>
              <article className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105">
                <Link className="space-y-2 p-4 flex flex-col h-full" href="#">
                  <img
                    alt="Blog post thumbnail"
                    className="rounded-lg object-cover w-full aspect-video"
                    height={180}
                    src="/placeholder.svg"
                    width={320}
                  />
                  <h3 className="text-2xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                    The Future of Web Development
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 flex-grow">
                    Explore upcoming trends and technologies shaping the web development landscape.
                  </p>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">Read more →</span>
                </Link>
              </article>
              <article className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105">
                <Link className="space-y-2 p-4 flex flex-col h-full" href="#">
                  <img
                    alt="Blog post thumbnail"
                    className="rounded-lg object-cover w-full aspect-video"
                    height={180}
                    src="/placeholder.svg"
                    width={320}
                  />
                  <h3 className="text-2xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                    Demystifying Machine Learning
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 flex-grow">
                    A beginner-friendly guide to understanding the basics of machine learning.
                  </p>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">Read more →</span>
                </Link>
              </article>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-purple-600 dark:text-purple-400">
              Test Your Knowledge
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                <CardHeader>
                  <CardTitle>Web Development Quiz</CardTitle>
                  <CardDescription className="text-purple-100">
                    10 questions to test your HTML, CSS, and JavaScript knowledge
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-purple-100">Challenge yourself and see how much you've learned about web development.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-purple-600 hover:bg-purple-100">Start Quiz</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col h-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                <CardHeader>
                  <CardTitle>Data Science Challenge</CardTitle>
                  <CardDescription className="text-blue-100">
                    Solve real-world data problems in this interactive quiz
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-blue-100">Put your data analysis and machine learning skills to the test.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-100">Start Quiz</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col h-full bg-gradient-to-br from-green-500 to-teal-600 text-white">
                <CardHeader>
                  <CardTitle>Digital Marketing Trivia</CardTitle>
                  <CardDescription className="text-green-100">
                    Test your knowledge of digital marketing concepts and strategies
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-green-100">See how well you understand the latest trends in online marketing.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-green-600 hover:bg-green-100">Start Quiz</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-purple-200">© 2024 LearnCraft Academy. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
              <Link className="text-sm hover:underline underline-offset-4 text-purple-200" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:underline underline-offset-4 text-purple-200" href="#">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
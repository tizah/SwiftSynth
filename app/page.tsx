'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code2, Cpu, Globe, Lightbulb, Rocket, Users, Moon, Sun, Menu, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from 'react';

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true'
    }
    return false
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
      <header className={`px-4 lg:px-6 h-14 flex items-center fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent'
        }`}>
        <a className="flex items-center justify-center" href="#">
          <Cpu className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">SwiftSynth</span>
        </a>
        <nav className={`ml-auto flex gap-4 sm:gap-6 ${isMenuOpen ? 'flex-col absolute top-14 left-0 right-0 bg-white dark:bg-gray-800 p-4' : 'hidden'} sm:flex sm:flex-row sm:relative sm:top-0 sm:bg-transparent`}>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>
        <button onClick={toggleMenu} className="ml-auto sm:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>
      {/* Add a spacer to prevent content from being hidden under the fixed header */}
      <div className="h-14"></div>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-animation"></div>
          <div className="container m-auto relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-contrast-animation">
                  Innovate. Transform. Succeed.
                </h1>
                <p className="mx-auto max-w-[700px] text-contrast-animation md:text-xl">
                  We turn your ideas into powerful software solutions. Let's build the future together.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Get Started</Button>
                <Button variant="outline" className="border-white text-contrast-animation hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Code2 className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Custom Software Development</h3>
                <p className="text-gray-600 dark:text-gray-400">Tailored solutions to meet your unique business needs.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Globe className="h-12 w-12 mb-4 text-green-500" />
                <h3 className="text-xl font-bold mb-2">Web Application Development</h3>
                <p className="text-gray-600 dark:text-gray-400">Scalable and responsive web applications for modern businesses.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Rocket className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                <p className="text-gray-600 dark:text-gray-400">Guiding your business through the digital age with cutting-edge tech.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About SwiftSynth</h2>
                <p className="text-gray-600 dark:text-gray-400 md:text-xl">
                  At SwiftSynth, we're passionate about leveraging technology to solve complex business challenges. With
                  our team of expert developers and consultants, we've been helping businesses thrive in the digital
                  world for over a decade.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span>Expert Team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    <span>Innovative Solutions</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/office.jpg"
                  alt="Team working"
                  className="object-cover w-full h-full"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6  m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "SwiftSynth transformed our business with their innovative solutions. Highly recommended!"
                </p>
                <p className="font-bold">- Sarah Johnson, CEO of GreenTech</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "The team at SwiftSynth is incredibly skilled and professional. They delivered beyond our expectations."
                </p>
                <p className="font-bold">- Mark Thompson, CTO of DataFlow</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "Working with SwiftSynth was a game-changer for our startup. Their expertise is unmatched."
                </p>
                <p className="font-bold">- Emily Chen, Founder of NexGen</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6  m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} SwiftSynth. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}
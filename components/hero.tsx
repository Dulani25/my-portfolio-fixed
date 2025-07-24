"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Download, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Computer Science Undergraduate & FullStack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-fade-in-left">
            <div className="mb-10">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="md:text-8xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Dulani{" "}
                </span>
                <span className="md:text-8xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Kamkanamge...
                </span>
              </h1>
              <div className="text-2xl md:text-3xl text-gray-300 h-12 leading-relaxed animate-fade-in-up animate-200">
                {text}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl lg:max-w-none leading-relaxed animate-fade-in-up animate-300">
              I build clean, responsive web applications using modern technologies. Passionate about writing clean code
              and creating smooth, user-friendly experiences.
            </p>

            <div className="flex justify-center lg:justify-start space-x-4 mb-12 animate-fade-in-up animate-400">
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white hover-lift"
                onClick={() => window.open("https://github.com/Dulani25", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white hover-lift"
                onClick={() => window.open("https://linkedin.com/in/dulani-kamkanamge-565a6a2a7", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white hover-lift"
                onClick={() => window.open("https://www.facebook.com/share/19SMHHYMsd/?mibextid=wwXIfr")}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white hover-lift"
                onClick={() =>
                  window.open("https://www.instagram.com/dulz_kamkanamge?igsh=cXE4aTh1c2IzNnFv&utm_source=qr")
                }
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animate-500">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover-lift hover-glow">
                <a href="#projects">View&nbsp;My&nbsp;Work</a>
              </Button>

              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent hover-lift"
              >
                <a href="#contact">Get&nbsp;In&nbsp;Touch</a>
              </Button>

              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent hover-lift"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/cv.pdf"
                  link.download = "Dulani_Kamkanamge_CV.pdf"
                  link.click()
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download&nbsp;CV
              </Button>
              
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right animate-300">
            <div className="w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center p-6 hover-lift">
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-full overflow-hidden border-4 border-white/20 relative">
                <img
                  src="/profile.jpg"
                  alt="Dulani Kamkanamge - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-purple-400 transition-colors duration-200 animate-fade-in animate-600"
        onClick={() => {
          const aboutSection = document.getElementById("about")
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </div>
    </section>
  )
}

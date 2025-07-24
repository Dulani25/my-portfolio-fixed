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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-fade-in-left order-2 lg:order-1">
            <div className="mb-8 lg:mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block sm:inline">
                  Dulani{" "}
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block sm:inline">
                  Kamkanamge...
                </span>
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 min-h-[3rem] lg:min-h-[4rem] leading-relaxed italic animate-fade-in-up animate-delay-200">
                {text}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animate-delay-300">
              I build clean, responsive web applications using modern technologies. Passionate about writing clean code
              and creating smooth, user-friendly experiences.
            </p>

            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mb-8 lg:mb-12 animate-fade-in-up animate-delay-400">
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
                onClick={() => window.open("https://github.com/Dulani25", "_blank")}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
                onClick={() => window.open("https://linkedin.com/in/dulani-kamkanamge-565a6a2a7", "_blank")}
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
                onClick={() => window.open("https://www.facebook.com/share/19SMHHYMsd/?mibextid=wwXIfr")}
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
                onClick={() =>
                  window.open("https://www.instagram.com/dulz_kamkanamge?igsh=cXE4aTh1c2IzNnFv&utm_source=qr")
                }
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            <div className="flex flex-col space-y-3 sm:space-y-4 animate-fade-in-up animate-delay-500">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover-lift hover-glow w-full sm:w-auto">
                <a href="#projects">View&nbsp;My&nbsp;Work</a>
              </Button>

              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent hover-lift w-full sm:w-auto"
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

              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent hover-lift w-full sm:w-auto"
              >
                <a href="#contact">Get&nbsp;In&nbsp;Touch</a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right animate-delay-300 order-1 lg:order-2">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center p-4 lg:p-6 hover-lift">
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
        className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-purple-400 transition-colors duration-200 animate-fade-in animate-delay-600"
        onClick={() => {
          const aboutSection = document.getElementById("about")
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        <ChevronDown className="h-6 w-6 lg:h-8 lg:w-8 text-gray-400" />
      </div>
    </section>
  )
}

"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900/95 border-t border-slate-700/50 relative">
      {/* Back to top button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full shadow-lg hover-lift"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left animate-fade-in-up">
            <h3 className="text-2xl font-dancing bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Dulani Kamkanamge
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Computer Science Undergraduate & Full Stack Developer passionate about creating beautiful, functional web
              applications.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white hover-lift"
                onClick={() => window.open("https://github.com/Dulani25", "_blank")}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white hover-lift"
                onClick={() => window.open("https://linkedin.com/in/dulani-kamkanamge-565a6a2a7", "_blank")}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white hover-lift"
                onClick={() => window.open("https://www.facebook.com/share/19SMHHYMsd/?mibextid=wwXIfr", "_blank")}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white hover-lift"
                onClick={() =>
                  window.open("https://www.instagram.com/dulz_kamkanamge?igsh=cXE4aTh1c2IzNnFv&utm_source=qr", "_blank")
                }
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center animate-fade-in-up animate-delay-200">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#education", label: "Education" },
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 block"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right animate-fade-in-up animate-delay-300">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-400">kddlinara@gmail.com</span>
              </div>
              <div className="text-gray-400">
                <p>Available for freelance work</p>
                <p>& collaboration opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8 animate-fade-in-up animate-delay-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Dulani Kamkanamge. Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>using React & Next.js</span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Built with modern web technologies</span>
            </div>
          </div>
        </div>
      </div>
        {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>

    
    </footer>
  )
}

import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I’m a passionate developer who enjoys building responsive web applications and solving problems with clean, efficient code. I focus on creating smooth user experiences and meaningful digital solutions. I’m driven by curiosity, creativity, and a love for turning ideas into real, impactful products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-left animate-200">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center p-4 hover-lift">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg overflow-hidden border-4 border-white/20 relative">
                <Image
                  src="/profile.jpg"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 256px"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-right animate-300">
            <h3 className="text-2xl font-bold text-white">My Journey</h3>
            <p className="text-gray-400 leading-relaxed">
              Started as a curious problem-solver with a passion for technology and creativity. From building basic programs to developing full-scale web applications, my journey has been driven by a love for learning and innovation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Along the way, I’ve worked on diverse projects from real-time dashboards and machine learning models to interactive websites,gaining hands-on experience in both frontend and backend development.
              When I’m not coding, I enjoy exploring emerging tech, creating content, and contributing to impactful initiatives through leadership and collaboration.

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Breast Cancer Prediction System",
      description:
        "Built and optimized classification and regression models on breast cancer data to predict patient mortality and survival duration using Logistic Regression, Decision Trees, MLP, and ensemble methods. Preprocessed clinical datasets, performed exploratory and statistical analysis, and applied hyperparameter tuning. Improved model efficiency through code reuse and peer reviews, and delivered a comprehensive report tailored for both technical and medical audiences.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop&crop=center",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      liveUrl: "#",
      githubUrl: "https://github.com/Dulani25/Breast-Cancer-Prediction-Model-2.git",
    },
    {
      title: "Insight Marketing Intelligence Hub - Promovio",
      description:
        "Built a full-stack marketing intelligence platform with real-time dashboards, social media analytics, and an AI-driven chatbot to support data-driven strategies. Optimized performance with efficient SQL queries and led Agile coordination for smooth project execution",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "Meta APIs"],
      liveUrl: "#",
      githubUrl: "https://github.com/SathijaDissanayake/SDGP-Promovio.git",
    },
    {
      title: "Bookstore RESTful API",
      description:
        "Developed a RESTful API for an online bookstore to manage books, authors, customers, shopping carts, and orders. Implemented full CRUD operations with proper request handling and input validation using custom ExceptionMappers. Thoroughly tested endpoints using Postman to ensure reliable and robust API performance.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop&crop=center",
      technologies: ["Java", "JAX-RS", "Postman"],
      liveUrl: "#",
      githubUrl: "https://github.com/Dulani25/Bookstore-API.git",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400">Some of my recent work that I'm proud of</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

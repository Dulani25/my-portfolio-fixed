"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("programming")

  const skillCategories = {
    programming: {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Java", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "SQL", level: "Advanced" },
        { name: "HTML/CSS", level: "Advanced" },
      ],
    },
    webdev: {
      title: "Web Development",
      subcategories: {
        frontend: {
          title: "Frontend Development",
          skills: [
            { name: "HTML", level: "Advanced" },
            { name: "CSS", level: "Advanced" },
            { name: "JavaScript", level: "Intermediate" },
            { name: "React", level: "Intermediate" },
            { name: "Next.js", level: "Beginner" },
            { name: "TypeScript", level: "Beginner" },
            { name: "Tailwind CSS", level: "Intermediate" },
          ],
        },
        backend: {
          title: "Backend Development",
          skills: [
            { name: "Node.js", level: "Beginner" },
            { name: "Python", level: "Advanced" },
            { name: "RESTful APIs", level: "Intermediate" },
          ],
        },
        databases: {
          title: "Database Management",
          skills: [
            { name: "MySQL", level: "Advanced" },
            { name: "MongoDB", level: "Beginner" },
          ],
        },
      },
    },
    cloud: {
      title: "Cloud & DevOps",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
      ],
    },
    datascience: {
      title: "Data Science & ML",
      skills: [
        { name: "Pandas", level: "Intermediate" },
        { name: "NumPy", level: "Intermediate" },
        { name: "Scikit-learn", level: "Intermediate" },
        { name: "Matplotlib", level: "Intermediate" },
        { name: "Seaborn", level: "Intermediate" },
      ],
    },
    tools: {
      title: "Development Tools",
      skills: [
        { name: "VS Code", level: "Advanced" },
        { name: "IntelliJ IDEA", level: "Advanced" },
        { name: "NetBeans", level: "Intermediate" },
        { name: "Jupyter Notebook", level: "Advanced" },
        { name: "Google Colab", level: "Advanced" },
      ],
    },
    testing: {
      title: "Testing & Methodologies",
      skills: [
        { name: "API Testing", level: "Intermediate" },
        { name: "JUnit (Java)", level: "Basic" },
        { name: "Agile", level: "Beginner" },
      ],
    },
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-500/20 text-green-300 border-green-400/30"
      case "Intermediate":
        return "bg-blue-500/20 text-blue-300 border-blue-400/30"
      case "Beginner":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
      case "Basic":
        return "bg-red-500/20 text-red-300 border-red-400/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-400/30"
    }
  }

  const renderSkills = (skills: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-lg p-4 hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-400/40 transition-all duration-200 group hover-lift animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex flex-col items-center text-center space-y-2">
            <h3 className="text-white font-medium group-hover:text-purple-200 transition-colors duration-200">
              {skill.name}
            </h3>
            <Badge className={`${getLevelColor(skill.level)} border text-xs`}>{skill.level}</Badge>
          </div>
        </div>
      ))}
    </div>
  )

  const renderWebDevelopment = () => (
    <div className="space-y-8">
      {Object.entries(skillCategories.webdev.subcategories).map(([key, subcategory], categoryIndex) => (
        <div key={key} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
          <h3 className="text-xl font-semibold text-purple-300 mb-4 text-center">{subcategory.title}</h3>
          {renderSkills(subcategory.skills)}
        </div>
      ))}
    </div>
  )

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400">Technologies and tools I work with</p>
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto animate-fade-in animate-200">
          <div className="flex space-x-2 bg-slate-800/50 p-2 rounded-lg min-w-max">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-3 rounded-md transition-colors duration-200 text-sm whitespace-nowrap hover-lift ${
                  activeCategory === key ? "bg-purple-500 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 animate-scale-in animate-300 hover-glow">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {activeCategory === "webdev"
              ? renderWebDevelopment()
              : renderSkills((skillCategories[activeCategory as keyof typeof skillCategories] as any).skills || [])}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

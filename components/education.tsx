import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "BSc(Hons) Computer Science",
      institution: "University of Westminster - London , UK",
      period: "2023 - 2027",
      gpa: "",
      description:
        "Specializing in Web Development, Fullstack Development and Machine Learning. Completed courseworks in Data Structures, Algorithms, Database Systems, and Machine Learning.",
      achievements: ["Dean"],
    },
    {
      degree: "G.C.E. Advanced Level Examination",
      institution: "Lindsay Girls’ School - Colombo 03",
      period: "2022(2023)",
      description:
        "Completed G.C.E. Advanced Level in the Mathematics stream with 3 C's and 1 S, achieving a Z-score of +0.4326.",
      achievements: [],
    },
    {
      degree: "G.C.E. Ordinary Level Examination",
      institution: "Kottawa Dharmapala Maha Vidyalaya - Kottawa",
      period: "2019",
      description:
        "Completed G.C.E. Ordinary Level with 3 A’s, 4 B’s, and 2 C’s, demonstrating strong academic performance across core subjects.",
      achievements: [],
    },
  ]

  const certifications = [
    {
      name: "Python Essential Training - Certificate of Course Completion",
      issuer: "Linkedin Learning",
      date: "2025",
    },
    {
      name: "Learning Python - Certificate of Course Completion",
      issuer: "Linkedin Learning",
      date: "2025",
    },
    {
      name: "Learning Java 17 - Certificate of Course Completion",
      issuer: "Linkedin Learning",
      date: "2025",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <p className="text-xl text-gray-400">My academic background and professional certifications</p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-8 w-8 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                      <p className="text-purple-400 font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                      {edu.gpa && <span className="ml-4 text-green-400">GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <Badge key={achIndex} variant="secondary" className="bg-purple-500/20 text-purple-300">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors duration-200"
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg">{cert.name}</CardTitle>
                  <p className="text-purple-400">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Issued: {cert.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

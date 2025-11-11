import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Calendar, Users } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Swarna Bharat - Culture & Heritage Platform",
      description: "A comprehensive web platform showcasing the rich cultural heritage of Chhatrapati Sambhajinagar, featuring interactive elements, 3D animations, and a heritage map.",
      longDescription: "Built with React JS, this platform offers an immersive digital experience of Maharashtra's cultural splendor. Features include user authentication, interactive heritage maps, and engaging 3D animations to showcase historic monuments and Maratha legacy.",
      technologies: ["React.js", "Node.js", "MySQL", "Bootstrap", "Email.js"],
      duration: "Jan 2024 - June 2024",
      type: "Academic Project",
      highlights: [
        "Interactive heritage map with cultural landmarks",
        "3D animations for enhanced user experience",
        "User authentication and feedback system",
        "Responsive design with Bootstrap"
      ],
      metrics: {
        users: "500+",
        features: "15+",
        performance: "95%"
      }
    },
    {
      title: "Mentor - CabRental - Booking Management System",
      description: "A comprehensive web-based application for efficient cab booking and rental management with real-time features and user-friendly interface.",
      longDescription: "Developed during GirlScript Summer of Code internship, this system includes user registration, booking history, taxi availability tracking, and real-time pricing. Built with PHP and MySQL for robust backend functionality.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      duration: "Sep 2024 - Nov 2024",
      type: "Open Source Contribution",
      highlights: [
        "Real-time taxi availability tracking",
        "Dynamic pricing system",
        "User booking history and management",
        "Admin dashboard for fleet management"
      ],
      metrics: {
        contributors: "52",
        commits: "150+",
        issues: "25+"
      }
    }
  ];

  const achievements = [
    
    {
      title: "Developer's Club Founder",
      role: "Founder & Lead",
      description: "Founded and lead the Developer's Club at MIT, organizing workshops, hackathons, and learning sessions.",
      icon: "👥"
    },
    
    {
      title: "GDSC MIT-A",
      role: "Event & Operations Lead",
      description: "Lead event planning and operations, coordinating team efforts and managing logistics for community events.",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Projects & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto text-center">
            A showcase of my technical projects and professional experience in web development and open-source contributions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Info */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="px-3 py-1">
                          {project.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Calendar size={16} />
                          {project.duration}
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                      <p className="text-gray-600 leading-relaxed text-justify">{project.longDescription}</p>
                    </CardHeader>

                    <CardContent className="p-0">
                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <div className="mb-6">
                        <h4 className="mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <span className="text-blue-500 text-lg">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl text-blue-600 mb-1">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                          <a href="https://github.com/AniketFirke" target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                            View Code
                          </a>
                        </Button>
                        <Button size="sm" className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>

                  {/* Project Visual */}
                  <div className={`bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative w-full max-w-md">
                      <motion.div
                        className="bg-white rounded-lg shadow-lg p-6 transform rotate-3"
                        whileHover={{ rotate: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                          <div className="h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded"></div>
                          <div className="flex gap-2">
                            <div className="h-8 w-20 bg-blue-200 rounded"></div>
                            <div className="h-8 w-20 bg-purple-200 rounded"></div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements & Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl text-center mb-12">Leadership & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h4 className="mb-2">{achievement.title}</h4>
                    <Badge variant="outline" className="mb-4">{achievement.role}</Badge>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
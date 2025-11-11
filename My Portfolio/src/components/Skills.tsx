import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { AdditionalTraining } from './AdditionalTraining';

export function Skills() {
  const skillCategories = [
    {
      title: "Cloud Technologies",
      icon: "☁️",
      skills: [
        { name: "AWS Services", level: 90, description: "EC2, S3, Lambda, VPC, RDS, IAM" },
        { name: "Cloud Architecture", level: 85, description: "Solution design & cost optimization" },
        { name: "DevOps", level: 80, description: "CI/CD, Infrastructure as Code" }
      ]
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 90, description: "Hooks, Context API, Modern patterns" },
        { name: "JavaScript", level: 88, description: "ES6+, Async/Await, DOM manipulation" },
        { name: "HTML5 & CSS3", level: 92, description: "Responsive design, Flexbox, Grid" },
        { name: "Bootstrap", level: 85, description: "Component library, Responsive utilities" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, description: "Express.js, REST APIs, Middleware" },
        { name: "PHP", level: 80, description: "Server-side scripting, MVC patterns" },
        { name: "MySQL", level: 82, description: "Database design, Queries, Optimization" }
      ]
    },
    {
      title: "Networking & Security",
      icon: "🔒",
      skills: [
        { name: "CCNA", level: 88, description: "Routing, Switching, Network protocols" },
        { name: "Network Security", level: 80, description: "Firewalls, VPN, Security protocols" },
        { name: "Troubleshooting", level: 85, description: "Network diagnostics & resolution" }
      ]
    }
  ];

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "Git & GitHub", icon: "🔀" },
    { name: "AWS Console", icon: "🌐" },
    { name: "Linux (RHEL)", icon: "🐧" },
    { name: "Windows 11", icon: "🪟" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-white">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto text-center">
            A comprehensive overview of my technical expertise across cloud computing, 
            web development, and networking technologies.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-xl text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white">{skill.name}</span>
                          <span className="text-blue-400 text-sm">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-white/20"
                        />
                        <p className="text-gray-300 text-sm text-justify">{skill.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools & Software */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl text-white mb-8">Tools & Software</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 flex items-center gap-3"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="text-white">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Training */}
        <AdditionalTraining />
      </div>
    </section>
  );
}
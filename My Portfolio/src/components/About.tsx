import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function About() {
  const highlights = [
    {
      title: "Cloud Expertise",
      description: "AWS Certified Solutions Architect and DevOps Engineer with hands-on experience in AWS services such as EC2, S3, Lambda, RDS, and IAM, along with strong knowledge of DevOps tools and practices including CI/CD pipelines, Git, Jenkins, Docker, Kubernetes, Terraform, and Ansible. Skilled in designing scalable cloud solutions, automating infrastructure, and optimizing deployments to drive efficiency and reliability.",
      icon: "☁️"
    },
    
    {
      title: "Leadership",
      description: "Leadership is the art of inspiring, guiding, and empowering others toward shared goals with vision and responsibility.As Event & Operations Lead at GDSC MIT-A, I mastered coordination, adaptability, and problem-solving.Founding the Developer’s Club MIT taught me the importance of building communities and fostering innovation.Through workshops and hackathons, I encouraged creativity, teamwork, and technical growth.True leadership lies in service, trust, and enabling continuous development.",
      icon: "👥"
    },
    {
      title: "Open Source",
      description: "Active contributor to open-source projects and community initiatives",
      icon: "🌟"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              I am a highly motivated and enthusiastic AWS Cloud and DevOps Engineer with a strong understanding
              of cloud computing principles, AWS services, and DevOps practices. Currently, 
              I have completed my Bachelor’s in Computer Science at Marathwada Institute of Technology, 
              combining academic excellence with practical experience in cloud computing, DevOps, and web development.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
              My journey spans from founding the Developer's Club at MIT to contributing to open-source
              projects and leading technical teams. As Event & Operations Lead at GDSC MIT-A, 
              I honed skills in planning, coordination, and adaptability. 
              I am dedicated to delivering exceptional results while continuously enhancing my skills and technical expertise.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
             With a solid work ethic, sharp attention to detail, and a passion for learning,
            I am excited to embark on my career in the AWS Cloud and DevOps domain. 
              I aim to contribute my knowledge and energy to a forward-thinking organization that values innovation, professional growth, and continuous development. 
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="px-4 py-2">AWS Cloud</Badge>
              <Badge variant="outline" className="px-4 py-2">S3 Glacier</Badge>
              <Badge variant="outline" className="px-4 py-2">EC2</Badge>
              <Badge variant="outline" className="px-4 py-2">Leadership</Badge>
              <Badge variant="outline" className="px-4 py-2">CCNA</Badge>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{highlight.icon}</div>
                    <h3 className="mb-3">{highlight.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6 text-center">Academic Excellence</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🎓</div>
                  <h4 className="mb-2">Bachelor's Degree</h4>
                  <p className="text-gray-600 text-sm">Computer Science & Engineering</p>
                  <p className="text-gray-600 text-sm">MIT Chhatrapati Sambhajinagar</p>
                  <p className="text-gray-600 text-sm">2021-2025</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="mb-2">12th Grade</h4>
                  <p className="text-gray-600 text-sm">Maharashtra State Board</p>
                  <p className="text-gray-600 text-sm">89.50%</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🏆</div>
                  <h4 className="mb-2">10th Grade</h4>
                  <p className="text-gray-600 text-sm">Maharashtra State Board</p>
                  <p className="text-gray-600 text-sm">70.20%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
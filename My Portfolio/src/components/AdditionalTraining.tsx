import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';

export function AdditionalTraining() {
  const trainings = [
    {
      icon: "🌐",
      title: "CCNA 200-301",
      duration: "Feb 2025 – Jun 2025",
      institution: "Sevenmentor and Training Institute Pvt Ltd."
    },
    {
      icon: "☁️",
      title: "AWS Solutions Architect Associate",
      duration: "March 2025 – Jun 2025",
      institution: "Sevenmentor and Training Institute Pvt Ltd."
    },
    {
      icon: "🖥️",
      title: "DevOps",
      duration: "In Progress - Aug 2025",
      institution: "Sevenmentor and Training Institute Pvt Ltd."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-white/20">
        <CardContent className="p-8">
          <h3 className="text-2xl text-white text-center mb-8">Additional Training</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {trainings.map((training, index) => (
              <motion.div
                key={training.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{training.icon}</div>
                <h4 className="text-white mb-2">{training.title}</h4>
                <p className="text-gray-300 text-sm">{training.duration}</p>
                <p className="text-gray-400 text-xs mt-2 text-center">
                  {training.institution}
                </p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
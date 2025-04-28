import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Sparkles } from 'lucide-react';
import ModernParticles from "../items/Particles";
import StarBorder from '../items/StarBorder';

// Sample FAQ data
const faqData = [
  {
    question: "How do you balance school and project work?",
    answer: "I maintain a structured schedule with dedicated time blocks for school assignments and personal projects. I use productivity techniques like Pomodoro and task prioritization to stay on track. During busy school periods, I adjust my project commitments accordingly to ensure quality in both areas."
  },
  {
    question: "What types of projects are you available for?",
    answer: "I specialize in web development projects, particularly using React, Next.js, and modern frontend technologies. I'm available for website creation, interactive web applications, UI component development, and simple backend integration. I'm especially interested in projects involving creative interfaces and interactive user experiences."
  },
  {
    question: "What is your design and development process?",
    answer: "My process starts with understanding requirements and project goals through consultation. I then create wireframes and design mockups for approval. Development follows with regular progress updates. After implementing the core functionality, I focus on refinement, testing, and optimization. The final stage includes documentation and deployment assistance."
  },
  {
    question: "Do you work individually or as part of a team?",
    answer: "I'm comfortable in both settings. For smaller projects, I typically work individually, handling all aspects from design to implementation. For larger projects, I collaborate effectively in teams, using tools like Git for version control and communication platforms to coordinate with other developers, designers, or stakeholders."
  },
  {
    question: "What are your rates and availability as a student?",
    answer: "My rates are project-based depending on complexity, timeline, and scope. As a student, I'm available for 15-20 hours per week during school periods and full-time during holidays. I prefer to discuss specific rates after understanding your project requirements to provide a fair quote based on what you need."
  },
  {
    question: "Can you provide examples of your school projects?",
    answer: "Yes! My portfolio includes several school projects that demonstrate my skills. These include a library management system built with Java, an e-commerce website using React, and a mobile app prototype developed for a school competition. Each project includes details about the technologies used and my specific contributions."
  }
];

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 mb-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader className="p-4 cursor-pointer" onClick={onToggle}>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-medium text-white group-hover:text-blue-400 transition-all flex items-center">
              <span className="text-blue-500 mr-3 opacity-70">Q:</span>
              {question}
            </CardTitle>
            <StarBorder
              color="blue"
              speed="4s"
              className="w-8 h-8 flex items-center justify-center bg-gray-800/50 rounded-full"
            >
              {isOpen ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </StarBorder>
          </div>
        </CardHeader>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="pt-0 pb-4 px-4 border-t border-gray-800/50">
                <div className="flex gap-3">
                  <div className="text-blue-500 font-bold opacity-70">A:</div>
                  <div className="text-gray-300">
                    {answer}
                  </div>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Star variants for the floating stars animation
  const floatingStars = [
    { size: 6, top: "10%", left: "5%", delay: 0, duration: 15 },
    { size: 4, top: "20%", right: "10%", delay: 2, duration: 20 },
    { size: 8, bottom: "15%", left: "15%", delay: 1, duration: 18 },
    { size: 5, bottom: "30%", right: "5%", delay: 3, duration: 22 },
    { size: 3, top: "60%", left: "8%", delay: 4, duration: 17 }
  ];

  // Animation variants for FAQ container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  return (
    <section className="py-20 relative bg-[#0a0a0a] overflow-hidden min-h-screen">
      {/* Modern Particles Background */}
      <div className="absolute inset-0">
        <ModernParticles
          particleColors={["#8B5CF6", "#EC4899", "#3B82F6"]}
          particleCount={80}
          moveParticlesOnHover={true}
          speed={0.4}
        />
      </div>
      
      {/* Floating stars */}
      {floatingStars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute z-10 pointer-events-none"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            bottom: star.bottom,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        >
          <Sparkles className={`w-${star.size} h-${star.size} text-blue-400/30`} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="relative">
              <HelpCircle className="w-8 h-8 text-blue-400" />
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/20"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Frequently Asked Questions
            </h2>
          </div>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Everything you need to know about working with me
          </motion.p>
          <motion.div
            className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        <motion.div 
          className="mt-12 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Contact CTA Card */}
        
      </div>
    </section>
  );
};

export default FAQ;
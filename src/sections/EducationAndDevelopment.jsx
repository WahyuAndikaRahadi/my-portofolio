import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Award, Code2, ExternalLink, GraduationCap, Lightbulb, Zap, Calendar } from 'lucide-react';
import ModernParticles from "../items/Particles";
import StarBorder from '../items/StarBorder';

// Sample education data
const educationData = {
  formalEducation: {
    title: "SMK Negeri 1 Denpasar",
    program: "Software Engineering",
    duration: "2022 - Present",
    description: "Focused on programming fundamentals, web development, and software design principles.",
    skills: ["Java", "Web Development", "Database Design", "UI/UX"],
    image: "/api/placeholder/400/200"
  },
  
  coursesCompleted: [
    {
      title: "React - The Complete Guide",
      platform: "Udemy",
      date: "October 2023",
      skills: ["React", "Redux", "Hooks"],
      certificate: "#",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Modern JavaScript from the Beginning",
      platform: "Udemy",
      date: "July 2023",
      skills: ["JavaScript", "ES6+", "Async JS"],
      certificate: "#",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Responsive Web Design",
      platform: "freeCodeCamp",
      date: "May 2023",
      skills: ["HTML5", "CSS3", "Flexbox", "Grid"],
      certificate: "#",
      image: "/api/placeholder/400/200"
    }
  ],
  
  competitions: [
    {
      title: "Hackathon Indonesia 2023",
      organizer: "KementerianKominfo",
      date: "November 2023",
      description: "Developed a mobile application for community waste management. Gained experience in team collaboration and rapid prototyping.",
      skills: ["React Native", "Firebase", "UI Design"],
      image: "/api/placeholder/400/200"
    },
    {
      title: "Web Development Competition",
      organizer: "TechFest Bali",
      date: "September 2023",
      description: "Created a responsive website for local tourism promotion. Enhanced skills in frontend development and animations.",
      skills: ["HTML/CSS", "JavaScript", "Responsive Design"],
      image: "/api/placeholder/400/200"
    }
  ]
};

const CategoryButton = ({ selected, children, ...props }) => (
  <StarBorder
    as="button"
    className={`relative group px-4 py-2 text-sm font-medium rounded-lg backdrop-blur-xl border transition-all duration-300 flex items-center gap-2
      ${selected 
        ? 'bg-blue-500/20 border-blue-500/50 text-blue-400 shadow-lg shadow-blue-500/20' 
        : 'bg-gray-900/50 border-gray-800/50 text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400'
      }`}
    color={selected ? "blue" : "cyan"}
    speed="5s"
    {...props}
  >
    {children}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
  </StarBorder>
);

const ViewButton = ({ icon: Icon, children, ...props }) => (
  <StarBorder
    as="button"
    className="relative group px-4 py-2 text-sm font-medium rounded-lg bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 text-white hover:text-blue-400 flex items-center gap-2"
    color="cyan"
    speed="5s"
    {...props}
  >
    <Icon className="w-4 h-4" />
    {children}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
  </StarBorder>
);

const GlowingCard = ({ children, className, ...props }) => (
  <Card 
    className={`bg-gray-900/30 border-gray-800/50 backdrop-blur-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 relative ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    {children}
  </Card>
);

const EducationAndDevelopment = () => {
  const [activeCategory, setActiveCategory] = useState("formal");
  const categories = [
    { id: "formal", label: "Formal Education", icon: GraduationCap },
    { id: "courses", label: "Online Courses", icon: BookOpen },
    { id: "competitions", label: "Competitions", icon: Award }
  ];

  // Animation variants
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
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 relative bg-[#0a0a0a] overflow-hidden min-h-screen">
      {/* Modern Particles Background */}
      <div className="absolute inset-0">
        <ModernParticles
          particleColors={["#60A5FA", "#34D399", "#A78BFA"]}
          particleCount={100}
          moveParticlesOnHover={true}
          speed={0.5}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Lightbulb className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Education & Development
            </h2>
          </div>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My continuous journey of learning and growth
          </motion.p>
          <motion.div
            className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CategoryButton
                selected={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </CategoryButton>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          {/* Formal Education */}
          {activeCategory === "formal" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants}>
                <GlowingCard className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src={educationData.formalEducation.image} 
                      alt="School" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <Badge className="bg-blue-500/30 text-blue-300 border border-blue-500/30">
                        {educationData.formalEducation.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-2xl group-hover:text-blue-400 transition-colors">
                          {educationData.formalEducation.title}
                        </CardTitle>
                        <CardDescription className="text-blue-300 font-medium mt-1">
                          {educationData.formalEducation.program}
                        </CardDescription>
                      </div>
                      <GraduationCap className="w-10 h-10 text-blue-400 opacity-80" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      {educationData.formalEducation.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Key Skills Acquired:</h4>
                      <div className="flex flex-wrap gap-2">
                        {educationData.formalEducation.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 backdrop-blur-xl border border-blue-500/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </GlowingCard>
              </motion.div>
            </motion.div>
          )}

          {/* Online Courses */}
          {activeCategory === "courses" && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {educationData.coursesCompleted.map((course, index) => (
                <motion.div key={course.title} variants={itemVariants}>
                  <GlowingCard>
                    <div className="relative overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full  object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-blue-500/40 text-blue-100 border-none">
                          <Calendar className="w-3 h-3 mr-1" />
                          {course.date}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white group-hover:text-blue-400 transition-colors text-lg">
                            {course.title}
                          </CardTitle>
                          <CardDescription className="text-gray-400">
                            <span className="text-blue-300">{course.platform}</span>
                          </CardDescription>
                        </div>
                        <BookOpen className="w-6 h-6 text-blue-400 opacity-80" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 backdrop-blur-xl border border-blue-500/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <ViewButton icon={ExternalLink}>View Certificate</ViewButton>
                    </CardFooter>
                  </GlowingCard>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Competitions */}
          {activeCategory === "competitions" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {educationData.competitions.map((competition, index) => (
                <motion.div key={competition.title} variants={itemVariants}>
                  <GlowingCard>
                    <div className="md:flex">
                      <div className="md:w-1/3 relative">
                        <img
                          src={competition.image}
                          alt={competition.title}
                          className="w-full h-full object-cover md:h-full "
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-0 md:opacity-100" />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                                {competition.title}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <CardDescription className="text-gray-400">
                                  {competition.organizer}
                                </CardDescription>
                                <span className="text-gray-600">•</span>
                                <CardDescription className="text-blue-300">
                                  {competition.date}
                                </CardDescription>
                              </div>
                            </div>
                            <Award className="w-6 h-6 text-blue-400 opacity-80" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 mb-4">
                            {competition.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {competition.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 backdrop-blur-xl border border-blue-500/30"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </GlowingCard>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Insight Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -left-8 -top-8 text-6xl text-blue-500/20">"</div>
            <div className="absolute -right-8 -bottom-8 text-6xl text-blue-500/20">"</div>
            <blockquote className="text-xl italic text-gray-300 relative z-10">
              Every competition and course is a stepping stone in my journey. The knowledge I gain from each experience is what truly matters, not just the outcomes.
            </blockquote>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <Zap className="text-blue-400 w-5 h-5 mr-2" />
            <span className="text-blue-300 font-medium">My learning philosophy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationAndDevelopment;
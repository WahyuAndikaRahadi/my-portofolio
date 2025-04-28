import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, GraduationCap, Star, SquareUserRound } from "lucide-react";
import RotatingText from "../items/RotatingText";
import ModernParticles from "../items/Particles";
import PixelTransition from '../items/PixelTransition';
import InfiniteScroll from '../items/InfiniteScroll';
import ScrollVelocity from '../items/ScrollVelocity';
import PixelCard from '../items/PixelCard'

const AboutMe = () => {
  const skills = [
    "React", "Node.js", "TypeScript",
    "Next.js", "TailwindCSS", "Python",
    "Jupyter NoteBook", "Tensorflow", "Laravel"
  ];

  const educationItems = [
    {
      content: (
        <div className="p-6 bg-purple-900/20 backdrop-blur-lg rounded-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 border border-purple-500/20">
          <h3 className="text-xl font-bold text-purple-300">Software Engineering (SIJA)</h3>
          <p className="text-gray-300">SMKN 69 Jakarta • 2023 - 2027</p>
          <p className="text-gray-400 mt-2">Specializing in Web Development and Programming</p>
        </div>
      )
    },
    {
      content: (
        <div className="p-6 bg-green-900/20 backdrop-blur-lg rounded-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 border border-green-500/20">
          <h3 className="text-xl font-bold text-green-300">Full Stack Web Development</h3>
          <p className="text-gray-300">Self-Learning & Online Courses • 2023</p>
          <p className="text-gray-400 mt-2">React, Laravel, and Modern Web Technologies</p>
        </div>
      )
    },
    {
      content: (
        <div className="p-6 bg-yellow-900/20 backdrop-blur-lg rounded-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 border border-yellow-500/20">
          <h3 className="text-xl font-bold text-yellow-300">Artificial Intelligence & Machine Learning</h3>
          <p className="text-gray-300">Self-Study & Projects • 2024</p>
          <p className="text-gray-400 mt-2">Focused on Deep Learning and AI Applications</p>
        </div>
      )
    }
  ];
  

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {/* Background Particles */}
      <div className="absolute inset-0">
        <ModernParticles
          particleColors={["#A78BFA", "#34D399", "#8B5CF6"]}
          particleCount={100}
          moveParticlesOnHover={true}
          speed={0.5}
        />
      </div>

      {/* Fixed Large Text Overlay with ScrollVelocity */}
      <div className="absolute inset-0 z-0 flex justify-center md:justify-center items-center ">
        <div className="max-w-[90%] p-6 bg-opacity-50 rounded-lg bg-black shadow-lg overflow-hidden">
          <ScrollVelocity
            texts={['WAHYU', 'ANDIKA', 'RAHADI']}
            velocity={100}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900/20 via-green-900/20 to-yellow-900/20 glow-in-dark"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 py-32 max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <SquareUserRound className="w-8 h-8 text-green-400" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-green-400 to-yellow-400">
              About Me
            </h1>
          </div>
          <motion.p
            className="text-gray-400 text-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A passionate learner and developer exploring AI, machine learning, and web technologies to create impactful digital experiences.
          </motion.p>
          <motion.div
            className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-purple-500 via-green-500 to-yellow-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <Card className="bg-white/5 backdrop-blur-xl border-0 p-8 rounded-2xl shadow-lg shadow-purple-500/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Who Am I?</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  A developer fueled by curiosity, crafting digital solutions with web development, AI, and machine learning.
                  Dedicated to building applications that are scalable, smart, and meaningful.
                </p>
              </div>

              <div className="h-[300px]">
                <PixelTransition
                  firstContent={
                    <div className="w-full h-full bg-gradient-to-r from-purple-600 to-green-600 rounded-xl flex items-center justify-center">
                      <img
                        src="/api/placeholder/400/300"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-xl opacity-90"
                      />
                    </div>
                  }
                  secondContent={
                    <div className="w-full h-full bg-gradient-to-r from-green-600 to-yellow-600 rounded-xl flex items-center justify-center">
                      <img
                        src="/api/placeholder/400/300"
                        alt="Working"
                        className="w-full h-full object-cover rounded-xl opacity-90"
                      />
                    </div>
                  }
                  gridSize={15}
                  pixelColor="#8B5CF6"
                  animationStepDuration={0.3}
                  className="rounded-xl"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <Card className="bg-white/5 backdrop-blur-xl border-0 p-8 rounded-2xl shadow-lg shadow-purple-500/10">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-green-400" />
              Education
            </h2>
            <div className="h-[400px] relative">
              <InfiniteScroll
                items={educationItems}
                isTilted={true}
                tiltDirection="left"
                autoplay={true}
                autoplaySpeed={0.08}
                autoplayDirection="up"
                pauseOnHover={true}
              />
            </div>
          </Card>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
            <Star className="w-6 h-6 mr-2 text-yellow-400" />
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-48" // Adjusted height 
              >
                <PixelCard
                  variant={index % 3 === 0 ? "pink" : index % 3 === 1 ? "green" : "yellow"}
                  className="h-[200px] w-full relative overflow-hidden grid place-items-center rounded-[15px] border border-[#27272a]"
                >
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <span className="text-lg font-medium text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 via-green-400 to-yellow-400 transition-all duration-300">
                      {skill}
                    </span>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
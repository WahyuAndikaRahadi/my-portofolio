import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence} from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text3D, Center } from '@react-three/drei';
import { Github, Mail, Linkedin, Code2, School, Award, BookOpen, Phone, MessageSquare, Globe, Triangle, Menu, X, ChevronRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Skills from './sections/Skills';
import Home from './sections/Home';
import Projects from './sections/Projects';
import GithubContributions from './sections/GithubContributions';
import GlobalRibbonCursor from './items/Ribbons';
import SplashCursor from './items/SplashCursor'
import About from './sections/About';
import GlobalCursor from './items/GlobalCursor';
import EducationAndDevelopment from './sections/EducationAndDevelopment';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact'


const skillsData = {
  programming: [
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'Python', level: 85, color: '#3776AB' },
    { name: 'TypeScript', level: 80, color: '#3178C6' },
    { name: 'Java', level: 75, color: '#007396' },
    { name: 'Go', level: 70, color: '#00ADD8' },
    { name: 'Rust', level: 65, color: '#000000' }
  ],
  frontend: [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'Vue.js', level: 85, color: '#4FC08D' },
    { name: 'Next.js', level: 85, color: '#000000' },
    { name: 'Three.js', level: 80, color: '#000000' },
    { name: 'Tailwind', level: 90, color: '#38B2AC' }
  ],
  backend: [
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'Django', level: 80, color: '#092E20' },
    { name: 'Spring Boot', level: 75, color: '#6DB33F' },
    { name: 'GraphQL', level: 75, color: '#E10098' }
  ]
};

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
    tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: '3D Portfolio',
    description: 'Interactive 3D portfolio website using Three.js and React',
    tech: ['Three.js', 'React', 'TailwindCSS'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'AI Image Generator',
    description: 'Image generation app using OpenAI API and Next.js',
    tech: ['Next.js', 'OpenAI', 'TailwindCSS'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contributions', label: 'Contributions' },
    { id: 'education', label: 'Education' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));
      
      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [navRef]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg py-3 shadow-lg shadow-cyan-500/10' 
          : 'bg-black/30 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with glowing effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-white drop-shadow-glow relative"
              style={{
                textShadow: '0 0 10px #00DDFF, 0 0 20px #00DDFF, 0 0 30px #00DDFF'
              }}
            >
              Wahyu.Dev
            </motion.span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {sections.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: '0 0 8px rgba(0, 221, 255, 0.8)' 
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-cyan-300' 
                    : 'text-gray-300 hover:text-white'
                }`}
                style={activeSection === item.id ? {
                  textShadow: '0 0 10px #00DDFF, 0 0 15px #00DDFF'
                } : {}}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 bg-cyan-900/20 rounded-lg border border-cyan-500/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden p-2 rounded-lg text-cyan-300 hover:text-white focus:outline-none"
            aria-label="Menu"
            style={{
              textShadow: '0 0 5px #00DDFF'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* Fixed Mobile Menu Bug: Now properly positioned and styled */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-cyan-900/50 absolute w-full left-0 top-full max-h-screen overflow-auto"
          >
            <div className="container mx-auto px-4 py-2">
              {sections.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center justify-between w-full py-3 px-4 rounded-lg my-1 transition-all ${
                    activeSection === item.id
                      ? 'bg-cyan-900/20 text-cyan-300 border-l-4 border-cyan-500'
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                  }`}
                  style={activeSection === item.id ? {
                    textShadow: '0 0 8px rgba(0, 221, 255, 0.6)'
                  } : {}}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && <ChevronRight size={16} className="text-cyan-400" />}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};




const ParallaxSection = ({ children, offset = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};












const Footer = () => (
  <footer className="bg-gray-900 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2025 Wahyu Andika Rahadi. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  const { scrollYProgress } = useScroll();

  return (
<div className="bg-black min-h-screen relative">
  <motion.div
    className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 transform-origin-0 z-50"
    style={{ scaleX: scrollYProgress }}
  />

  
<Navigation />
      <main>
        {/* <SplashCursor/> */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contributions">
          <GithubContributions />
        </section>
        <section id="education">
          <EducationAndDevelopment />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />

</div> 

  );
};

export default App;
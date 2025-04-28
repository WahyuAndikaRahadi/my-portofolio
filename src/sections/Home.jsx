import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Code2, Sparkles, Bot } from "lucide-react";
import RotatingText from "../items/RotatingText";
import Squares from '../items/Squares';

const Home = () => {
  const scrollToSection = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  return (
    <div className="relative min-h-screen bg-zinc-900">
      {/* Squares Background with Glowing Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-zinc-800/20 to-transparent" />
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#444'
          hoverFillColor='#333'
        />
      </div>

      {/* Ambient Light Sources */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-4xl"
        >
          {/* Hero Section */}
          <div className="grid grid-cols-1 gap-6">
            {/* Introduction Card with Glow */}
            <Card className="bg-zinc-900/80 border border-zinc-800 shadow-lg shadow-zinc-900/80 backdrop-blur-xl overflow-hidden relative">
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-transparent to-zinc-700/20 opacity-50" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="p-8 relative"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Profile Image with Glow */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Outer Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-zinc-400/10 to-zinc-700/5 rounded-full blur-md" />

                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-zinc-600 via-zinc-500 to-zinc-700 p-1 relative">
                      <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                        {/* Inner Light Effect */}
                        <div className="absolute w-16 h-16 bg-zinc-400/10 rounded-full blur-xl" />
                        <Sparkles className="w-12 h-12 text-zinc-300 relative z-10" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Content with Subtle Glow */}
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-200">
                        Wahyu Andika Rahadi
                      </span>
                      {/* Text Shadow Effect */}
                      <span className="absolute -inset-1 bg-gradient-to-r from-zinc-300/10 to-zinc-500/10 blur-xl opacity-30" />
                    </h1>

                    <div className="mb-4 flex items-center justify-center md:justify-start gap-2">
                      <span className="text-lg text-zinc-400">I'm</span>
                      <RotatingText
                        texts={[
                          'Manchine Learning Engineer',
                          'Backend Developer',
                          'Frontend Developer'
                        ]}
                        mainClassName="inline-block px-3 py-1 bg-zinc-800/50 text-zinc-300 text-sm rounded-lg font-medium relative overflow-hidden"
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        rotationInterval={3000}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Card>

            {/* Skills & Projects Cards with Glow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-zinc-900/80 border-zinc-800 backdrop-blur-xl p-6 relative group">
                {/* Card Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-700/10 via-transparent to-zinc-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="relative"
                >
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <div className="relative">
                      <Code2 className="text-zinc-300 relative z-10" />
                      <div className="absolute -inset-1 bg-zinc-400/10 rounded-full blur-sm" />
                    </div>
                    <span className="text-zinc-300">Tech Stack</span>
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {['React', 'Express', 'Laravel', 'Python'].map((tech, i) => (
                      <div key={i} className="bg-zinc-800/50 rounded-lg p-2 text-center text-zinc-300 relative overflow-hidden group/item">
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-700/0 via-zinc-600/5 to-zinc-700/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                        {tech}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Card>

              <Card className="bg-zinc-900/80 border-zinc-800 backdrop-blur-xl p-6 relative group">
                {/* Card Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-bl from-zinc-700/10 via-transparent to-zinc-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="relative"
                >
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <div className="relative">
                      <Bot className="text-zinc-300 relative z-10" />
                      <div className="absolute -inset-1 bg-zinc-400/10 rounded-full blur-sm" />
                    </div>
                    <span className="text-zinc-300">My Path in AI & Web</span>
                  </h2>
                  <p className="text-zinc-400">
                    Growing from coding simple websites to mastering AI and machine learning a journey fueled by passion and endless curiosity.
                  </p>

                </motion.div>
              </Card>
            </div>

            {/* Action Buttons with Glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center mt-4"
            >
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-zinc-700/0 via-zinc-600/30 to-zinc-700/0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-full transition-all duration-1000" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">Download CV</span>
                <span className="absolute inset-0 bg-gradient-to-r from-zinc-700/0 via-zinc-600/10 to-zinc-700/0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-full transition-all duration-1000" />
              </Button>

              {/* Social Links with Glow */}
              <div className="flex gap-3">
                {[
                  { Icon: Github, Href: "https://github.com/WahyuAndikaRahadi/WahyuAndikaRahadi/" },
                  { Icon: Linkedin, Href: "www.linkedin.com/in/wahyuandikarahadi" },
                ].map(({ Icon, Href }, i) => (
                  <a
                    href={Href}
                    variant="ghost"
                    target="_blank"
                    size="icon"
                    className="text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800 transition-all duration-300 relative group"
                  >
                    <Icon className="w-5 h-5 relative z-10" />
                    <span className="absolute inset-0 bg-zinc-400/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;  
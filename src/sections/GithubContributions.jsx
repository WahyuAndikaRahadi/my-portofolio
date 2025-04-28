import React from 'react'; 
import { motion } from 'framer-motion'; 
import { Card, CardContent } from '@/components/ui/card'; 
import { GitBranch, Code2, Github } from 'lucide-react'; 
import ModernParticles from "../items/Particles"; 
import GlitchText from '../items/GlitchText';

const GithubContributions = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] py-12 px-4">
      <div className="absolute inset-0">
        <ModernParticles
          particleColors={["#A78BFA", "#34D399", "#8B5CF6"]}
          particleCount={100}
          moveParticlesOnHover={true}
          speed={0.5}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-8 relative z-10"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="w-8 h-8 text-green-400" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
              My GitHub Contributions
            </h1>
          </div>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Tracking my journey through code
          </motion.p>
          <motion.div
            className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* Snake Animation Card */}
        <Card className="w-full bg-zinc-900/30 backdrop-blur-xl border-zinc-800/50 overflow-hidden mb-8">
          <CardContent className="p-0">
            <div className="relative">
              <motion.div
                className="relative"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(24, 24, 27, 0.2)',
                    '0 0 40px rgba(24, 24, 27, 0.4)',
                    '0 0 20px rgba(24, 24, 27, 0.2)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <img
                  src="https://raw.githubusercontent.com/WahyuAndikaRahadi/WahyuAndikaRahadi/output/github-contribution-grid-snake-dark.svg"
                  alt="GitHub Contribution Snake"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </motion.div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards Container */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub Stats Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-zinc-900/30 backdrop-blur-xl border-zinc-800/50 overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <GitBranch className="w-4 h-4 text-gray-500" />
                  <GlitchText speed={0.8} enableShadows={false} enableOnHover={false} className="text-3xl text-gray-400">
                    Statistics
                  </GlitchText>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=WahyuAndikaRahadi&theme=dark&show_icons=true&hide_border=true&count_private=true"
                    alt="GitHub Stats"
                    className="w-full h-auto"
                  />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-zinc-900/30 backdrop-blur-xl border-zinc-800/50 overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-4 h-4 text-gray-500" />
                  <GlitchText speed={0.8} enableShadows={false} enableOnHover={false} className="text-3xl text-gray-400">
                    Languages
                  </GlitchText>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                    className="flex justify-start"
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=WahyuAndikaRahadi&theme=dark&show_icons=true&hide_border=true&layout=compact"
                    alt="Top Languages"
                    className="w-[76%] h-auto "
                  />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GithubContributions;
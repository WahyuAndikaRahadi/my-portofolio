import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Cpu, Globe, Server, Code, Library, Database, Computer } from 'lucide-react';
import ModernParticles from '../items/Particles'; // Assuming you have this component

const skillsData = {
    programming: [
        {
            name: "Python",
            level: 90,
            color: "#3498db",
            logo: "/logo/python.png",
            years: 5,
            projects: 25
        },
        {
            name: "JavaScript",
            level: 85,
            color: "#f1c40f",
            logo: "/logo/js.png",
            years: 4,
            projects: 30
        },
        {
            name: "PHP",
            level: 80,
            color: "#480ca8",
            logo: "/logo/php.png",
            years: 3,
            projects: 20
        },
    ],
    frontend: [
        {
            name: "React",
            level: 95,
            color: "#00b4d8",
            logo: "/logo/react.png",
            years: 4,
            projects: 35
        },
        {
            name: "Vite.js",
            level: 85,
            color: "#2ecc71",
            logo: "/logo/vite.png",
            years: 3,
            projects: 15
        },
        {
            name: "Tailwind",
            level: 90,
            color: "#3498db",
            logo: "/logo/tailwind.png",
            years: 3,
            projects: 28
        },
    ],
    backend: [
        {
            name: "Laravel",
            level: 88,
            color: "#F14F34",
            logo: "/logo/laravel.webp",
            years: 4,
            projects: 22
        },
        {
            name: "Node.js",
            level: 82,
            color: "#68a063",
            logo: "/logo/node.png",
            years: 3,
            projects: 18
        },
        {
            name: "Express",
            level: 75,
            color: "#000100",
            logo: "/logo/express.png",
            years: 2,
            projects: 12
        },
    ],
    otherSkills: [
        {
            name: "TypeScript",
            level: 85,
            color: "#3178c6",
            logo: "/logo/ts.png",
            years: 4,
            projects: 15
        },
        {
            name: "Bootstrap",
            level: 80,
            color: "#563d7c",
            logo: "/logo/bootstrap.png",
            years: 3,
            projects: 10
        },
        {
            name: "Solidity",
            level: 75,
            color: "#f8f8f8",
            logo: "/logo/solidity.png",
            years: 2,
            projects: 8
        }
    ]
};


const LogoCloud = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-16"
    >
        {Object.values(skillsData).flat().map((skill) => (
            <motion.div
                key={skill.name}
                whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 20px ${skill.color}40`,
                }}
                className="flex items-center justify-center p-4 bg-gray-900/60 rounded-xl backdrop-blur-lg border border-gray-800/50 hover:border-gray-700/50 transition-all"
            >
                <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-12 h-12 object-contain filter brightness-90 hover:brightness-110 transition-all"
                />
            </motion.div>
        ))}
    </motion.div>
);


const SkillCard = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
                scale: 1.02,
                boxShadow: `0 0 30px ${skill.color}30`,
            }}
            className="relative group"
        >
            <Card className="bg-gray-900/60 backdrop-blur-xl border border-gray-800/50 overflow-hidden group-hover:border-gray-700/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-900/50 z-0" />
                <CardHeader className="pb-3 relative z-10">
                    <CardTitle className="text-white flex items-center gap-3">
                        <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="w-6 h-6 object-contain"
                        />
                        {skill.name}
                    </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                    <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full rounded-full relative"
                            style={{ backgroundColor: skill.color }}
                        >
                            <motion.div
                                className="absolute inset-0"
                                animate={{
                                    background: [
                                        `linear-gradient(90deg, ${skill.color}20, ${skill.color}ff)`,
                                        `linear-gradient(90deg, ${skill.color}ff, ${skill.color}20)`,
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            />
                        </motion.div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="bg-gray-800/30 p-2 rounded-lg backdrop-blur-sm">
                            <p className="text-gray-400 text-xs">Experience</p>
                            <p className="text-white font-semibold">{skill.years} Years</p>
                        </div>
                        <div className="bg-gray-800/30 p-2 rounded-lg backdrop-blur-sm">
                            <p className="text-gray-400 text-xs">Projects</p>
                            <p className="text-white font-semibold">{skill.projects}+</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                        <motion.div
                            className="text-xs px-2 py-1 rounded-full"
                            style={{ 
                                backgroundColor: `${skill.color}20`,
                                color: skill.color,
                                textShadow: `0 0 10px ${skill.color}40`
                            }}
                            whileHover={{ scale: 1.1 }}
                        >
                            Expert
                        </motion.div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const Skills = () => {
    const tabIcons = {
        programming: Code,
        frontend: Globe,
        backend: Database,
        otherSkills: Library
    };

    return (
        <section className="py-20 relative bg-[#0a0a0a] overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <ModernParticles
          particleColors={["#A78BFA", "#34D399", "#8B5CF6"]}
          particleCount={100}
          moveParticlesOnHover={true}
          speed={0.2}
        />
      </div>
            {/* Modern Particles Background */}

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center relative z-10 mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <Computer className="w-8 h-8 text-green-400" />
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                            My Skills & Technologies
                        </h1>
                    </div>
                    <motion.p
                        className="text-gray-400 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Building modern digital experiences by combining web development, AI, and machine learning technologies.
                    </motion.p>
                    <motion.div
                        className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 128 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />
                </motion.div>

                <LogoCloud />

                <Tabs defaultValue="programming" className="w-full">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12 bg-gray-900/60 backdrop-blur-xl p-1 rounded-xl border border-gray-800/50">
                        {Object.keys(skillsData).map((category) => {
                            const Icon = tabIcons[category];
                            return (
                                <TabsTrigger
                                    key={category}
                                    value={category}
                                    className="data-[state=active]:bg-gray-800/50 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/20 flex items-center gap-2 transition-all"
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className="hidden md:inline capitalize">{category}</span>
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>

                    {Object.entries(skillsData).map(([category, skills]) => (
                        <TabsContent key={category} value={category} className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {skills.map((skill, index) => (
                                    <SkillCard key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default Skills;

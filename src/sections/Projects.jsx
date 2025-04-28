import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Github, Globe, Code2, ExternalLink } from 'lucide-react';
import ModernParticles from "../items/Particles";
import StarBorder from '../items/StarBorder';
// Sample project data
const projectsData = [
  {
    title: "AI Image Generator",
    description: "Create stunning artworks using advanced AI algorithms",
    image: "/api/placeholder/400/200",
    category: "AI",
    tech: ["React", "Python", "TensorFlow"],
    github: "#",
    demo: "#"
  },
  {
    title: "Blockchain Explorer",
    description: "Track and analyze blockchain transactions in real-time",
    image: "/api/placeholder/400/200",
    category: "Blockchain",
    tech: ["Next.js", "Ethereum", "Web3.js"],
    github: "#",
    demo: "#"
  },
  {
    title: "AR Shopping Experience",
    description: "Try products virtually before purchasing",
    image: "/api/placeholder/400/200",
    category: "AR/VR",
    tech: ["Unity", "ARKit", "C#"],
    github: "#",
    demo: "#"
  }
];

const ProjectButton = ({ icon: Icon, children, ...props }) => (
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



const TiltCard = ({ children }) => {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out"
    >
      {children}
    </div>
  );
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "AI", "Blockchain", "AR/VR", "Web3", "Mobile"];
  
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 relative bg-[#0a0a0a] overflow-hidden min-h-screen">
      {/* Modern Particles Background */}
      <div className="absolute inset-0">
        <ModernParticles
          particleColors={["#A78BFA", "#34D399", "#8B5CF6"]}
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
            <Code2 className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Featured Projects
            </h2>
          </div>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Exploring the frontiers of technology
          </motion.p>
          <motion.div
            className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        <div className="mt-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-10 bg-gray-900/50 border-gray-800/50 text-white placeholder-gray-400 backdrop-blur-xl hover:border-gray-700/50 focus:border-blue-500/50 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <CategoryButton
            selected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </CategoryButton>
        </motion.div>
      ))}
    </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <TiltCard>
              <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <ProjectButton icon={Github}>
                      Code
                    </ProjectButton>
                    <ProjectButton icon={ExternalLink}>
                      Demo
                    </ProjectButton>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 backdrop-blur-xl border border-blue-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
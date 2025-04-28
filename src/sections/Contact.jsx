import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Send, Sparkles, Globe, MessageCircle, AlertTriangle } from 'lucide-react';
import ModernParticles from "../items/Particles";
import StarBorder from '../items/StarBorder';
import DayNightGlobe from '../items/DayNightGlobe';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formState, setFormState] = useState({
    nama: '',
    emaill: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();
  
  // Initialize EmailJS with your User ID
  useEffect(() => {
    emailjs.init("DSfLqJnveZ7XpJG6w"); // Replace with your EmailJS User ID
  }, []);
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Prepare template parameters
    const templateParams = {
      nama: formState.nama,
      emaill: formState.emaill,
      subject: formState.subject,
      message: formState.message
    };
    
    // Send email using EmailJS
    emailjs.send(
      'service_sdxsvji', // Replace with your EmailJS service ID
      'template_x0annet', // Replace with your EmailJS template ID
      templateParams
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({
            nama: '',
            emaill: '',
            subject: '',
            message: ''
          });
        }, 3000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setIsSubmitting(false);
        setError('Failed to send message. Please try again later.');
      });
  };
  
  // Star variants for the floating stars animation
  const floatingStars = [
    { size: 6, top: "10%", left: "5%", delay: 0, duration: 15 },
    { size: 4, top: "20%", right: "10%", delay: 2, duration: 20 },
    { size: 8, bottom: "15%", left: "15%", delay: 1, duration: 18 },
    { size: 5, bottom: "30%", right: "5%", delay: 3, duration: 22 },
    { size: 3, top: "60%", left: "8%", delay: 4, duration: 17 }
  ];

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
              <Mail className="w-8 h-8 text-blue-400" />
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/20"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Get In Touch
            </h2>
          </div>
          <motion.p 
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's collaborate on your next project
          </motion.p>
          <motion.div
            className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        <motion.div 
          className="mt-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Contact Form */}
          <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="p-6">
              <CardTitle className="text-xl font-medium text-white group-hover:text-blue-400 transition-all flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-blue-500" />
                Send Message
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-6 pt-0 relative z-10">
              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="relative mb-4">
                      <Send className="w-12 h-12 text-green-500" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-green-500/20"
                        animate={{ scale: [1, 1.8, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <Input
                          name="nama"
                          value={formState.nama}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <Input
                          name="emaill"
                          type="email"
                          value={formState.emaill}
                          onChange={handleChange}
                          placeholder="Your Email"
                          required
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <Input
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          required
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <Textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Your Message"
                          required
                          rows={5}
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 resize-none"
                        />
                      </div>
                      
                      {error && (
                        <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded flex items-start">
                          <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{error}</span>
                        </div>
                      )}
                      
                      <div>
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 relative overflow-hidden group"
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </span>
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
                            animate={{ scale: [0.8, 1], opacity: [0, 0.8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
          
          {/* Globe Visualization */}
          <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="p-6">
              <CardTitle className="text-xl font-medium text-white group-hover:text-blue-400 transition-all flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-500" />
                I want to expand globally
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0 flex-grow h-[400px] relative">
              <DayNightGlobe />
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          className="mt-8 max-w-6xl mx-auto grid md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            {
              icon: <Mail className="w-5 h-5 text-blue-400" />,
              title: "Email",
              value: "wahyuandikarahadi19@gmail.com"
            },
            {
              icon: <MessageCircle className="w-5 h-5 text-purple-400" />,
              title: "Social Media",
              value: "@wahyuandika"
            },
            {
              icon: <Globe className="w-5 h-5 text-pink-400" />,
              title: "Website",
              value: "wahyuandika.dev"
            }
          ].map((item, index) => (
            <Card 
              key={index}
              className="bg-gray-900/30 border-gray-800/50 backdrop-blur-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="p-4 flex items-center">
                <div className="mr-4 bg-gray-800/80 p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">{item.title}</h3>
                  <p className="text-white text-base font-medium">{item.value}</p>
                </div>
              </CardContent>
              
            </Card>
            
          ))}
          
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
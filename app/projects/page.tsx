'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: "Shareable Resume Builder",
      description: "Shareable Resume Builder website built with HTML, CSS and TYPESCRIPT.",
      image: "/shareable-resume-builder.png",
      github: "https://github.com/NISHAT-HERE/Shareable-resume-builder",
      demo: "https://shareable-resume-builder-nu.vercel.app",
      tech: ["HTML", "CSS", "TYPESCRIPT"]
    },
    {
      title: "Nike Clone",
      description: "Nike Clone Website with modern UI/UX design.",
      image: "/nike.png",
      github: "https://github.com/NISHAT-HERE/Nike-clone",
      demo: "https://nike-clone-nishat.vercel.app",
      tech: ["NEXT.JS", "TAILWIND CSS"]
    },
    {
      title: "Figma Clone",
      description: "Figma Clone Project with real-time collaboration features.",
      image: "/figma-clone-web.png",
      github: "https://github.com/NISHAT-HERE/Figma-Clone-Web",
      demo: "https://figma-clone-web-eight.vercel.app",
      tech: ["NEXT.JS", "TAILWIND CSS"]
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-all duration-300 group-hover:brightness-110"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
                />
              </motion.div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-semibold mb-2 text-white"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-4"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="bg-blue-500/20 text-blue-200 text-sm px-3 py-1 rounded-full backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.12,
                        rotate: 3,
                        backgroundColor: "#93C5FD", // blue-300
                        y: -2
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-6">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-all duration-300 flex items-center"
                    whileHover={{ scale: 1.1, x: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaGithub size={35} />
                    </motion.span>
                    GitHub
                  </motion.a>
                  <motion.a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-all duration-300 flex items-center"
                    whileHover={{ scale: 1.1, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaExternalLinkAlt size={30} />
                    </motion.span>
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
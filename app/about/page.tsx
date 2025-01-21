'use client'

import { motion } from 'framer-motion'
import Image from 'next/legacy/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="w-full max-w-2xl mx-auto">
        <motion.div 
          className="backdrop-blur-lg rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <motion.div 
                className="w-48 sm:w-56 md:w-1/3 relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative w-full aspect-square rounded-full overflow-hidden">
                  <Image
                    src="/about.jpeg"
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div 
                className="flex-1 text-center md:text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">About Me</h1>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  Hi, My name is NISHAT and I'm a passionate web developer with expertise in modern web technologies.
                  I specialize in creating responsive and user-friendly applications using
                  React, Next.js, and TypeScript.
                </p>
                <p className="text-sm sm:text-base text-gray-300 mb-6">
                  With a strong foundation in both frontend and backend development,
                  I strive to create seamless digital experiences that make a difference.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
                  <motion.a 
                    href="/"
                    className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2.5 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Home
                  </motion.a>
                  <motion.a 
                    href="/contact"
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-blue-500 px-6 py-2.5 rounded-lg hover:bg-white33/20 transition-colors text-sm sm:text-base font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div 
              className="mt-8 pt-8 border-t border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white text-center md:text-left">Skills</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-blue-500/20 text-gray-300 px-3 py-1.5 rounded-full text-sm backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    whileHover={{ scale: 0.1, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
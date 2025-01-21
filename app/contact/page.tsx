'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="w-full max-w-2xl mx-auto">
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white text-center sm:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>

          <form className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="name" className="block text-sm font-medium mb-1.5 sm:mb-2 text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                placeholder="Your name"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-1.5 sm:mb-2 text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                placeholder="your.email@example.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-1.5 sm:mb-2 text-gray-200">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                placeholder="Write your message here..."
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-600 active:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>

          <motion.div 
            className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white text-center">Connect with me</h2>
            <div className="flex justify-center space-x-8 sm:space-x-10">
              <motion.a 
                href="https://github.com/NISHAT-HERE" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/nishat-saifi-18b0a62b5/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/its_saifi._.nishat_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="mt-4 sm:mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">←</span>
              Back to Home
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
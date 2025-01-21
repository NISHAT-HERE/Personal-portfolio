'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Semi-transparent backdrop */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />
      
      {/* Main navbar content */}
      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.a 
              href="/" 
              className="text-2xl font-bold text-white relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                initial={false}
                animate={pathname === '/' ? { width: '100%' } : { width: '0%' }}
              />
            </motion.a>

            {/* Desktop Menu */}
            <motion.div 
              className="hidden md:flex space-x-20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.09 }}
            >
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`relative text-lg group ${
                    pathname === link.href ? 'text-blue-400' : 'text-white'
                  }`}
                  whileHover={{ y: -9 }}
                  whileTap={{ y: -0 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                    initial={false}
                    animate={pathname === link.href ? { width: '100%' } : { width: '0%' }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span 
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <motion.span 
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <motion.span 
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/20 backdrop-blur-lg"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/projects', label: 'Projects' },
                  { href: '/contact', label: 'Contact' }
                ].map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`text-center py-3 text-lg relative overflow-hidden ${
                      pathname === link.href ? 'text-blue-400' : 'text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300"
                      initial={false}
                      animate={pathname === link.href ? { scaleX: 1 } : { scaleX: 0 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 
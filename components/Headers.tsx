'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Headers = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let current = '#home';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) current = `#${section.id}`;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-[0.5] pb-[0.5]${isScrolled
        ? 'bg-[#0a0018]/70 backdrop-blur-xl shadow-[0_0_20px_rgba(124,58,237,0.15)] border-b border-white/5'
        : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-5 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <div className="relative w-16 h-16">
              {/* White ACM Logo with better visibility */}
              <div className="relative w-full h-full bg-white rounded-full p-2 shadow-lg">
                <Image
                  src="/ACM_LOGO.png"
                  alt="ACM RCOEM Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent tracking-wide">
                PRAJWALAN
              </h1>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Ignition of Ideas</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium transition-colors ${activeSection === item.href ? 'text-primary-400' : 'text-gray-300 hover:text-primary-400'
                  }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                  />
                )}
              </motion.button>
            ))}
            <motion.a
              href="https://unstop.com/hackathons/dsa-coding-challenge-shri-ramdeobaba-college-of-engineering-and-management-1562403"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-white font-semibold hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3 overflow-hidden"
            >
              <motion.div
                className="flex flex-col items-center space-y-4 bg-[#0d0020]/80 backdrop-blur-lg rounded-2xl py-5 border border-white/10 shadow-[0_0_25px_rgba(124,58,237,0.1)]"
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-lg font-medium ${activeSection === item.href ? 'text-primary-400' : 'text-gray-300 hover:text-primary-400'
                      }`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.a
                  href="https://unstop.com/hackathons/dsa-coding-challenge-shri-ramdeobaba-college-of-engineering-and-management-1562403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[80%] text-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-white font-semibold hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Register Now
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Headers;
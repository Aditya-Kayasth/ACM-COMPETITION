'use client';

import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, ExternalLink, Flame, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/acm_rbu',
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/acm-rbu-student-chapter/',
      color: 'hover:text-blue-400',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Register', href: 'https://unstop.com/hackathons/dsa-coding-challenge-shri-ramdeobaba-college-of-engineering-and-management-1562403' },
  ];

  return (
    <footer id="contact" className="relative bg-dark-850 border-t border-primary-500/20 overflow-hidden">
      {/* ✨ Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" style={{ backgroundSize: '50px 50px' }} />
        <div className="absolute inset-0 bg-radial-gradient" />
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#FFB300]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#9B30FF]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Flame className="w-10 h-10 text-accent-500" />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                  PRAJWALAN
                </h3>
                <p className="text-xs text-gray-400">Ignition of Ideas</p>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-4">
              An electrifying DSA & CP contest organized by ACM Student Chapter, RCOEM.
              Light up your coding journey this Diwali!
            </p>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-dark-800 rounded-lg text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            {/* Email Section */}
            <div className="flex items-center space-x-3 text-gray-400">
              <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
              <a 
                href="mailto:info@rbustudentchapter.acm.org" 
                className="text-sm hover:text-primary-400 transition-colors break-all"
              >
                info@rbustudentchapter.acm.org
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 ml-1" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:9579944504" className="hover:text-primary-400 transition-colors">
                    +91 9579944504
                  </a><br/>
                  <a href="tel:9067718254" className="hover:text-primary-400 transition-colors">
                    +91 9067718254
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-sm">
                    Shri Ramdeobaba College of<br />
                    Engineering and Management<br />
                    Nagpur, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 ACM Student Chapter, RCOEM. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Powered by</span>
              <a
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors font-semibold"
              >
                Unstop
              </a>
            </div>
          </div>

          {/* Tech Lead Credit */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">
              Crafted with 💜 by ACM Tech Team
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />
    </footer>
  );
};

export default Footer;
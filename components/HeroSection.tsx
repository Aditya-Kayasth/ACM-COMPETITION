'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Code2, Sparkles, Flame } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-6">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-850">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" style={{ backgroundSize: '50px 50px' }} />
        <div className="absolute inset-0 bg-radial-gradient" />
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 8 + 4;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const floatY = Math.random() * 40 + 10;
          const floatX = Math.random() * 20 - 10;
          const duration = Math.random() * 4 + 3;
          const delay = Math.random() * 2;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]"
              style={{ width: `${size}px`, height: `${size}px`, left: `${left}%`, top: `${top}%`, background: `hsl(${Math.random() * 20 + 25}, 90%, 55%)` }}
              animate={{ x: [0, floatX, -floatX, 0], y: [0, -floatY, 0], opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
              transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          );
        })}
      </div>

      <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo & Flame */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div className="inline-block mb-6" animate={{ scale: [1, 1.1, 1], rotate: [0, 4, -4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <Flame className="w-24 h-24 mx-auto text-accent-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
            </motion.div>

            <h2 className="text-lg md:text-xl text-gray-300 mb-4 tracking-wider font-light">
              ACM RBU Presents, Ignition of Ideas
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent-400 via-primary-500 to-accent-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_400%]">PRAJWALAN</span>
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Gear up for an <span className="text-primary-400 font-semibold">electrifying coding battle</span>. This Diwali, light up the leaderboard!
          </motion.p>

          {/* Info Cards */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: Code2, label: 'Category', value: 'DSA & CP', color: 'text-primary-400' },
              { icon: Calendar, label: 'Date', value: '12th October, 2025', color: 'text-accent-400' },
              { icon: Clock, label: 'Time', value: '8:00 PM - 10:00 PM', color: 'text-primary-400' },
            ].map((card, i) => (
              <div key={i} className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/30 rounded-2xl px-6 py-4 flex items-center space-x-3 hover:border-primary-500/60 transition-all">
                <card.icon className={`w-6 h-6 ${card.color}`} />
                <div className="text-left">
                  <p className="text-xs text-gray-400">{card.label}</p>
                  <p className="text-white font-semibold">{card.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://unstop.com/hackathons/dsa-coding-challenge-shri-ramdeobaba-college-of-engineering-and-management-1562403"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-white font-bold text-lg shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/70 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5" /> <span>Register Now</span>
            </motion.a>

            <motion.a
              href="#about"
              className="px-8 py-4 border-2 border-primary-500 rounded-full text-white font-bold text-lg hover:bg-primary-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

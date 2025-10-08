'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Medal, Trophy, Sparkles } from 'lucide-react';

const PrizesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const prizes = [
    {
      position: '1st',
      title: 'First Place',
      icon: Trophy,
      gradient: 'from-yellow-400 via-yellow-500 to-orange-500',
      borderGradient: 'from-yellow-400 to-orange-500',
      shadowColor: 'shadow-yellow-500/50',
      description: 'Gold Certificate of Excellence',
    },
    {
      position: '2nd',
      title: 'Second Place',
      icon: Medal,
      gradient: 'from-gray-300 via-gray-400 to-gray-500',
      borderGradient: 'from-gray-300 to-gray-500',
      shadowColor: 'shadow-gray-400/50',
      description: 'Silver Certificate of Achievement',
    },
    {
      position: '3rd',
      title: 'Third Place',
      icon: Award,
      gradient: 'from-orange-400 via-orange-500 to-orange-600',
      borderGradient: 'from-orange-400 to-orange-600',
      shadowColor: 'shadow-orange-500/50',
      description: 'Bronze Certificate of Merit',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="prizes" className="relative py-24 bg-dark-850 text-white overflow-hidden">
      {/* ✨ Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-grid-pattern opacity-40"
          style={{ backgroundSize: '50px 50px' }}
        />
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

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 container mx-auto px-6"
      >
        {/* 🌟 Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="w-16 h-16 mx-auto text-yellow-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Earn Prestigious Certificates
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcase your coding brilliance and receive{' '}
            <span className="text-yellow-400 font-bold">official certificates</span> from ACM for your
            outstanding performance!
          </p>
        </motion.div>

        {/* 🏅 Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div
                className={`p-[2px] rounded-3xl shadow-xl ${prize.shadowColor} bg-gradient-to-br ${prize.borderGradient} transition-all duration-300`}
              >
                <div className="bg-[#1A0035] rounded-3xl p-8 h-full backdrop-blur-md border border-gray-800/50 flex flex-col items-center text-center">
                  <motion.div
                    className="mb-6"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div
                      className={`inline-block p-4 bg-gradient-to-br ${prize.gradient} rounded-2xl shadow-lg`}
                    >
                      <prize.icon className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>

                  <div
                    className={`inline-block px-4 py-1 bg-gradient-to-r ${prize.gradient} rounded-full text-white font-bold text-sm mb-4`}
                  >
                    {prize.position} Place
                  </div>

                  <h3
                    className={`text-2xl md:text-3xl font-extrabold mb-2 bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}
                  >
                    {prize.description}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    Recognized by ACM Student Chapter
                  </p>
                </div>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity duration-300 -z-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* 🏆 Extra Info Box */}
        <motion.div variants={itemVariants} className="mt-20 text-center">
          <div className="bg-[#1A0035]/70 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">🏆 Recognition & Appreciation</h3>
            <p className="text-gray-300 leading-relaxed">
              Winners will be awarded digital and printed certificates of excellence. Top performers will
              also be featured on our social media handles and ACM platforms. Celebrate your achievement
              and make this Diwali memorable with your coding skills!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PrizesSection;

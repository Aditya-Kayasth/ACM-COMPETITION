'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Trophy, Users, Zap, Brain, Target } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Brain,
      title: 'Mind-Bending Challenges',
      description: 'Tackle intense DSA & CP problems that will push your algorithmic thinking to new heights',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Real-time Competition',
      description: 'Experience the thrill of live coding with a dynamic leaderboard tracking your progress',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Trophy,
      title: 'Exciting Prizes',
      description: 'Compete for prize money totaling ₹12,000 and showcase your coding prowess',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Open to All',
      description: 'Whether beginner or expert, everyone is welcome to participate and learn',
      color: 'from-blue-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20 bg-dark-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" style={{ backgroundSize: '40px 40px' }} />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
              About PRAJWALAN
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            This Diwali, celebrate the festival of lights with a spectacular display of coding brilliance. 
            PRAJWALAN brings together passionate coders for an electrifying contest that tests your 
            problem-solving skills and algorithmic prowess.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-dark-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className={`inline-block p-3 bg-gradient-to-br ${feature.color} rounded-xl mb-4 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Highlights */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 border border-primary-500/30 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent mb-2">
                2 Hours
              </div>
              <p className="text-gray-300">Intense Competition</p>
            </div>
            
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent mb-2">
                ₹12,000
              </div>
              <p className="text-gray-300">Total Prize Pool</p>
            </div>
            
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent mb-2">
                Online
              </div>
              <p className="text-gray-300">Via Unstop Platform</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-gray-300 text-lg mb-6">
            Ready to ignite your coding journey? Join us this Diwali!
          </p>
          <motion.a
            href="https://unstop.com/hackathons/dsa-coding-challenge-shri-ramdeobaba-college-of-engineering-and-management-1562403"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-white font-bold text-lg shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/70 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register for Free
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
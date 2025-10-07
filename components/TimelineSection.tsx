'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, UserPlus, Code, Trophy, CheckCircle } from 'lucide-react';

const TimelineSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      icon: UserPlus,
      title: 'Registration Opens',
      description: 'Sign up on Unstop platform and secure your spot',
      time: 'Now Open',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Contest Day',
      description: 'Mark your calendars for the coding showdown',
      time: '12th October, 2025',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Contest Starts',
      description: 'Battle begins! Tackle DSA & CP challenges',
      time: '8:00 PM IST',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Code,
      title: 'Coding Sprint',
      description: 'Two hours of intense problem-solving',
      time: '8:00 PM - 10:00 PM',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: CheckCircle,
      title: 'Contest Ends',
      description: 'Submit your solutions and await results',
      time: '10:00 PM IST',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Trophy,
      title: 'Results Announcement',
      description: 'Winners revealed and prizes distributed',
      time: 'Shortly After',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="timeline" className="relative py-20 bg-dark-800 overflow-hidden">
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
              Event Timeline
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your journey from registration to victory
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-start gap-6">
                {/* Timeline Line & Icon */}
                <div className="relative flex flex-col items-center">
                  <motion.div
                    className={`p-4 bg-gradient-to-br ${event.color} rounded-2xl shadow-lg z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <event.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {index !== timelineEvents.length - 1 && (
                    <motion.div
                      className="w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 mt-2"
                      initial={{ height: 0 }}
                      animate={inView ? { height: '100%' } : { height: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                    />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-dark-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 hover:border-primary-500/50 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {event.title}
                    </h3>
                    <span className={`inline-block mt-2 md:mt-0 px-4 py-1 bg-gradient-to-r ${event.color} rounded-full text-white text-sm font-semibold`}>
                      {event.time}
                    </span>
                  </div>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Note */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-primary-600/10 to-accent-600/10 border border-primary-500/30 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">📌</span>
            Important Information
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-accent-400 mr-2">•</span>
              <span>Make sure to register on Unstop before the contest begins</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-400 mr-2">•</span>
              <span>Ensure you have a stable internet connection during the contest</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-400 mr-2">•</span>
              <span>Contest will be conducted online via Unstop platform</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-400 mr-2">•</span>
              <span>Results will be announced shortly after the contest ends</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TimelineSection;
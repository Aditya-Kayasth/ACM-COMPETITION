'use client';

import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Flame className="w-20 h-20 text-accent-500 mx-auto mb-4" />
        </motion.div>
        
        <motion.h2
          className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          Loading PRAJWALAN...
        </motion.h2>
        
        <div className="mt-6 flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-primary-500 rounded-full"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
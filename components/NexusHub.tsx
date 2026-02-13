
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILES } from '../constants';
import { ProfessionalRole, Profile } from '../types';
import { ChevronLeft, ChevronRight, User, Eye } from 'lucide-react';

interface NexusHubProps {
  onSelect: (profile: Profile) => void;
}

export const NexusHub: React.FC<NexusHubProps> = ({ onSelect }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % PROFILES.length);
  const prev = () => setIndex((prev) => (prev - 1 + PROFILES.length) % PROFILES.length);

  const currentProfile = PROFILES[index];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden py-12 px-4">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="z-10 text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-2 font-medium"
        >
          Morningstar Nexus
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
        >
          Select Expertise
        </motion.h1>
      </div>

      <div className="relative w-full max-w-4xl h-[450px] perspective-1000 flex items-center justify-center">
        {/* Navigation Controls */}
        <button 
          onClick={prev}
          className="absolute left-0 md:-left-20 z-20 p-4 rounded-full glass hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={next}
          className="absolute right-0 md:-right-20 z-20 p-4 rounded-full glass hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* 3D Card Stage */}
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProfile.id}
              initial={{ rotateY: 45, opacity: 0, scale: 0.8, x: 100 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1, x: 0 }}
              exit={{ rotateY: -45, opacity: 0, scale: 0.8, x: -100 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="w-[300px] md:w-[400px] h-full"
            >
              <div 
                className="w-full h-full glass rounded-3xl p-8 flex flex-col items-center justify-between text-center relative overflow-hidden group cursor-pointer"
                onClick={() => onSelect(currentProfile)}
              >
                {/* Visual Highlight */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${currentProfile.color} opacity-20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700`} />
                
                <div className="relative z-10 w-full">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${currentProfile.color} flex items-center justify-center shadow-lg shadow-black/50 group-hover:rotate-12 transition-transform duration-500`}>
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 font-heading">{currentProfile.role}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed px-4">
                    {currentProfile.tagline}
                  </p>
                </div>

                <div className="w-full relative z-10 mt-6 pt-6 border-t border-white/5 space-y-4">
                  <div className="flex justify-around text-xs uppercase tracking-widest text-gray-500">
                    {currentProfile.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-white font-bold text-lg mb-1">{stat.value}</div>
                        <div>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <button 
                    className={`w-full py-4 rounded-xl bg-gradient-to-r ${currentProfile.color} text-white font-bold flex items-center justify-center gap-2 group-hover:translate-y-[-4px] transition-transform`}
                  >
                    <Eye className="w-5 h-5" />
                    Enter Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Profile Dots */}
      <div className="flex gap-3 mt-12">
        {PROFILES.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-white' : 'bg-gray-700 hover:bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

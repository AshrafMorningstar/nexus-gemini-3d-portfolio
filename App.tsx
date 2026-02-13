
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NexusHub } from './components/NexusHub';
import { RoleDetail } from './components/RoleDetail';
import { Profile } from './types';

const App: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] rounded-full" />
        <div className="absolute top-[30%] left-[60%] w-[30%] h-[30%] bg-emerald-900/5 blur-[120px] rounded-full" />
      </div>

      <AnimatePresence mode="wait">
        {!selectedProfile ? (
          <motion.main
            key="hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            className="w-full h-screen flex flex-col items-center justify-center relative z-10"
          >
            <NexusHub onSelect={setSelectedProfile} />
          </motion.main>
        ) : (
          <RoleDetail 
            key="detail" 
            profile={selectedProfile} 
            onBack={() => setSelectedProfile(null)} 
          />
        )}
      </AnimatePresence>

      {/* Persistent Brand Marker */}
      <div className="fixed bottom-8 left-8 z-50 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
            Nexus System Active
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;

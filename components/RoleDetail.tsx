
import React from 'react';
import { motion } from 'framer-motion';
import { Profile } from '../types';
import { ArrowLeft, Mail, Github, Linkedin, ExternalLink, Activity, Code, Target, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface RoleDetailProps {
  profile: Profile;
  onBack: () => void;
}

const RoleIcon = ({ role }: { role: string }) => {
  switch (role) {
    case 'Web Designer': return <Code className="w-6 h-6" />;
    case 'Data Analyst': return <Activity className="w-6 h-6" />;
    case 'Marketing Planner': return <Target className="w-6 h-6" />;
    case 'Sales Analyst': return <TrendingUp className="w-6 h-6" />;
    default: return null;
  }
};

export const RoleDetail: React.FC<RoleDetailProps> = ({ profile, onBack }) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#030712] overflow-y-auto"
    >
      {/* Dynamic Background Blob */}
      <div 
        className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl ${profile.color} opacity-[0.05] blur-[140px] rounded-full pointer-events-none`} 
      />

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 glass px-6 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Nexus</span>
        </button>
        <div className="flex items-center gap-4 text-gray-400">
          <Github className="w-5 h-5 cursor-pointer hover:text-white" />
          <Linkedin className="w-5 h-5 cursor-pointer hover:text-white" />
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Left Column: Intro & Info */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div variants={item}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${profile.color} text-white`}>
                  <RoleIcon role={profile.role} />
                </div>
                <span className="text-sm tracking-widest uppercase text-gray-400 font-semibold">{profile.role}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                {profile.name.split(' ')[0]} <span className="text-gray-500 font-light">{profile.name.split(' ')[1]}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
                {profile.tagline}
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-widest text-gray-500">About the Profile</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {profile.bio}
              </p>
            </motion.div>

            <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {profile.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-3xl font-bold font-heading">{stat.value}</div>
                  <div className="text-xs uppercase tracking-tighter text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={item} className="space-y-6 pt-12">
              <h3 className="text-lg font-semibold uppercase tracking-widest text-gray-500">Selected Work</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profile.projects.map((proj, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-2xl glass">
                    <img 
                      src={proj.imageUrl} 
                      alt={proj.title} 
                      className="w-full h-48 object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                        {proj.title} <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-2">{proj.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills & Visuals */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div variants={item} className="glass rounded-3xl p-8 sticky top-32">
              <h3 className="text-lg font-semibold uppercase tracking-widest text-gray-500 mb-8">Technical Expertise</h3>
              
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={profile.skills} layout="vertical">
                    <XAxis type="number" hide domain={[0, 100]} />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={100} 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 500 }} 
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }}
                    />
                    <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={14}>
                      {profile.skills.map((_, index) => (
                        <Cell key={index} fill={profile.accentColor} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-12 space-y-8">
                <div className="space-y-4">
                   <h4 className="text-sm font-bold uppercase text-gray-400">Collaborate</h4>
                   <p className="text-sm text-gray-500">Currently accepting new projects and remote opportunities.</p>
                   <button className={`w-full py-4 rounded-xl bg-gradient-to-r ${profile.color} text-white font-bold flex items-center justify-center gap-2`}>
                      <Mail className="w-5 h-5" />
                      Contact Ashraf
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer Space */}
      <footer className="py-20 text-center border-t border-white/5 mt-20">
         <p className="text-gray-600 text-sm tracking-widest uppercase">© 2024 Nexus Portfolio Series — Crafted by Morningstar</p>
      </footer>
    </motion.div>
  );
};

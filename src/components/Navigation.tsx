import React from 'react';
import { motion } from 'motion/react';
import { Leaf, BookHeart, Wind, History } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'learn', name: '正念學習', icon: Leaf },
    { id: 'journal', name: '感恩日記', icon: BookHeart },
    { id: 'breath', name: '呼吸練習', icon: Wind },
    { id: 'history', name: '回顧', icon: History },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="card-blur px-8 py-4 rounded-full flex gap-10 items-center shadow-2xl shadow-orange-900/10 transition-all duration-500 hover:bg-white/80">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center gap-1.5 group transition-colors duration-300 ${
                isActive ? 'text-accent-warm' : 'text-earth-dark/40 hover:text-earth-dark'
              }`}
            >
              <Icon size={18} className={isActive ? 'animate-pulse' : ''} />
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase">
                {tab.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 w-1 h-1 rounded-full bg-accent-warm"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

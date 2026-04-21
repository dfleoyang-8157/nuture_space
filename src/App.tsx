import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import MindfulnessIntro from './components/MindfulnessIntro';
import GratitudeJournal from './components/GratitudeJournal';
import BreathingExercise from './components/BreathingExercise';
import { Sparkle, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('learn');

  return (
    <div className="min-h-screen pb-32 overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5EFE6] opacity-50" />
      </div>

      <header className="pt-16 pb-8 px-6 text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 bg-accent-warm rounded-full flex items-center justify-center text-white font-serif font-bold text-2xl shadow-xl shadow-orange-900/10">
            息
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent-warm font-bold tracking-[0.3em] uppercase text-sm mb-4"
        >
          Mindful Moment / 內在平靜
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bold-title mb-8"
        >
          呼吸，是靈魂的<br/><span className="text-accent-warm">絮語。</span>
        </motion.h1>
      </header>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === 'learn' && (
            <motion.section
              key="learn"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <MindfulnessIntro />
            </motion.section>
          )}

          {activeTab === 'journal' && (
            <motion.section
              key="journal"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <GratitudeJournal />
            </motion.section>
          )}

          {activeTab === 'breath' && (
            <motion.section
              key="breath"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <BreathingExercise />
            </motion.section>
          )}
          
          {activeTab === 'history' && (
            <motion.section
              key="history"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto px-6 py-20 text-center"
            >
              <div className="card-blur p-16 rounded-[60px] relative overflow-hidden shadow-2xl shadow-orange-900/5">
                <Sparkle className="absolute top-10 right-10 text-accent-warm/20" size={48} />
                <h2 className="serif text-4xl mb-6 font-bold">回顧你的平靜旅程</h2>
                <p className="text-earth-dark/60 leading-relaxed mb-10 max-w-md mx-auto">
                  即將推出：根據你的心情趨勢，為你打造個人化的正念回顧報告。<br/>
                  現在就去「感恩日記」寫下幾則紀錄吧！
                </p>
                <button
                  onClick={() => setActiveTab('journal')}
                  className="px-8 py-3 bg-accent-warm text-white rounded-full font-medium shadow-lg shadow-orange-900/20 hover:opacity-90 transition-all"
                >
                  前往日記
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <footer className="mt-20 flex justify-between items-end border-t border-soft-border/30 px-12 pb-12 pt-8">
        <div className="text-[10px] tracking-[0.2em] opacity-40 uppercase font-medium">Inner Peace Protocol v2.0</div>
        <div className="flex space-x-12">
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Location</p>
            <p className="text-sm font-medium">Taipei, Heart Space</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Mode</p>
            <p className="text-sm font-medium tracking-wide">Mindfulness</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

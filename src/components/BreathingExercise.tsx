import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Volume2, VolumeX } from 'lucide-react';

export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'吸氣' | '閉氣' | '呼氣'>('吸氣');
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    let timer: number;
    if (isActive) {
      const cycle = () => {
        setPhase('吸氣');
        timer = window.setTimeout(() => {
          setPhase('閉氣');
          timer = window.setTimeout(() => {
            setPhase('呼氣');
            timer = window.setTimeout(cycle, 4000);
          }, 4000);
        }, 4000);
      };
      cycle();
    }
    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <span className="text-accent-warm font-bold tracking-[0.3em] uppercase text-sm mb-2 block tracking-widest">Breathing / 呼吸法</span>
        <h2 className="serif text-5xl mb-4 font-bold">4-4-4 呼吸</h2>
        <p className="text-earth-dark/60 font-serif italic text-lg">簡單的呼吸，能帶領你回到此時此刻。</p>
      </motion.div>

      <div className="relative flex items-center justify-center w-80 h-80">
        {/* Decorative background orbits */}
        <div className="absolute w-full h-full border-2 border-accent-warm/5 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-4/5 h-4/5 border-2 border-accent-warm/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="active"
              className="relative flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{
                  scale: phase === '吸氣' ? 1.5 : phase === '閉氣' ? 1.5 : 1,
                }}
                transition={{ duration: 4, ease: "easeInOut" }}
                className="w-44 h-44 bg-accent-warm/10 organic-shape-1 backdrop-blur-sm flex items-center justify-center border border-accent-warm/20 shadow-2xl"
              >
                <div className="w-14 h-14 bg-white/50 organic-shape-2 shadow-inner" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={phase}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none"
              >
                <span className="serif text-3xl font-bold text-accent-warm italic">{phase}</span>
                <span className="text-[10px] text-earth-dark/40 mt-1 uppercase tracking-[0.2em] font-bold">Hold Presence</span>
              </motion.div>
            </motion.div>
          ) : (
            <motion.button
              key="inactive"
              onClick={() => setIsActive(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-44 h-44 bg-white/80 shadow-2xl rounded-full flex flex-col items-center justify-center gap-3 group transition-all duration-500 hover:shadow-orange-900/10 active:shadow-inner border border-soft-border/30"
            >
              <Wind className="text-accent-warm group-hover:rotate-12 transition-transform duration-700" size={32} />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">開始練習</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-16 flex gap-10">
        <button
          onClick={() => setIsActive(!isActive)}
          className="text-[10px] font-bold uppercase tracking-widest text-earth-dark/40 hover:text-accent-warm transition-colors underline underline-offset-8"
        >
          {isActive ? '停止紀錄' : '提示：點擊中心啟動'}
        </button>
        
        <button
          onClick={() => setMuted(!muted)}
          className="text-earth-dark/40 hover:text-accent-warm transition-colors"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 max-w-sm text-center text-sm text-earth-dark/40 italic leading-relaxed"
      >
        「吸入平靜，呼出壓力。感受氣流流經鼻尖、肺部、再到全身。」
      </motion.div>
    </div>
  );
}

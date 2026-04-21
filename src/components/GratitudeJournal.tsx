import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Heart, Quote, Sparkles } from 'lucide-react';
import { JournalEntry } from '../types';

export default function GratitudeJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [mood, setMood] = useState('平静');

  useEffect(() => {
    const saved = localStorage.getItem('mindful_journal');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.trim()) return;

    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      content: newEntry,
      mood,
    };

    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem('mindful_journal', JSON.stringify(updated));
    setNewEntry('');
  };

  const moods = ['平静', '喜悅', '放鬆', '思考', '充滿力量'];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="card-blur p-10 md:p-14 rounded-[50px] shadow-2xl shadow-orange-900/5 mb-16 relative overflow-hidden"
      >
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-accent-warm/5 organic-shape-2 -rotate-12" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8 text-accent-warm">
            <Heart size={28} fill="currentColor" opacity={0.2} />
            <h2 className="serif text-4xl font-bold tracking-tight">感恩日記</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <Quote className="absolute top-6 left-6 text-accent-warm/10" size={56} />
              <textarea
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                placeholder="深呼吸，寫下今天讓你感到溫暖的事..."
                className="w-full h-48 p-12 bg-[#F5F2ED]/50 rounded-[40px] border-none focus:ring-2 focus:ring-accent-warm/20 transition-all font-serif text-xl leading-relaxed placeholder:text-earth-dark/30 text-earth-dark resize-none"
              />
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-8 pt-4">
              <div className="flex items-center gap-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth-dark/40">此時此刻的心情</span>
                <div className="flex gap-2.5">
                  {moods.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMood(m)}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 tracking-wider ${
                        mood === m 
                          ? 'bg-accent-warm text-white shadow-lg shadow-orange-900/10' 
                          : 'bg-white/50 text-earth-dark/40 hover:bg-accent-warm/10'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                type="submit"
                className="flex items-center gap-3 px-10 py-5 bg-accent-warm text-white rounded-full font-bold shadow-xl shadow-orange-900/20 hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 disabled:scale-100 tracking-widest uppercase text-sm"
                disabled={!newEntry.trim()}
              >
                <Send size={20} />
                <span>保存今日心情</span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      <div className="space-y-10">
        <h3 className="serif text-3xl text-earth-dark mb-10 flex items-center gap-4 font-bold">
          <Sparkles size={24} className="text-accent-warm" />
          溫暖回憶錄
        </h3>
        
        <AnimatePresence mode="popLayout">
          {entries.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-earth-dark/20 italic font-serif text-lg"
            >
              目前的歲月靜好，正等待你來揮灑首篇感恩。
            </motion.div>
          ) : (
            entries.map((entry) => (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="card-blur p-10 rounded-[40px] border border-soft-border/20 flex flex-col md:flex-row gap-8 items-start shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="min-w-[140px] flex flex-col gap-3">
                  <span className="serif text-2xl italic font-bold accent-warm tracking-tighter text-accent-warm">Archive.</span>
                  <span className="text-[10px] font-bold text-earth-dark/40 uppercase tracking-[0.2em]">{entry.date}</span>
                  <span className="w-fit text-[10px] px-3 py-1 bg-accent-warm/10 text-accent-warm rounded-full font-bold uppercase tracking-widest">
                    {entry.mood}
                  </span>
                </div>
                <p className="text-earth-dark/80 font-serif text-xl leading-relaxed flex-1 italic">
                  {entry.content}
                </p>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

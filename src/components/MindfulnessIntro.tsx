import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';
import { MindfulnessLesson } from '../types';

const lessons: MindfulnessLesson[] = [
  {
    id: '1',
    title: '入門：什麼是正念？',
    description: '學習如何不帶評判地覺察當下。',
    duration: '5 分鐘',
    category: '生活',
    content: '正念並非要抹除想法，而是觀察它們的流動...'
  },
  {
    id: '2',
    title: '呼吸法的奧秘',
    description: '透過簡單的呼吸練習，找回內心的穩定。',
    duration: '3 分鐘',
    category: '呼吸',
    content: '深吸一口氣，感受空氣充盈肺部的溫度...'
  },
  {
    id: '3',
    title: '身心掃描',
    description: '放鬆全身肌肉，覺察身體的每一處信號。',
    duration: '10 分鐘',
    category: '靜坐',
    content: '從腳趾開始，慢慢感受放鬆的力量向上蔓延...'
  },
  {
    id: '4',
    title: '與情緒共處',
    description: '學會接納自己的焦慮與不安。',
    duration: '7 分鐘',
    category: '情緒',
    content: '情緒就像雲朵，會來也會去，我們是遼闊的天空...'
  }
];

export default function MindfulnessIntro() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-accent-warm font-bold tracking-[0.3em] uppercase text-sm mb-2 block">Mindfulness Learning / 課題</span>
        <h2 className="serif text-5xl mb-6 font-bold text-earth-dark">探索你的內在平靜</h2>
        <p className="text-earth-dark/60 max-w-xl mx-auto leading-relaxed font-serif italic text-lg">
          正念是一場溫柔的回歸。不論身處何地，此刻即是永恆的駐點。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="card-blur p-10 rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-orange-900/5 transition-all duration-700 relative overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-warm/5 organic-shape-1 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <span className="px-4 py-1.5 bg-accent-warm/10 text-accent-warm text-[10px] rounded-full font-bold tracking-widest uppercase">
                    {lesson.category}
                  </span>
                  <span className="text-[10px] text-earth-dark/40 font-bold uppercase tracking-widest">{lesson.duration}</span>
                </div>
                
                <h3 className="serif text-3xl mb-4 text-earth-dark group-hover:text-accent-warm transition-colors font-bold leading-tight">
                  {lesson.title}
                </h3>
                <p className="text-earth-dark/60 text-sm mb-10 leading-loose flex-grow">
                  {lesson.description}
                </p>
                
                <div className="flex items-center gap-3 text-accent-warm font-bold text-sm tracking-widest uppercase">
                  <PlayCircle size={20} />
                  <span>開始探索</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

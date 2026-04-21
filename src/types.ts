export interface JournalEntry {
  id: string;
  date: string;
  content: string;
  mood: string;
}

export interface MindfulnessLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: '呼吸' | '靜坐' | '生活' | '情緒';
  content: string;
}

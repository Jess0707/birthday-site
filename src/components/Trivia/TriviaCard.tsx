import { motion } from 'framer-motion';
import { useId, useMemo, useState } from 'react';

interface TriviaItem {
  question: string;
  options: string[];
  correct: string;
}

export default function TriviaCard({ item, index }: { item: TriviaItem, index: number }) {
  const groupId = useId();
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);

  const outcome = useMemo(() => {
    if (!selected) return null;
    return selected === item.correct ? 'correct' : 'wrong';
  }, [selected, item.correct]);

  const message = useMemo(() => {
    if (!outcome) return null;
    if (outcome === 'correct') {
      return ['Correct 💓', 'Yesss, you know us 😌', 'Exactlyyy ✨'][index % 3];
    }
    return ['Oops 😅 try again', 'Awww close 😂', 'Nope babe 🤭'][index % 3];
  }, [outcome, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white p-8 rounded-2xl shadow-lg border border-rose-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:w-32 group-hover:h-32 group-hover:bg-rose-100" />
      
      <div className="relative z-10">
        <span className="text-rose-400 font-vibes text-2xl mb-2 block">Question {index + 1}</span>
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 font-sans mb-4 min-h-[3rem]">
          {item.question}
        </h3>
        
        <div className="h-px w-12 bg-rose-200 mb-4 transition-all duration-500 group-hover:w-full" />

        <div className="space-y-3">
          {item.options.map((opt) => {
            const isSelected = selected === opt;
            const isCorrectSelection = locked && opt === item.correct;
            const isWrongSelection = locked && isSelected && opt !== item.correct;

            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  if (locked) return;
                  setSelected(opt);
                  setLocked(true);
                }}
                className={[
                  'w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300',
                  'hover:shadow-md',
                  locked ? 'cursor-default' : 'cursor-pointer',
                  isSelected ? 'border-rose-300 bg-rose-50' : 'border-rose-100 bg-white',
                  isCorrectSelection ? 'border-emerald-300 bg-emerald-50' : '',
                  isWrongSelection ? 'border-rose-300 bg-rose-50' : '',
                ].join(' ')}
              >
                <span
                  className={[
                    'h-5 w-5 rounded-md border flex items-center justify-center shrink-0 transition-all',
                    isSelected ? 'border-rose-400 bg-rose-100' : 'border-slate-300 bg-white',
                    isCorrectSelection ? 'border-emerald-500 bg-emerald-100' : '',
                    isWrongSelection ? 'border-rose-500 bg-rose-100' : '',
                  ].join(' ')}
                  aria-hidden="true"
                >
                  {(isSelected || isCorrectSelection) && (
                    <span
                      className={[
                        'h-2.5 w-2.5 rounded-sm',
                        isCorrectSelection ? 'bg-emerald-600' : 'bg-rose-500',
                      ].join(' ')}
                    />
                  )}
                </span>

                <span className="font-sans text-slate-700 font-semibold">{opt}</span>
                <input
                  type="checkbox"
                  name={groupId}
                  checked={isSelected}
                  readOnly
                  className="sr-only"
                />
              </button>
            );
          })}
        </div>

        {locked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5"
          >
            <div
              className={[
                'inline-flex items-center gap-2 rounded-full px-4 py-2 border',
                outcome === 'correct'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  : 'bg-rose-50 border-rose-200 text-rose-700',
              ].join(' ')}
            >
              <span className="font-sans font-bold">{message}</span>
              {outcome === 'wrong' && (
                <span className="font-sans text-sm opacity-80">
                  (Correct: <span className="font-vibes text-lg">{item.correct}</span>)
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                setSelected(null);
                setLocked(false);
              }}
              className="ml-3 mt-3 md:mt-0 inline-flex items-center justify-center rounded-full border border-rose-200 bg-white px-4 py-2 font-sans text-sm font-semibold text-slate-700 hover:bg-rose-50 transition-colors"
            >
              Try another
            </button>
          </motion.div>
        )}
      </div>
      
      <motion.div 
        className="absolute bottom-4 right-4 text-rose-100 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 15 }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}

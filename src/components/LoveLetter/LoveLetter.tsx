import LetterReveal from './LetterReveal';
import SectionHeading from '../Shared/SectionHeading';
import Envelope from './Envelope';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen py-32 px-4 bg-white flex flex-col items-center z-10 overflow-hidden">
      <SectionHeading title="A Letter From Me To You" subtitle="Tap the envelope to read" />
      
      <div className="max-w-4xl w-full mt-20 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
              className="w-full flex justify-center"
            >
              <Envelope isOpen={isOpen} onClick={() => setIsOpen(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative z-10 bg-rose-50/50 p-8 md:p-16 rounded-[3rem] shadow-2xl border border-rose-100 w-full"
            >
              <div className="absolute -top-6 -left-6 text-rose-200 opacity-50">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <LetterReveal />
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                onClick={() => setIsOpen(false)}
                className="mt-12 text-rose-400 font-sans text-sm uppercase tracking-widest hover:text-rose-600 transition-colors"
              >
                ← Back to Envelope
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
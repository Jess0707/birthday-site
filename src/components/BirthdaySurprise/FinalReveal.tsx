import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function FinalReveal() {
  useEffect(() => {
    const duration = 5000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f43f5e', '#fb7185', '#ffe4e6']
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f43f5e', '#fb7185', '#ffe4e6']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="text-center z-10 px-4"
    >
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="font-vibes text-7xl md:text-9xl text-rose-500 mb-8 drop-shadow-2xl"
      >
        Happy Birthday, Naomi!
      </motion.h2>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="font-sans text-2xl md:text-3xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-light"
      >
        I love you till eternity and I can't wait to go all out and celebrate you when we finally get married 🌚
        <br/><br/>
        <span className="font-vibes text-5xl text-rose-600 font-bold">Keep being Naomi. ❤️</span>
      </motion.p>
    </motion.div>
  );
}
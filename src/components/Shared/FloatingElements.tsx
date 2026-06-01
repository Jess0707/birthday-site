import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function FloatingElements() {
  const elements = Array.from({ length: 15 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose-200/40"
          initial={{
            y: '100vh',
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: '-10vh',
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10,
          }}
        >
          <Heart size={32} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Countdown({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [count, onComplete]);

  return (
    <motion.div
      key={count}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 2 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="text-[12rem] font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-rose-600 drop-shadow-2xl"
    >
      {count}
    </motion.div>
  );
}
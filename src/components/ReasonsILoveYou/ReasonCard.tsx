import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ReasonCard({ reason, index }: { reason: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = reason.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white p-8 rounded-3xl cursor-pointer hover:shadow-2xl transition-shadow border border-rose-100 flex flex-col items-center justify-center text-center min-h-[220px] relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }} 
        whileTap={{ scale: 0.9 }}
        className="relative z-10"
      >
        <Icon size={48} className="text-rose-400 mb-6 drop-shadow-sm" />
      </motion.div>
      
      <h3 className="font-sans text-2xl font-bold text-slate-800 relative z-10">{reason.title}</h3>
      
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="text-slate-600 font-sans text-base leading-relaxed relative z-10"
          >
            {reason.desc}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
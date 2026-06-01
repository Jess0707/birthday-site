import { motion } from 'framer-motion';

export default function Envelope({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) {
  return (
    <motion.div 
      onClick={onClick}
      className="relative w-full max-w-md aspect-[4/3] cursor-pointer group perspective-1000"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Back of Envelope */}
      <div className="absolute inset-0 bg-rose-100 rounded-lg shadow-xl" />
      
      {/* The Letter (peeking out) */}
      <motion.div 
        animate={{ y: isOpen ? -100 : 0 }}
        className="absolute inset-x-4 top-4 bottom-4 bg-white rounded shadow-sm p-6 flex flex-col gap-3"
      >
        <div className="w-3/4 h-2 bg-rose-50 rounded" />
        <div className="w-full h-2 bg-rose-50 rounded" />
        <div className="w-1/2 h-2 bg-rose-50 rounded" />
      </motion.div>

      {/* Front Flap (Top) */}
      <motion.div 
        initial={false}
        animate={{ rotateX: isOpen ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-x-0 top-0 h-1/2 bg-rose-200 origin-top shadow-md z-20"
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          backfaceVisibility: 'hidden'
        }}
      />

      {/* Front Body (Bottom & Sides) */}
      <div 
        className="absolute inset-0 bg-rose-100 z-10 shadow-inner"
        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 45%)' }}
      />

      {/* Heart Seal */}
      <motion.div 
        animate={{ scale: isOpen ? 0 : 1 }}
        className="absolute left-1/2 top-[45%] z-30 -translate-x-1/3 -translate-y-1/2 text-rose-500 drop-shadow-lg"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-[0_10px_25px_rgba(190,24,93,0.22)] ring-4 ring-rose-100">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

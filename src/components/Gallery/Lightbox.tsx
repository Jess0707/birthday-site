import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Lightbox({ selectedImg, setSelectedImg }: { selectedImg: string | null, setSelectedImg: (s: string | null) => void }) {
  return (
    <AnimatePresence>
      {selectedImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out backdrop-blur-sm"
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-rose-400 transition-colors bg-white/10 rounded-full p-2"
            onClick={() => setSelectedImg(null)}
          >
            <X size={24} />
          </button>
          <motion.img
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            src={selectedImg}
            alt="Enlarged memory"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=1200&auto=format&fit=crop';
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
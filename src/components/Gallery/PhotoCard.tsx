import { motion } from 'framer-motion';

export default function PhotoCard({ src, index, onClick }: { src: string, index: number, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: (index % 3) * 0.1,
        type: "spring",
        damping: 15,
        stiffness: 100
      }}
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group break-inside-avoid mb-6 bg-rose-100"
    >
      <div className="absolute inset-0 bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
      <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
        src={src} 
        alt="Gallery memory" 
        className="w-full h-auto object-cover block"
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=600&auto=format&fit=crop&sig=${index}`;
        }}
      />
    </motion.div>
  );
}
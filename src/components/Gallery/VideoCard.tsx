import { motion } from 'framer-motion';

export default function VideoCard({ src, index }: { src: string, index: number }) {
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
      className="relative rounded-2xl overflow-hidden aspect-video bg-black group cursor-pointer shadow-lg mb-6 break-inside-avoid"
    >
      <video 
        src={src} 
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
        muted 
        autoPlay 
        loop 
        playsInline
      />
      <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}

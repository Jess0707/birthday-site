import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="text-center z-10 relative px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-vibes text-5xl md:text-7xl text-rose-500 mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-slate-500 uppercase tracking-widest text-sm font-semibold"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useRef } from 'react';

type Frame = {
  src: string;
  caption?: string;
  rotate: number;
  className?: string;
};

const frames: Frame[] = [
  {
    src: '/images/pic 2 main image.jpeg',
    caption: 'love is in the air',
    rotate: -8,
    className: 'md:translate-x-[-220px] md:translate-y-[-40px]',
  },
  {
    src: '/images/pic 3 with partner.jpeg',
    caption: 'our story',
    rotate: 2,
    className: 'md:translate-y-[10px] z-10',
  },
  {
    src: '/images/with partner 3.jpeg',
    caption: 'my favorite person',
    rotate: 10,
    className: 'md:translate-x-[240px] md:translate-y-[-30px]',
  },
];

function PolaroidFrame({
  frame,
  y,
  delay,
}: {
  frame: Frame;
  y: MotionValue<string | number>;
  delay: number;
}) {
  return (
    <motion.div
      className={[
        'absolute bg-[#fbf6f0] shadow-[0_28px_50px_rgba(72,22,36,0.16)] ring-1 ring-black/5',
        'p-3 pb-12 w-[190px] sm:w-[220px] md:w-[260px] origin-center',
        frame.className ?? '',
      ].join(' ')}
      style={{ y }}
      initial={{ opacity: 0, y: 40, rotate: frame.rotate - 6, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, rotate: frame.rotate, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut', delay }}
      whileHover={{ y: -8, rotate: frame.rotate + 1.5, scale: 1.02 }}
    >
      <div className="overflow-hidden bg-black/10 aspect-[4/5]">
        <img
          src={frame.src}
          alt="Memory"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=1200&auto=format&fit=crop';
          }}
        />
      </div>
      {frame.caption && (
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="font-vibes text-xl sm:text-2xl text-[#6b1d2b]">{frame.caption}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function HeroBackground() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const leftY = useTransform(scrollYProgress, [0, 1], [0, 95]);
  const centerY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 110]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-[#f3ece5]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(137,35,66,0.08),transparent_28%),radial-gradient(circle_at_78%_22%,rgba(137,35,66,0.06),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.16),rgba(243,236,229,0.45))]" />

      <motion.div
        className="absolute left-[5%] top-[18%] hidden md:block text-[#8f3550]/30"
        animate={{ y: [0, -12, 0], rotate: [-8, -4, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Heart size={42} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute right-[8%] top-[28%] hidden md:block text-[#8f3550]/35"
        animate={{ y: [0, 10, 0], rotate: [10, 14, 10] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        <Heart size={28} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute left-[10%] bottom-[22%] text-[#8f3550]/22"
        animate={{ y: [0, 14, 0], rotate: [-18, -10, -18] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Heart size={54} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute right-[12%] bottom-[30%] text-[#8f3550]/26"
        animate={{ y: [0, -12, 0], rotate: [14, 8, 14] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <Heart size={38} fill="currentColor" />
      </motion.div>

      <div className="absolute inset-x-0 top-[14%] flex justify-center px-6">
        <div className="relative h-[38vh] w-full max-w-5xl sm:h-[42vh] md:h-[44vh]">
          <PolaroidFrame
            frame={{ ...frames[0], className: 'left-[2%] top-[12%] sm:left-[8%] sm:top-[8%]' }}
            y={leftY}
            delay={0.15}
          />
          <PolaroidFrame
            frame={{ ...frames[1], className: 'left-1/2 top-[2%] z-10 -translate-x-1/2 w-[180px] sm:w-[250px] md:w-[285px]' }}
            y={centerY}
            delay={0.3}
          />
          <PolaroidFrame
            frame={{ ...frames[2], className: 'right-[2%] top-[10%] sm:right-[8%] sm:top-[6%]' }}
            y={rightY}
            delay={0.45}
          />
        </div>
      </div>
    </div>
  );
}

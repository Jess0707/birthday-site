import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-20">
      <div className="mx-auto flex h-full max-w-7xl flex-col px-4 py-5 sm:px-6 sm:py-8 md:px-12 md:py-10 text-[#6b1d2b]">


        <div className="relative flex-1">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="absolute left-0 top-[22%] hidden max-w-[220px] lg:block"
          >
            <p className="font-sans text-lg leading-relaxed text-[#5d4451]">
              Every memory with you lingers in my heart long after the moment is gone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute right-0 top-[40%] hidden max-w-[250px] text-right lg:block"
          >
            <p className="font-sans text-lg leading-relaxed text-[#5d4451]">
              Crafted with love, softness, and all the little details that remind me of you.
            </p>
            <a
              href="#love-story"
              className="pointer-events-auto mt-6 inline-flex rounded-full bg-[#8f3550] px-7 py-3 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_24px_rgba(143,53,80,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#7b2943]"
            >
              Let&apos;s Celebrate
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35 }}
            className="absolute inset-x-0 top-0 text-center"
          >
            <p className="font-sans text-[11px] sm:text-base uppercase tracking-[0.22em] sm:tracking-[0.35em] text-[#6b1d2b]/80">
              A Cinematic Love Story
            </p>
          </motion.div>

          <div className="absolute inset-x-0 bottom-8 sm:bottom-10 md:bottom-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 1 }}
              className="relative"
            >
              <h1 className="font-sans text-[3.3rem] sm:text-[6.5rem] md:text-[6.8rem] leading-none tracking-[-0.07em] text-[#6b1d2b]">
                Naomi
              </h1>
              <p className="absolute right-[1%] top-[58%] text-right font-vibes text-[2.8rem] sm:right-[3%] sm:top-[34%] sm:text-[4.8rem] md:text-[5.6rem] lg:text-[6.5rem] leading-none text-[#8f3550]">
                My Love
              </p>
            </motion.div>

            <div className="mt-6 flex items-end justify-between gap-4 font-sans text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#6b1d2b]/80">
              <p className="max-w-[180px] leading-relaxed normal-case tracking-normal text-xs text-[#5d4451] sm:text-sm md:max-w-[260px] md:text-base">
                Happy birthday to the girl whose presence feels like answered prayer.
              </p>
              <a
                href="#love-story"
                className="pointer-events-auto inline-flex shrink-0 rounded-full bg-[#8f3550] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_20px_rgba(143,53,80,0.18)] transition-all duration-300 hover:scale-105 hover:bg-[#7b2943] lg:hidden"
              >
                Celebrate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

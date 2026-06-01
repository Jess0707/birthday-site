import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = {
  "src/components/Shared/CustomCursor.tsx": `
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-rose-400 rounded-full pointer-events-none z-[9999] mix-blend-multiply"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-rose-300 rounded-full pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x - 24, y: mousePosition.y - 24 }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
      />
    </div>
  );
}
`,
  "src/components/Shared/FloatingElements.tsx": `
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
`,
  "src/components/Shared/SectionHeading.tsx": `
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
`,
  "src/components/Shared/AnimatedText.tsx": `
import { motion } from 'framer-motion';

export default function AnimatedText({ text, className = "" }: { text: string, className?: string }) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      className={\`flex flex-wrap \${className}\`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
`,
  "src/components/Shared/ParallaxContainer.tsx": `
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxContainer({ children, offset = 50, className = "" }: { children: React.ReactNode, offset?: number, className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={\`overflow-hidden \${className}\`}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
`,
  "src/components/Hero/HeroBackground.tsx": `
import { motion } from 'framer-motion';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <motion.img
        src="/1.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=2000&auto=format&fit=crop';
        }}
      />
    </div>
  );
}
`,
  "src/components/Hero/HeroContent.tsx": `
import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-sans text-lg md:text-xl tracking-widest uppercase mb-4 font-light"
      >
        A Cinematic Love Story
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="font-vibes text-7xl md:text-9xl text-rose-100 drop-shadow-lg"
      >
        Happy Birthday, Naomi
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="mt-16"
      >
        <p className="font-sans text-sm tracking-widest animate-pulse font-bold">SCROLL TO BEGIN</p>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent mx-auto mt-4" />
      </motion.div>
    </div>
  );
}
`,
  "src/components/Hero/Hero.tsx": `
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
}
`,
  "src/components/LoveStory/StoryCard.tsx": `
import { motion } from 'framer-motion';

export default function StoryCard({ story, index }: { story: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring" }}
      className={\`relative flex flex-col md:flex-row items-center \${isEven ? 'md:flex-row-reverse' : ''}\`}
    >
      <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-white border-4 border-rose-400 rounded-full transform -translate-x-1/2 z-10 hidden md:block" />

      <div className={\`w-full md:w-1/2 p-6 \${isEven ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'}\`}>
        <span className="text-rose-400 font-vibes text-3xl">{story.year}</span>
        <h3 className="text-3xl font-bold text-slate-800 font-sans mt-2">{story.title}</h3>
        <p className="text-slate-600 mt-4 font-sans leading-relaxed text-lg">{story.desc}</p>
      </div>
      
      <div className={\`w-full md:w-1/2 p-6 \${isEven ? 'md:pr-16' : 'md:pl-16'}\`}>
        <div className="overflow-hidden rounded-2xl shadow-xl aspect-video relative group">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            src={story.img} 
            alt={story.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=800&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </motion.div>
  );
}
`,
  "src/components/LoveStory/StoryTimeline.tsx": `
import StoryCard from './StoryCard';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stories = [
  { year: "The Beginning", title: "That First Message", desc: "I never would have thought we would have gone this far. You came into my life just at the right time.", img: "/2.jpg" },
  { year: "First Date", title: "Nervous & Excited", desc: "I was actually nervous since I had never done that before, but everything went so well—the pictures, the packaging! 🤣", img: "/3.jpg" },
  { year: "Late Nights", title: "Whispers in the Dark", desc: "The late night calls, trying not to be loud so your mum wouldn't disturb you... I cherish all these memories.", img: "/4.jpg" },
  { year: "Today", title: "A Blessing", desc: "Every moment with you has truly been a blessing. I love everything about you.", img: "/5.jpg" }
];

export default function StoryTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto mt-20 relative px-4">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-rose-100 transform md:-translate-x-1/2 rounded-full hidden md:block">
        <motion.div className="w-full bg-rose-400 rounded-full" style={{ height }} />
      </div>

      <div className="space-y-32">
        {stories.map((story, idx) => (
          <StoryCard key={idx} story={story} index={idx} />
        ))}
      </div>
    </div>
  );
}
`,
  "src/components/LoveStory/LoveStory.tsx": `
import StoryTimeline from './StoryTimeline';
import SectionHeading from '../Shared/SectionHeading';

export default function LoveStory() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden z-10">
      <SectionHeading title="Our Story" subtitle="A journey of love, memories, and God's grace" />
      <StoryTimeline />
    </section>
  );
}
`,
  "src/components/Gallery/Lightbox.tsx": `
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
`,
  "src/components/Gallery/PhotoCard.tsx": `
import { motion } from 'framer-motion';

export default function PhotoCard({ src, index, onClick }: { src: string, index: number, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
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
          (e.target as HTMLImageElement).src = \`https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=600&auto=format&fit=crop&sig=\${index}\`;
        }}
      />
    </motion.div>
  );
}
`,
  "src/components/Gallery/VideoCard.tsx": `
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoCard({ src }: { src: string }) {
  return (
    <motion.div className="relative rounded-2xl overflow-hidden aspect-video bg-black group cursor-pointer shadow-lg mb-6 break-inside-avoid">
      <video src={src} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" muted loop />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 bg-rose-500/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
          <Play fill="currentColor" size={28} />
        </div>
      </div>
    </motion.div>
  );
}
`,
  "src/components/Gallery/Gallery.tsx": `
import SectionHeading from '../Shared/SectionHeading';
import PhotoCard from './PhotoCard';
import Lightbox from './Lightbox';
import { useState } from 'react';

const images = [
  "/1.jpg", "/2.jpg", "/3.jpg",
  "/4.jpg", "/5.jpg", "/6.jpg"
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="relative w-full py-32 bg-rose-50 z-10">
      <SectionHeading title="Memories" subtitle="Some of my favorite moments with you" />
      <div className="max-w-7xl mx-auto mt-20 px-4 columns-1 sm:columns-2 lg:columns-3 gap-6">
        {images.map((img, idx) => (
          <PhotoCard key={idx} src={img} index={idx} onClick={() => setSelectedImg(img)} />
        ))}
      </div>
      <Lightbox selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    </section>
  );
}
`,
  "src/components/ReasonsILoveYou/ReasonCard.tsx": `
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
`,
  "src/components/ReasonsILoveYou/ReasonsILoveYou.tsx": `
import ReasonCard from './ReasonCard';
import SectionHeading from '../Shared/SectionHeading';
import { Heart, Smile, Sparkles, Star, Coffee, Sun } from 'lucide-react';

const reasons = [
  { id: 1, title: "Your Heart", icon: Heart, desc: "So soft, so pure, always caring for others. I was surprised at how nice you are." },
  { id: 2, title: "Your Smile", icon: Smile, desc: "It lights up my darkest days effortlessly. Your beauty is unmatched." },
  { id: 3, title: "Your Drama", icon: Sparkles, desc: "What is my babe without wahala? 😅 I love every bit of it." },
  { id: 4, title: "Your Beauty", icon: Star, desc: "Your lip combo, your eyes, your nose, your lips, everything is perfect." },
  { id: 5, title: "Your Shenanigans", icon: Coffee, desc: "You keep life exciting and fun every single day. I know you annoy me sometimes, but it's why I love you." },
  { id: 6, title: "Being Naomi", icon: Sun, desc: "Just you, being your authentic, wonderful self. My Naomi." },
];

export default function ReasonsILoveYou() {
  return (
    <section className="relative w-full py-32 px-4 bg-rose-50/30 z-10">
      <SectionHeading title="Reasons Why I Love You" subtitle="Click on a card to see something special" />
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, idx) => (
          <ReasonCard key={reason.id} reason={reason} index={idx} />
        ))}
      </div>
    </section>
  );
}
`,
  "src/components/LoveLetter/LetterReveal.tsx": `
import { motion } from 'framer-motion';

const letterParagraphs = [
  "My love 💓,",
  "Hmmmmmm, I have a lot to say and honestly I dont think words will be enough but I will still say what I have to say.",
  "Being thinking of how this relationship was orchestrated by God, how we met, for some reasons I dont know I always remember the first message I sent to you, 😂 I never would have thought we would have gone this far. You have being a very good person to me, i honestly cant appreciate you enough for your presence, since when you came into my life, you have being a blessing to me, you came into my life just at the right time, when I was down and honestly I don't know what would have happened if you did not show up...",
  "I was genuinely surprised at how soft your heart is, i remember I went to read on Naomi in the bible and your character was nothing short of the name 🥺 I was surprised at how nice you are, 'are there still good people like this'? 😅.",
  "I remember our first date 😂, i was actually nervous since I have never done that before i mean I have never had a one on one conversation with you before but everything just went so well, the pictures, the packaging 🤣 etc.",
  "I can go on and on but i will stop here for now.",
  "My love 🥺 every moment with you has truly being a blessing, the late night calls, the times we call and you arr unable to talk, the time we call and you are trying not to be loud so your mum wont disturb you 😅, i cherish all the memories we had together.",
  "I love everything about you, your smile, your drama, your shenanigans, your beauty, your lip combo, your eyes, your nose, your lips, your physical looks and everything about you, i know you actually annoy me sometimes 🤣 but its part of why I love you, i mean what is my babe without wahala. 😅",
  "Happy birthday to you my love, i pray for you that as you step into this new age the lord bless you, keep you, protect you and guide you, may you grow in wisdom and in stature, grow spiritually and emotionally, may you continue to radiate the glory of the lord, may your light never go dim, may the love you gave for God continue to grow more and more in Jesus name.",
  "Happy birthday to you my love once again, i love you till eternity and I can't wait to go all out and celebrate you when we finally get married 🌚",
  "I live you so so so so much my love.",
  "Keep being Naomi"
];

export default function LetterReveal() {
  return (
    <div className="space-y-8 font-sans text-lg md:text-xl leading-relaxed text-slate-700">
      {letterParagraphs.map((para, idx) => (
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
          className={idx === 0 || idx >= letterParagraphs.length - 2 ? "font-vibes text-4xl md:text-5xl text-rose-600" : ""}
        >
          {para}
        </motion.p>
      ))}
    </div>
  );
}
`,
  "src/components/LoveLetter/LoveLetter.tsx": `
import LetterReveal from './LetterReveal';
import SectionHeading from '../Shared/SectionHeading';

export default function LoveLetter() {
  return (
    <section className="relative w-full min-h-screen py-32 px-4 bg-white flex flex-col items-center z-10">
      <SectionHeading title="A Letter From Me To You" subtitle="Open when you're ready" />
      <div className="max-w-4xl w-full mt-20 relative z-10 bg-rose-50/50 p-8 md:p-16 rounded-[3rem] shadow-2xl border border-rose-100">
        <div className="absolute -top-6 -left-6 text-rose-200 opacity-50">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>
        <LetterReveal />
      </div>
    </section>
  );
}
`,
  "src/components/BirthdaySurprise/Countdown.tsx": `
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
`,
  "src/components/BirthdaySurprise/FinalReveal.tsx": `
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function FinalReveal() {
  useEffect(() => {
    const duration = 5000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f43f5e', '#fb7185', '#ffe4e6']
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f43f5e', '#fb7185', '#ffe4e6']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="text-center z-10 px-4"
    >
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="font-vibes text-7xl md:text-9xl text-rose-500 mb-8 drop-shadow-2xl"
      >
        Happy Birthday, Naomi!
      </motion.h2>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="font-sans text-2xl md:text-3xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-light"
      >
        I love you till eternity and I can't wait to go all out and celebrate you when we finally get married 🌚
        <br/><br/>
        <span className="font-vibes text-5xl text-rose-600 font-bold">Keep being Naomi. ❤️</span>
      </motion.p>
    </motion.div>
  );
}
`,
  "src/components/BirthdaySurprise/BirthdaySurprise.tsx": `
import Countdown from './Countdown';
import FinalReveal from './FinalReveal';
import SectionHeading from '../Shared/SectionHeading';
import { useState } from 'react';

export default function BirthdaySurprise() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <section className="relative w-full min-h-screen py-32 bg-rose-100 flex flex-col items-center justify-center overflow-hidden z-10">
      {!isRevealed ? (
        <div className="flex flex-col items-center">
          {!started ? (
            <>
              <SectionHeading title="One Last Thing..." subtitle="Are you ready?" />
              <button 
                onClick={() => setStarted(true)}
                className="mt-12 px-12 py-4 bg-rose-500 text-white rounded-full font-sans text-xl font-semibold shadow-xl hover:bg-rose-600 hover:scale-105 transition-all duration-300"
              >
                Reveal Surprise
              </button>
            </>
          ) : (
            <Countdown onComplete={() => setIsRevealed(true)} />
          )}
        </div>
      ) : (
        <FinalReveal />
      )}
    </section>
  );
}
`
};

for (const [filepath, content] of Object.entries(files)) {
  const fullPath = path.resolve(__dirname, filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim());
}
console.log("Scaffolding complete.");

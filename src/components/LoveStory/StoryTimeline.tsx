import StoryCard from './StoryCard';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lightbox from '../Gallery/Lightbox';

const stories = [
  { year: "The Beginning", title: "That First Message", desc: "I never would have thought we would have gone this far. You came into my life just at the right time.", img: "/images/confession of love 1.jpeg" },
  { year: "Late Nights", title: "Whispers in the Dark", desc: "The late night calls, trying not to be loud so your mum wouldn't disturb you... I cherish all these memories.", img: "/images/WhatsApp Image 2026-05-31 at 2.48.02 AM.jpeg" },
  { year: "Today", title: "A Blessing", desc: "Every moment with you has truly been a blessing. I love everything about you.", img: "/images/with partner 3.jpeg" }
];

export default function StoryTimeline() {
  const containerRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
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
          <StoryCard
            key={idx}
            story={story}
            index={idx}
            onImageClick={(imgSrc) => setSelectedImg(imgSrc)}
          />
        ))}
      </div>

      <Lightbox selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    </div>
  );
}

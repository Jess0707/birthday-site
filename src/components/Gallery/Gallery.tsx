import SectionHeading from '../Shared/SectionHeading';
import PhotoCard from './PhotoCard';
import VideoCard from './VideoCard';
import Lightbox from './Lightbox';
import { useState } from 'react';

const mediaItems = [
  { type: 'image', src: "/images/pic 2 main image.jpeg" },
  { type: 'video', src: "/videos/WhatsApp Video 2026-05-29 at 10.14.07 PM.mp4" },
  { type: 'image', src: "/images/WhatsApp Image 2026-05-29 at 9.21.48 PM.jpeg" },
  { type: 'video', src: "/videos/vid 3 with partner .mp4" },
  { type: 'image', src: "/images/WhatsApp Image 2026-05-29 at 9.21.49 PM (1).jpeg" },
  { type: 'video', src: "/videos/church-presentation-to -audience.mp4" },
  { type: 'image', src: "/images/WhatsApp Image 2026-05-29 at 10.58.02 PM.jpeg" },
  { type: 'video', src: "/videos/medical class prep.mp4" },
  { type: 'image', src: "/images/WhatsApp Image 2026-05-29 at 9.21.49 PM.jpeg" },
  { type: 'image', src: "/images/pic 3 with partner.jpeg" },
  { type: 'image', src: "/images/with partner 3.jpeg" },
  { type: 'image', src: "/images/WhatsApp Image 2026-05-29 at 9.21.50 PM.jpeg" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="relative w-full py-32 bg-rose-50 z-10">
      <SectionHeading title="Memories" subtitle="Some of my favorite moments with you" />
      <div className="max-w-7xl mx-auto mt-20 px-4 columns-1 sm:columns-2 lg:columns-3 gap-6">
        {mediaItems.map((item, idx) => (
          item.type === 'image' ? (
            <PhotoCard key={idx} src={item.src} index={idx} onClick={() => setSelectedImg(item.src)} />
          ) : (
            <VideoCard key={idx} src={item.src} index={idx} />
          )
        ))}
      </div>
      <Lightbox selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    </section>
  );
}
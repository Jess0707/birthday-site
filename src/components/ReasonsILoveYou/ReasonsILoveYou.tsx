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
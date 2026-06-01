import StoryTimeline from './StoryTimeline';
import SectionHeading from '../Shared/SectionHeading';

export default function LoveStory() {
  return (
    <section id="love-story" className="relative w-full py-32 bg-white overflow-hidden z-10">
      <SectionHeading title="Our Story" subtitle="A journey of love, memories, and God's grace" />
      <StoryTimeline />
    </section>
  );
}

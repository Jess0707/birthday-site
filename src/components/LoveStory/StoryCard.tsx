import { motion } from 'framer-motion';

type Story = {
  year: string;
  title: string;
  desc: string;
  img: string;
};

export default function StoryCard({
  story,
  index,
  onImageClick,
}: {
  story: Story;
  index: number;
  onImageClick: (imgSrc: string) => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring" }}
      className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-white border-4 border-rose-400 rounded-full transform -translate-x-1/2 z-10 hidden md:block" />

      <div className={`w-full md:w-1/2 p-6 ${isEven ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'}`}>
        <span className="text-rose-400 font-vibes text-3xl">{story.year}</span>
        <h3 className="text-3xl font-bold text-slate-800 font-sans mt-2">{story.title}</h3>
        <p className="text-slate-600 mt-4 font-sans leading-relaxed text-lg">{story.desc}</p>
      </div>
      
      <div className={`w-full md:w-1/2 p-6 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
        <div className="overflow-hidden rounded-2xl shadow-xl aspect-video relative group">
          <button
            type="button"
            className="block w-full h-full cursor-zoom-in focus:outline-none"
            aria-label={`View ${story.title} image`}
            onClick={() => onImageClick(story.img)}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src={story.img}
              alt={story.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=800&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

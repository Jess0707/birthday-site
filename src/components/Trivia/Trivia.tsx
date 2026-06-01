import SectionHeading from '../Shared/SectionHeading';
import TriviaCard from './TriviaCard';

const triviaItems = [
  {
    question: 'Who confessed first?',
    options: ['Naomi', 'Ayomiposi', 'Marvellous'],
    correct: 'Ayomiposi',
  },
  {
    question: 'Who talks more?',
    options: ['Ayomiposi', 'Naomi', 'Marvellous'],
    correct: 'Ayomiposi',
  },
  {
    question: 'Who gets angry first?',
    options: ['Ayomiposi', 'Naomi', 'Marvellous'],
    correct: 'Naomi',
  },
  {
    question: 'What name do you normally call me?',
    options: ['Ayomii', 'Babe', 'My Love'],
    correct: 'Ayomii',
  },
  {
    question: 'Who is more emotional?',
    options: ['Naomi', 'Ayomiposi', 'Marvellous'],
    correct: 'Naomi',
  },
  {
    question: 'Who cries the most?',
    options: ['Ayomiposi', 'Naomi', 'Marvellous'],
    correct: 'Naomi',
  },
  {
    question: 'Who is more disciplined?',
    options: ['Ayomiposi', 'Naomi'],
    correct: 'Ayomiposi',
  },
  {
    question: 'Who always says “but but I still want to spend time with you” 🤣',
    options: ['Naomi', 'Ayomiposi', 'Marvellous'],
    correct: 'Naomi',
  },
];

export default function Trivia() {
  return (
    <section className="relative w-full py-32 bg-white z-10 overflow-hidden">
      <div className="absolute -left-20 top-0 text-rose-50/50 -rotate-12 font-vibes text-[20rem] pointer-events-none select-none">
        Trivia
      </div>
      
      <SectionHeading 
        title="Us in a Nutshell" 
        subtitle="A little trivia about our beautiful journey" 
      />
      
      <div className="max-w-6xl mx-auto mt-20 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {triviaItems.map((item, idx) => (
          <TriviaCard key={idx} item={item} index={idx} />
        ))}
      </div>
      
      <div className="absolute -right-20 bottom-0 text-rose-50/50 rotate-12 font-vibes text-[15rem] pointer-events-none select-none">
        Love
      </div>
    </section>
  );
}

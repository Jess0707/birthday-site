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
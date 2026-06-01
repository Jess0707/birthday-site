import Hero from './components/Hero/Hero';
import LoveStory from './components/LoveStory/LoveStory';
import Gallery from './components/Gallery/Gallery';
import Trivia from './components/Trivia/Trivia';
import ReasonsILoveYou from './components/ReasonsILoveYou/ReasonsILoveYou';
import LoveLetter from './components/LoveLetter/LoveLetter';
import BirthdaySurprise from './components/BirthdaySurprise/BirthdaySurprise';
import CustomCursor from './components/Shared/CustomCursor';
import FloatingElements from './components/Shared/FloatingElements';
import './App.css';

function App() {
  return (
    <div className="bg-rose-50/30 text-slate-800 overflow-x-hidden relative min-h-screen selection:bg-rose-200 selection:text-rose-900">
      <CustomCursor />
      <FloatingElements />
      
      <main className="relative z-10">
        <Hero />
        <LoveStory />
        <Gallery />
        <Trivia />
        <ReasonsILoveYou />
        <LoveLetter />
        <BirthdaySurprise />
      </main>
    </div>
  );
}

export default App;

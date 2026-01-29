import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Research } from './sections/Research';
import { Education } from './sections/Education';
import { Leadership } from './sections/Leadership';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1020]">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Research />
      <Education />
      <Leadership />
      <Contact />

      <footer className="bg-[#121A2F] border-t border-[#243255] py-8">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-[#A9B4D0]">
            © 2026 Jean Gabriel Mpuhwezimana. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

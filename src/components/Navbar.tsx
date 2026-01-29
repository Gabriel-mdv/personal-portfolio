import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { profileData } from '../content/profile';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#121A2F]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-xl font-bold text-[#EAF0FF] hover:text-[#7C5CFF] transition-colors"
          >
            JGM
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[#A9B4D0] hover:text-[#7C5CFF] transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={profileData.cv.path}
            download
            className="bg-[#7C5CFF] hover:bg-[#6A4CFF] text-white px-4 py-2 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2 text-sm shadow-lg shadow-[#7C5CFF]/20"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

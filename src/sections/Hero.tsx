import { Download, ArrowDown } from 'lucide-react';
import { Button } from '../components/Button';
import { profileData } from '../content/profile';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#7C5CFF] shadow-2xl shadow-[#7C5CFF]/20">
              <img
                src={profileData.personal.avatar}
                alt={profileData.personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAF0FF] mb-4">
              {profileData.personal.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-[#2EE59D] mb-6 font-semibold">
              {profileData.personal.title}
            </h2>
            <p className="text-[#A9B4D0] text-lg leading-relaxed mb-8 max-w-2xl">
              {profileData.personal.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button onClick={scrollToProjects} variant="primary">
                View Projects
                <ArrowDown size={20} />
              </Button>
              <Button href={profileData.cv.path} variant="secondary">
                <Download size={20} />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

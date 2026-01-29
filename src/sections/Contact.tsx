import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { profileData } from '../content/profile';

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#A9B4D0] text-lg mb-8 leading-relaxed">
          I'm always open to discussing new opportunities, collaborations, or research projects.
          Feel free to reach out through any of the channels below.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={`mailto:${profileData.contact.email}`}
            className="bg-[#121A2F] hover:bg-[#182447] border border-[#243255] text-[#EAF0FF] px-6 py-3 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#121A2F] hover:bg-[#182447] border border-[#243255] text-[#EAF0FF] px-6 py-3 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#121A2F] hover:bg-[#182447] border border-[#243255] text-[#EAF0FF] px-6 py-3 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>

        <div className="pt-8 border-t border-[#243255]">
          <Button href={profileData.cv.path} variant="primary">
            <Download size={20} />
            Download Full CV
          </Button>
        </div>
      </div>
    </Section>
  );
}

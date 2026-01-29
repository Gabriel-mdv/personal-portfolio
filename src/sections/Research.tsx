import { FileText, Download } from 'lucide-react';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { profileData } from '../content/profile';

export function Research() {
  return (
    <Section id="research" title="Research Projects">
      <div className="grid grid-cols-1 gap-6">
        {profileData.research.map((research, index) => (
          <Card key={index}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#EAF0FF] mb-2">
                  {research.title}
                </h3>
                <p className="text-sm text-[#2EE59D] font-medium">{research.period}</p>
              </div>
              <a
                href={research.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7C5CFF] hover:bg-[#6A4CFF] text-white px-4 py-2 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2 text-sm shadow-lg shadow-[#7C5CFF]/20 self-start"
              >
                <FileText size={16} />
                View PDF
                <Download size={14} />
              </a>
            </div>

            <ul className="space-y-3">
              {research.highlights.map((highlight, hIndex) => (
                <li key={hIndex} className="text-[#A9B4D0] leading-relaxed flex gap-3">
                  <span className="text-[#7C5CFF] mt-1.5 flex-shrink-0">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

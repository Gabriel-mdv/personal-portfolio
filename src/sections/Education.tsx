import { GraduationCap } from 'lucide-react';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { profileData } from '../content/profile';

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profileData.education.map((edu, index) => (
          <Card key={index}>
            <div className="flex items-start gap-4">
              <div className="bg-[#7C5CFF]/10 p-3 rounded-xl">
                <GraduationCap size={24} className="text-[#7C5CFF]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#EAF0FF] mb-2">
                  {edu.degree}
                </h3>
                <p className="text-[#2EE59D] font-medium mb-1">{edu.institution}</p>
                <p className="text-sm text-[#A9B4D0]">{edu.location}</p>
                <p className="text-sm text-[#A9B4D0] mt-2">{edu.period}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

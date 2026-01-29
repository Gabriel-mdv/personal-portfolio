import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { profileData } from '../content/profile';

export function Skills() {
  return (
    <Section id="skills" title="Skills & Expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileData.skills.map((skillGroup, index) => (
          <Card key={index}>
            <h3 className="text-xl font-semibold text-[#EAF0FF] mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 bg-[#1A2442] text-[#A9B4D0] text-sm rounded-full hover:bg-[#243255] hover:text-[#7C5CFF] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

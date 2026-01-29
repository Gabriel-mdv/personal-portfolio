import { Users } from 'lucide-react';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { profileData } from '../content/profile';

export function Leadership() {
  return (
    <Section id="leadership" title="Leadership Experience">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileData.leadership.map((leader, index) => (
          <Card key={index}>
            <div className="flex items-start gap-4">
              <div className="bg-[#2EE59D]/10 p-3 rounded-xl">
                <Users size={24} className="text-[#2EE59D]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#EAF0FF] mb-2">
                  {leader.role}
                </h3>
                <p className="text-[#2EE59D] font-medium mb-1">{leader.organization}</p>
                <p className="text-sm text-[#A9B4D0]">{leader.period}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

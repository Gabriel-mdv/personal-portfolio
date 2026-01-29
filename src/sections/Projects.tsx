import { Github } from 'lucide-react';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { Tag } from '../components/Tag';
import { profileData } from '../content/profile';

export function Projects() {
  return (
    <Section id="projects" title="Software Projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {profileData.projects.map((project, index) => (
          <Card key={index}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-[#EAF0FF] flex-1">
                {project.title}
              </h3>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A9B4D0] hover:text-[#7C5CFF] transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
            </div>

            <p className="text-[#A9B4D0] leading-relaxed mb-4">
              {project.description}
            </p>

            {project.techStack && (
              <div className="mb-3">
                <span className="text-sm text-[#2EE59D] font-semibold">Tech Stack: </span>
                <span className="text-sm text-[#A9B4D0]">{project.techStack}</span>
              </div>
            )}

            {project.dataAnalytics && (
              <div className="mb-3">
                <span className="text-sm text-[#2EE59D] font-semibold">Data & Analytics: </span>
                <span className="text-sm text-[#A9B4D0]">{project.dataAnalytics}</span>
              </div>
            )}

            {project.tools && (
              <div className="mb-3">
                <span className="text-sm text-[#2EE59D] font-semibold">Tools: </span>
                <span className="text-sm text-[#A9B4D0]">{project.tools}</span>
              </div>
            )}

            {project.skills && (
              <div className="mb-3">
                <span className="text-sm text-[#2EE59D] font-semibold">Skills: </span>
                <span className="text-sm text-[#A9B4D0]">{project.skills}</span>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex}>{tag}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

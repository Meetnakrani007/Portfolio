import { Badge } from "@/components/ui/badge";
import { Code, Server, FileCode } from "lucide-react";

const skillsData = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
  backend: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs'],
  programming_languages: ['C', 'C++', 'Java', 'Python'],
};

export function Skills() {
  return (
    <section id="skills" className="w-full scroll-mt-20">
      <div className="space-y-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline relative inline-block pb-2">
            Skills & Expertise
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></div>
          </h2>
        </div>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SkillCategory icon={<Code className="h-6 w-6" />} title="Frontend" skills={skillsData.frontend} />
        <SkillCategory icon={<Server className="h-6 w-6" />} title="Backend" skills={skillsData.backend} />
        <SkillCategory icon={<FileCode className="h-6 w-6" />} title="Programming Languages" skills={skillsData.programming_languages} />
      </div>
    </section>
  );
}

function SkillCategory({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <div className="bg-card p-6 rounded-lg border">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <Badge key={skill} variant="secondary" className="text-sm font-medium">{skill}</Badge>
        ))}
      </div>
    </div>
  );
}

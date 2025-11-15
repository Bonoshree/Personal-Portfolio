import { Card } from "@/components/ui/card";
import { Code2, Globe, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C/C++", "Python", "MATLAB", "Deep Learning"],
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: ["Proteus", "ADS", "LaTeX", "Git"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-2">WHAT I KNOW</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl border border-muted"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-xl bg-[rgba(26,61,100,0.1)] dark:bg-[rgba(255,255,255,0.1)] text-[#1A3D64] dark:text-white shadow-inner">
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-4 dark:text-white">{category.title}</h3>

                {/* Skill List */}
                <ul className="text-left space-y-2 mx-auto w-fit">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-2 text-[#1A3D64] dark:text-white transition"
                    >
                      {/* Colored bullet */}
                      <span className="h-2 w-2 bg-[#1A3D64] dark:bg-white rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Operating Systems */}
        <div className="text-center mt-12">
          <p className="font-medium text-muted-foreground dark:text-white">
            <span className="font-semibold text-foreground dark:text-white">Operating Systems:</span> Windows
          </p>
        </div>
      </div>
    </section>
  );
}

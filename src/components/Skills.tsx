import { Card } from "@/components/ui/card";
import { Code2, Globe, Wrench } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "primary",
      skills: [
        { name: "C/C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "MATLAB", level: 90 },
        { name: "Machine Learning", level: 75 },
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "secondary",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "PHP", level: 80 },
        { name: "MySQL", level: 85 },
      ],
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      color: "accent",
      skills: [
        { name: "Proteus", level: 90 },
        { name: "ADS", level: 75 },
        { name: "LaTeX", level: 85 },
        { name: "Git", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-2">WHAT I KNOW</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              secondary: "bg-secondary/10 text-secondary",
              accent: "bg-accent/10 text-accent",
            };
            
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg group-hover:scale-110 transition-transform ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold text-center mb-6">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Circuit Design",
              "Embedded Systems",
              "IoT",
              "Deep Learning",
              "Data Structures",
              "Algorithms",
              "MS Office",
              "Technical Writing",
              "Problem Solving",
              "Team Collaboration",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card rounded-full text-sm font-medium border border-primary/20 hover:border-primary hover:shadow-lg transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

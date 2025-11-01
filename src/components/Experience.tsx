import { Card } from "@/components/ui/card";
import { Briefcase, Users, Rocket } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Program Coordinator",
      organization: "IEEE Antennas & Propagation Society, CUET Chapter",
      period: "Aug 2025 – Present",
      icon: Rocket,
      description: "Leading program initiatives and coordinating technical events focused on antenna systems and electromagnetic wave propagation.",
    },
    {
      role: "Executive Member",
      organization: "IEEE CUET Student Branch",
      period: "Oct 2024 – Present",
      icon: Users,
      description: "Contributing to organizational activities, technical workshops, and student engagement programs.",
    },
    {
      role: "General Member",
      organization: "Andromeda Space & Robotics Research Organization",
      period: "Oct 2024 – Present",
      icon: Briefcase,
      description: "Participating in space technology research, robotics projects, and collaborative innovation initiatives.",
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-2">MY JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = exp.icon;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <Card
                    className={`flex-1 p-6 hover:shadow-xl transition-all duration-300 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className={`flex items-center gap-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-primary">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.organization}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </Card>

                  {/* Center Icon */}
                  <div className="hidden md:flex w-16 h-16 bg-primary rounded-full items-center justify-center shadow-lg z-10">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

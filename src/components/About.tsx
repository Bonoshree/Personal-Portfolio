import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export function About() {
  const education = [
    {
      degree: "B.Sc. in Electronics and Telecommunication Engineering",
      institution: "Chittagong University of Engineering & Technology (CUET)",
      period: "2023 – Present",
      status: "Current",
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Sylhet Govt. Women's College",
      period: "2019 – 2021",
      gpa: "GPA: 5.00/5.00",
    },
    {
      degree: "Secondary School Certificate (Science)",
      institution: "Blue Bird School and College, Sylhet",
      period: "2017 – 2019",
      gpa: "GPA: 5.00/5.00",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-2">GET TO KNOW ME</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary rounded-full" />
              <div className="pl-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Story</h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm <span className="font-semibold text-foreground">Bonoshree Talukder Tondra</span>, 
                    an Electronics and Telecommunication Engineering student at the{" "}
                    <span className="font-semibold text-foreground">Chittagong University of Engineering & Technology (CUET)</span>.
                  </p>
                  <p>
                    I'm deeply passionate about circuits, coding, and communication systems. I love combining 
                    hardware and software to build innovative, real-world technological solutions.
                  </p>
                  <p>
                    As a <span className="font-semibold text-primary">machine learning</span> and{" "}
                    <span className="font-semibold text-accent">deep learning</span> enthusiast, I constantly 
                    explore algorithms, AI applications, and IoT technologies to expand my knowledge and practical experience.
                  </p>
                  <p>
                    My goal is to bridge the gap between theoretical knowledge and practical implementation, 
                    creating solutions that make a real difference in people's lives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education Journey</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-bold text-lg leading-tight">{edu.degree}</h4>
                      {edu.status && (
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full whitespace-nowrap">
                          {edu.status}
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      {edu.gpa && (
                        <span className="flex items-center gap-2 font-semibold text-secondary">
                          <Award className="h-4 w-4" />
                          {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

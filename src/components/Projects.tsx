import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingBag, Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import girlifyImg from "@/assets/girlify.jpg";
import carImg from "@/assets/robot.jpg";

export function Projects() {
  const projects = [
    {
      title: "Girlify – Style Meets Convenience",
      category: "Web Development",
      icon: ShoppingBag,
      image: girlifyImg,
      description:
        "An e-commerce platform designed to make online fashion shopping effortless and enjoyable.",
      features: [
        "Wide range of products: dresses, accessories, footwear",
        "Smooth product browsing with filters and secure checkout",
        "Personalized user accounts with order history",
        "Admin Dashboard for comprehensive management",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      liveLink: "https://girlify.rf.gd/",
      color: "secondary",
    },
    {
      title: "Obstacle Avoiding & Voice-Controlled Car",
      category: "Embedded Systems",
      icon: Car,
      image: carImg,
      description:
        "An intelligent robotic car that detects and avoids obstacles while responding to voice commands.",
      features: [
        "Obstacle detection via ultrasonic sensor",
        "Bluetooth-based mobile control",
        "Voice command operation for hands-free control",
        "L293D motor driver for efficient motor control",
      ],
      technologies: [
        "Arduino",
        "C++",
        "Ultrasonic Sensor",
        "Bluetooth",
        "L293D",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-2">MY WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const colorClasses = {
              secondary: {
                bgGradient: "from-secondary/20 to-secondary/5",
                bgGlow: "bg-secondary/20",
                bgIcon: "bg-secondary/10",
                text: "text-secondary",
                border: "border-secondary",
              },
              accent: {
                bgGradient: "from-accent/20 to-accent/5",
                bgGlow: "bg-accent/20",
                bgIcon: "bg-accent/10",
                text: "text-accent",
                border: "border-accent",
              },
            };
            const colors =
              colorClasses[project.color as keyof typeof colorClasses];

            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group rounded-2xl"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* ✅ Image or Icon Section */}
                  <div
                    className={`lg:col-span-2 bg-gradient-to-br ${colors.bgGradient} flex items-center justify-center`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover lg:rounded-l-2xl"
                      />
                    ) : (
                      <div className="relative p-12">
                        <div
                          className={`absolute inset-0 ${colors.bgGlow} rounded-full blur-3xl animate-pulse-slow`}
                        />
                        <div
                          className={`relative w-32 h-32 ${colors.bgIcon} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent className={`h-16 w-16 ${colors.text}`} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-3 p-8 space-y-6">
                    {/* Title + Description */}
                    <div className="space-y-3">
                      <Badge variant="outline" className={colors.text}>
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <div
                              className={`w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0 ${
                                project.color === "secondary"
                                  ? "bg-secondary"
                                  : "bg-accent"
                              }`}
                            />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    {project.liveLink && (
                      <div className="flex gap-4 pt-4">
                        <Button
                          asChild
                          className={
                            project.color === "secondary"
                              ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                              : "bg-accent hover:bg-accent/90 text-accent-foreground"
                          }
                        >
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

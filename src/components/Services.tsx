import { Card } from "@/components/ui/card";
import { Globe, Cpu } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Designing and developing responsive, user-friendly websites with interactive UI, dynamic content, and database integration.",
      features: [
        "Responsive Design",
        "Database Integration",
        "E-commerce Solutions",
        "Admin Dashboards",
      ],
      color: "primary",
    },
    {
      icon: Cpu,
      title: "Circuit Design",
      description: "Building reliable and optimized electronic circuits for embedded systems and communication-based applications.",
      features: [
        "PCB Design",
        "Embedded Systems",
        "IoT Solutions",
        "Prototyping",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-2">WHAT I OFFER</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = {
              primary: {
                bg: "bg-primary/10",
                text: "text-primary",
                gradient: "from-primary/5",
              },
              accent: {
                bg: "bg-accent/10",
                text: "text-accent",
                gradient: "from-accent/5",
              },
            };
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`h-8 w-8 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="pt-4 space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${service.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
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

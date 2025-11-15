import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Certifications() {
  const certifications = [
    {
      title: "MATLAB Onramp",
      issuer: "MathWorks",
      date: "May 2024",
      type: "Online Course",
      pdf: "/matlab.pdf",
    },
    {
      title: "Workshop on Mastering VLSI & Semiconductor Techniques",
      issuer: "IEEE CUET WIE Affinity Group",
      date: "Jan 2025",
      type: "Workshop",
      pdf: "/vlsi.pdf",
    },
    {
      title: "Engineering Design & Analysis with MATLAB",
      issuer: "IICT CUET, Bangladesh Computer Council, ICT Division",
      date: "Apr 2025",
      credential: "EDGE-DSTS-119-7041-00022",
      type: "Certificate",
      pdf: "/edge.pdf",
    },
    {
      title: "Supervised Machine Learning: Classification",
      issuer: "Coursera",
      date: "Mar 2025",
      type: "Online Course",
      pdf: "/classification.pdf",
    },
  ];

  const openPDF = (path: string) => {
    window.open(path, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-2">ACHIEVEMENTS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 group border-l-4 border-l-primary"
            >
              <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {cert.type}
                    </Badge>
                    <h3 className="font-bold text-lg leading-tight">{cert.title}</h3>
                    <p className="text-[#AAC4F5] font-medium text-sm">{cert.issuer}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{cert.date}</span>
                    {cert.credential && (
                      <span className="text-xs font-mono bg-muted px-2 py-1 rounded">
                        ID: {cert.credential}
                      </span>
                    )}
                  </div>

                  {/* View Certificate Button */}
                  {cert.pdf && (
                    <div className="pt-2">
                      <Button
                        size="sm"
                        onClick={() => openPDF(cert.pdf)}
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg"
                      >
                        View Certificate
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="max-w-2xl mx-auto space-y-4">
              <Award className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">Continuous Learning Journey</h3>
              <p className="text-muted-foreground">
                I'm constantly expanding my knowledge through courses, workshops and hands-on projects.  
                Stay tuned for more achievements!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

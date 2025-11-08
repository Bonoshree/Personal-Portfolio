import { Button } from "@/components/ui/button";
import { Github, Linkedin, Facebook, Mail, Download } from "lucide-react";
import profileImg from "@/assets/bonoshree.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/bonoshree-talukder-tondra-a372532a2", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Bonoshree", label: "GitHub" },
    { icon: Facebook, href: "https://facebook.com/share/17WURYdBXA/", label: "Facebook" },
    { icon: Mail, href: "mailto:bonoshreetondra@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--muted-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <p className="text-sm md:text-base font-medium text-secondary">Welcome to my portfolio</p>
            </div>
            
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl font-medium text-foreground">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight gradient-text">
                Bonoshree Talukder Tondra
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
                BSc. in ETE || CUET || ML & AI Enthusiast
              </h2>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Bridging circuits and code to create intelligent and connected solutions. Passionate about Machine Learning and Embedded Systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-card border-2 hover:bg-muted"
              >
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-card border hover:bg-muted transition-all flex items-center gap-2 text-sm font-medium"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-secondary" />
                  <span className="text-foreground">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse-slow" />
              
              {/* Image Container with gradient border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-1 bg-gradient-to-br from-primary via-accent to-secondary">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src={profileImg}
                    alt="Bonoshree Talukder Tondra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              {/* <div className="absolute -bottom-4 -right-4 bg-card text-foreground px-6 py-3 rounded-full shadow-xl border-2 border-primary animate-float">
                <p className="font-bold text-base">CUET Student</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-secondary flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
}

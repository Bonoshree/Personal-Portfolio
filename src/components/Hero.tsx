import { Button } from "@/components/ui/button";
import { Github, Linkedin, Facebook, Mail, Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: `linear-gradient(135deg, hsl(188, 95%, 36%) 0%, hsl(263, 70%, 65%) 100%)`,
      }}
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-secondary/30 rounded-full animate-float" />
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 left-1/4 w-16 h-16 border-4 border-secondary/40 rotate-45 animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-medium opacity-90">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Bonoshree Talukder Tondra
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary">
                ETE Student | Circuit Designer | Web Developer
              </h2>
            </div>

            <p className="text-lg md:text-xl opacity-90 max-w-xl">
              Bridging circuits and code to create intelligent and connected solutions. Passionate about Machine Learning and Embedded Systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 bg-secondary/30 rounded-full blur-2xl animate-pulse-slow" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Bonoshree Talukder Tondra"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card text-card-foreground px-6 py-3 rounded-full shadow-xl border-4 border-primary animate-float">
                <p className="font-bold text-lg">CUET Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}

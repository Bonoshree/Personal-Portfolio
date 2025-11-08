import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Facebook, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_zbqz77b",
        "template_a453u0j",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Bonoshree",
        },
        "nyrlx0R791I3_d-_9"
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bonoshreetondra@gmail.com",
      href: "mailto:bonoshreetondra@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Bonoshree Talukder Tondra",
      href: "https://linkedin.com/in/bonoshree-talukder-tondra-a372532a2",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Bonoshree",
      href: "https://github.com/Bonoshree",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Connect on Facebook",
      href: "https://facebook.com/share/17WURYdBXA/",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-colors group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#about">About Me</a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Download CV
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hi..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {/* Direct Email Line Below Form */}
              <div className="mt-4 text-center bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Prefer email? Reach me directly at</p>
                <a
                  href="mailto:bonoshreetondra@gmail.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  bonoshreetondra@gmail.com
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

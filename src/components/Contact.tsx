import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
const Contact = () => {
  const contactCards = [{
    icon: Mail,
    title: "PERSONAL EMAIL",
    description: "Let's start a conversation",
    action: "tiffmares@gmail.com",
    href: "mailto:tiffmares@gmail.com"
  }, {
    icon: Mail,
    title: "SCHOOL EMAIL",
    description: "University of Guelph contact",
    action: "tmares@uoguelph.ca",
    href: "mailto:tmares@uoguelph.ca"
  }, {
    icon: Phone,
    title: "PHONE",
    description: "Direct communication",
    action: "647-773-6532",
    href: "tel:647-773-6532"
  }, {
    icon: Linkedin,
    title: "LINKEDIN",
    description: "Professional network & updates",
    action: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/tiffanymares/"
  }, {
    icon: Github,
    title: "GITHUB",
    description: "Check out my code & projects",
    action: "View GitHub Profile",
    href: "https://github.com/tiffany-mares"
  }];
  return <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary animate-glow">
            Let's Connect 🤝
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">I'm always open to discussing new opportunities, interesting projects, or just having a great conversation about technology! 🤗</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactCards.map(({
          icon: Icon,
          title,
          description,
          action,
          href
        }, index) => <Card key={title} className="bg-card/50 border border-border hover:border-primary/50 hover:scale-105 hover:bg-primary/5 hover:shadow-xl transition-all duration-300 group cursor-pointer h-72 w-full">
              <a href={href} className="block p-6 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-primary group-hover:text-accent transition-colors duration-300" size={24} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary mb-4 tracking-wide group-hover:text-accent transition-colors duration-300 min-h-[28px]">
                    {title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-8 flex-1 min-h-[40px] flex items-center justify-center">
                    {description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary group-hover:text-accent transition-colors duration-300 mt-auto min-h-[24px]">
                    <span className="text-sm font-medium truncate max-w-[200px]">{action}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                  </div>
                </div>
              </a>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Contact;
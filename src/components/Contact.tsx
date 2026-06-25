import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import RetroWindow from "@/components/RetroWindow";
import TypewriterTitle from "@/components/TypewriterTitle";
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
  return <section id="contact" className="relative">
      <div className="text-center mb-12">
        <TypewriterTitle text="Let's Connect" className="retro-banner text-3xl md:text-4xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {contactCards.map(({
        icon: Icon,
        title,
        description,
        action,
        href
      }) => <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="block">
              <RetroWindow title={title.toLowerCase().replace(/\s+/g, "-")} bodyClassName="p-6 h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-sm bg-blush border-2 border-navy flex items-center justify-center">
                    <Icon className="text-navy" size={24} />
                  </div>
                  <h3 className="font-pixel text-base text-navy tracking-wide">{title}</h3>
                  <p className="text-card-foreground text-sm">{description}</p>
                  <div className="flex items-center gap-2 text-pink font-bold">
                    <span className="text-sm truncate max-w-[220px]">{action}</span>
                    <ArrowRight size={16} className="flex-shrink-0" />
                  </div>
                </div>
              </RetroWindow>
            </a>)}
      </div>
    </section>;
};
export default Contact;
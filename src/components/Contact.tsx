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

      <div className="max-w-2xl mx-auto">
        <RetroWindow title="contact" bodyClassName="p-0">
          <ul className="divide-y-2 divide-navy/15">
            {contactCards.map(({
            icon: Icon,
            title,
            description,
            action,
            href
          }) => <li key={title}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 hover:bg-blush/40 transition-colors duration-150">
                  <div className="w-12 h-12 flex-shrink-0 rounded-sm bg-blush border-2 border-navy flex items-center justify-center">
                    <Icon className="text-navy" size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-pixel text-base text-navy tracking-wide">{title}</h3>
                    <p className="text-card-foreground text-sm">{description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-pink font-bold flex-shrink-0">
                    <span className="text-sm truncate max-w-[160px] sm:max-w-[220px]">{action}</span>
                    <ArrowRight size={16} className="flex-shrink-0" />
                  </div>
                </a>
              </li>)}
          </ul>
        </RetroWindow>
      </div>
    </section>;
};
export default Contact;
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
interface NavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}
const socialLinks = [{
  icon: Github,
  href: "https://github.com/tiffany-mares",
  label: "GitHub"
}, {
  icon: Linkedin,
  href: "https://www.linkedin.com/in/tiffanymares/",
  label: "LinkedIn"
}, {
  icon: Mail,
  href: "mailto:tiffmares@gmail.com",
  label: "Email"
}, {
  icon: FileText,
  href: "https://drive.google.com/file/d/1WCdAT-Iv0blMzV7670c-2ecVWEoAZx6D/view?usp=sharing",
  label: "Resume"
}];
const Navigation = ({
  activeTab,
  onTabChange
}: NavigationProps) => {
  const navigationItems = [{
    value: "home",
    label: "Homepage"
  }, {
    value: "about",
    label: "About"
  }, {
    value: "experience",
    label: "Work Experience"
  }, {
    value: "projects",
    label: "Projects"
  }, {
    value: "organizations",
    label: "Leadership"
  }, {
    value: "hackathons",
    label: "Hackathons"
  }, {
    value: "certifications",
    label: "Certifications"
  }, {
    value: "contact",
    label: "Contact"
  }];
  return <nav className="fixed top-0 w-full z-50 bg-card/90 backdrop-blur-sm border-b-[3px] border-navy shadow-pixel-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="font-pixel text-xl md:text-2xl font-bold text-navy cursor-pointer hover:text-pink transition-colors" onClick={() => onTabChange("home")}>Tiffany Mares</div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            <Tabs value={activeTab} onValueChange={onTabChange}>
              <TabsList className="bg-transparent gap-1 p-0 h-auto flex-wrap">
                {navigationItems.map(item => <TabsTrigger key={item.value} value={item.value} className="font-pixel uppercase text-sm px-3 py-1.5 rounded-sm border-2 border-transparent text-navy/80 hover:text-navy hover:border-navy data-[state=active]:bg-[image:var(--brand-gradient)] data-[state=active]:text-navy data-[state=active]:border-navy data-[state=active]:shadow-pixel-sm transition-all duration-150">
                    {item.label}
                  </TabsTrigger>)}
              </TabsList>
            </Tabs>
            <div className="flex items-center gap-1 pl-2 border-l-2 border-navy/30">
              {socialLinks.map(({ icon: Icon, href, label }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="p-1.5 rounded-sm text-navy hover:bg-blush hover:shadow-pixel-sm hover:-translate-y-0.5 transition-all duration-150">
                  <Icon size={18} />
                </a>)}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="hidden sm:flex items-center">
              {socialLinks.map(({ icon: Icon, href, label }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="p-1.5 rounded-sm text-navy hover:bg-blush transition-all duration-150">
                  <Icon size={16} />
                </a>)}
            </div>
            <select value={activeTab} onChange={e => onTabChange(e.target.value)} className="font-pixel uppercase bg-card text-navy rounded-sm px-3 py-1.5 text-sm border-2 border-navy shadow-pixel-sm">
              {navigationItems.map(item => <option key={item.value} value={item.value}>
                  {item.label}
                </option>)}
            </select>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
interface NavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}
const Navigation = ({
  activeTab,
  onTabChange
}: NavigationProps) => {
  const navigationItems = [{
    value: "home",
    label: "Home"
  }, {
    value: "about",
    label: "About"
  }, {
    value: "experience",
    label: "Experience"
  }, {
    value: "skills",
    label: "Skills"
  }, {
    value: "certifications",
    label: "Certifications"
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
    value: "contact",
    label: "Contact"
  }];
  return <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary animate-glow cursor-pointer" onClick={() => onTabChange("home")}>Tiffany Mares 👩🏻‍💻</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Tabs value={activeTab} onValueChange={onTabChange}>
              <TabsList className="bg-muted/50">
                {navigationItems.map(item => <TabsTrigger key={item.value} value={item.value} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200">
                    {item.label}
                  </TabsTrigger>)}
              </TabsList>
            </Tabs>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-3">
            <select value={activeTab} onChange={e => onTabChange(e.target.value)} className="bg-muted/50 text-foreground rounded-md px-3 py-1 text-sm border border-border">
              {navigationItems.map(item => <option key={item.value} value={item.value}>
                  {item.label}
                </option>)}
            </select>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;
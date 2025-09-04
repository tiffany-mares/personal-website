import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1WCdAT-Iv0blMzV7670c-2ecVWEoAZx6D/view?usp=sharing', '_blank');
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="space-y-6">
              <div className="text-lg text-primary animate-glow">
                Hi there 👋
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold">
                I'm <span className="text-primary animate-glow">Tiffany Mares 👩🏻‍💻</span>
              </h1>
              
              <div className="space-y-2 text-xl lg:text-2xl text-muted-foreground">
                <div className="animate-fade-in-delay" style={{
                animationDelay: '0.2s'
              }}>
                  Cloud Developer ☁️
                </div>
                <div className="animate-fade-in-delay" style={{
                animationDelay: '0.4s'
              }}>IBM Z Student Ambassador ⚡</div>
                <div className="animate-fade-in-delay" style={{
                animationDelay: '0.6s'
              }}>
                  Student Leader 🗣️
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-delay" style={{
              animationDelay: '0.8s'
            }}>
                {["Azure/AWS", "IBM Z", "AI/Machine Learning"].map(skill => <span key={skill} className="px-4 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300">
                    {skill}
                  </span>)}
              </div>
              
              <div className="flex justify-center lg:justify-start animate-fade-in-delay" style={{
              animationDelay: '1s'
            }}>
                <Button onClick={handleDownloadResume} variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  RESUME
                </Button>
              </div>
              
              <div className="flex gap-6 justify-center lg:justify-start animate-fade-in-delay" style={{
              animationDelay: '1.2s'
            }}>
                {[{
                icon: Github,
                href: "https://github.com/tiffany-mares",
                label: "GitHub"
              }, {
                icon: Linkedin,
                href: "https://linkedin.com/in/tiffany-mares",
                label: "LinkedIn"
              }, {
                icon: Mail,
                href: "mailto:tiffmares@gmail.com",
                label: "Email"
              }].map(({
                icon: Icon,
                href,
                label
              }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:animate-glow hover:scale-110 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]" aria-label={label}>
                    <Icon size={24} />
                  </a>)}
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-float">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-[var(--profile-glow)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] transition-all duration-500">
                <img src="/lovable-uploads/467b2968-e1f4-4b49-8b72-2cae00f81826.png" alt="Tiffany Mares" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
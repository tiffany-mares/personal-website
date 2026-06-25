import { Github, Linkedin, Mail, Download } from "lucide-react";
import { ReactTyped } from "react-typed";
import RetroWindow from "@/components/RetroWindow";
const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1WCdAT-Iv0blMzV7670c-2ecVWEoAZx6D/view?usp=sharing', '_blank');
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="space-y-6">
              <h1 className="font-pixel text-5xl lg:text-7xl font-bold text-navy leading-tight" style={{ textShadow: '3px 3px 0 hsl(var(--periwinkle))' }}>
                I'm <span className="text-pink">Tiffany Mares</span>
              </h1>
              
              <div className="text-lg lg:text-2xl text-navy/80 font-semibold animate-fade-in-delay" style={{ animationDelay: '0.2s' }}>
                <ReactTyped
                  className="text-pink font-bold"
                  strings={[
                    "AWS Cloud Club Captain",
                    "IBM Z Student Ambassador",
                    "Cloud Developer",
                    "Student Leader"
                  ]}
                  typeSpeed={55}
                  backSpeed={35}
                  backDelay={1600}
                  loop
                />
              </div>
              
              <div className="flex justify-center lg:justify-start animate-fade-in-delay" style={{
              animationDelay: '1s'
            }}>
                <button onClick={handleDownloadResume} className="retro-btn text-sm bg-[image:var(--brand-gradient)]">
                  <Download className="w-4 h-4 mr-2" />
                  RESUME
                </button>
              </div>
              
              <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-delay" style={{
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
              }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm bg-card text-navy border-2 border-navy shadow-pixel-sm hover:bg-blush hover:-translate-y-0.5 transition-all duration-150" aria-label={label}>
                    <Icon size={22} />
                  </a>)}
              </div>
            </div>
          </div>
          
          {/* Profile Image inside a retro window */}
          <div className="flex-1 flex justify-center animate-float">
            <RetroWindow title="tiffany.png" className="w-[330px]" bodyClassName="p-2 bg-blush/40">
              <div className="w-full aspect-square overflow-hidden border-2 border-navy">
                <img src="/lovable-uploads/467b2968-e1f4-4b49-8b72-2cae00f81826.png" alt="Tiffany Mares" className="w-full h-full object-cover" />
              </div>
            </RetroWindow>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
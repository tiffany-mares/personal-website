import { Github, Linkedin, Mail, Download } from "lucide-react";
import RetroWindow from "@/components/RetroWindow";
const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1WCdAT-Iv0blMzV7670c-2ecVWEoAZx6D/view?usp=sharing', '_blank');
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 font-pixel text-xs px-3 py-1.5 rounded-sm bg-card text-navy border-2 border-navy shadow-pixel-sm">
                Hi there, welcome to my world
              </div>
              
              <h1 className="font-pixel text-5xl lg:text-7xl font-bold text-white leading-tight" style={{ textShadow: '3px 3px 0 hsl(var(--navy))' }}>
                I'm <span className="text-white/80">Tiffany Mares</span>
              </h1>
              
              <div className="space-y-2 text-lg lg:text-xl text-white/90 font-semibold">
                <div className="animate-fade-in-delay" style={{
                animationDelay: '0.2s'
              }}>
                AWS Cloud Club Captain
                </div>
                <div className="animate-fade-in-delay" style={{
                animationDelay: '0.4s'
              }}>IBM Z Student Ambassador</div>
                <div className="animate-fade-in-delay" style={{
                animationDelay: '0.6s'
              }}>
                  Student Leader
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-delay" style={{
              animationDelay: '0.8s'
            }}>
                {["Azure/AWS", "IBM Z", "AI/Machine Learning"].map((skill, i) => <span key={skill} className={`font-pixel text-xs px-3 py-1.5 rounded-sm text-navy border-2 border-navy shadow-pixel-sm ${i === 0 ? 'bg-periwinkle' : i === 1 ? 'bg-lavender' : 'bg-blush'}`}>
                    {skill}
                  </span>)}
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
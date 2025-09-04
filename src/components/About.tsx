import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: "☁️",
      title: "Cloud Development",
      description: "Building intelligent cloud-native applications on Microsoft Azure and AWS"
    },
    {
      icon: "💡",
      title: "Machine Learning",
      description: "Developing ML solutions using Azure ML and AWS for predictive analytics and generative AI applications"
    },
    {
      icon: "⚡",
      title: "Mainframe Expert",
      description: "IBM Z Student Ambassador with expertise in enterprise systems"
    },
    {
      icon: "👥",
      title: "Student Leader",
      description: "Leading diverse organizations and fostering inclusive communities"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary animate-glow">
            About Me 👋
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a highly efficient <span className="text-primary font-semibold">Computer Science Student</span> skilled in 
              cloud development, software architecture, and machine learning integration. As an experienced 
              student leader established in fast-paced and challenging environments, I'm eager to learn 
              with an aptitude for applying new knowledge! 💡
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my <span className="text-primary font-semibold">Bachelor of Computing in Computer Science Co-op 
              with a Minor in Business</span> at the University of Guelph, I specialize in 
              <span className="text-primary font-semibold"> Microsoft Azure and AWS cloud solutions</span> and 
              <span className="text-primary font-semibold"> IBM Z mainframe systems</span>. 💻
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              As <span className="text-primary font-semibold">Vice President of the <span className="cursor-pointer hover:text-primary/80 hover:underline transition-colors duration-200" onClick={() => window.open("https://www.linkedin.com/company/uog-cepssc/posts/?feedView=all", "_blank")}>College of Computing</span></span>, 
              <span className="text-primary font-semibold"> Co-founder and President of the Cloud Computing Club</span>, and 
              <span className="text-primary font-semibold"> IBM Z Student Ambassador</span>, I'm passionate about bridging modern cloud technologies with 
              traditional enterprise systems while fostering inclusive communities in technology. 🙌
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon, title, description }, index) => (
              <Card 
                key={title}
                className="p-6 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--card-glow)] group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-2xl">{icon}</span>
                  </div>
                  <h3 className="font-semibold text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
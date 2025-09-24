import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, ExternalLink, Github } from "lucide-react";
const Hackathons = () => {
  const hackathons = [{
    name: "BMO Destination Digital",
    position: "Selected Innovation Sprint",
    date: "2025",
    location: "BMO",
    project: "Innovation Sprint Project",
    description: <div className="space-y-2">
          <div>• <span className="text-blue-400 font-medium">Selected as the only intern to participate in company-wide hackathon style innovation challenge</span></div>
          <div>• Designed and delivered an <span className="text-blue-400 font-medium">interactive website mockup</span>, <span className="text-blue-400 font-medium">solution architecture diagram</span>, and <span className="text-blue-400 font-medium">video pitch</span>, showcasing the proposed solution's feasibility and impact</div>
          <div>• Collaborated with teammates to prepare and present a <span className="text-blue-400 font-medium">final pitch to top-level BMO executives</span>, earning recognition for innovation and practicality</div>
          <div>• Applied <span className="text-blue-400 font-medium">design thinking</span>, <span className="text-blue-400 font-medium">solution architecture</span>, and <span className="text-blue-400 font-medium">rapid prototyping</span> in a high-pressure, cross-functional environment</div>
        </div>,
    technologies: ["Solution Architecture", "UI/UX Prototyping", "Pitch Development & Delivery", "Design Thinking & Ideation", "Rapid Prototyping"],
    prize: "Executive Recognition",
    credlyUrl: "https://www.credly.com/badges/2724b0e1-b4bb-44d7-ba47-a150d1957d07",
    demoUrl: null,
    githubUrl: null,
    icon: "/lovable-uploads/bmo-destination-digital-badge.png"
  }, {
    name: "GDSC Hacks 2025",
    position: "Bee My Tutor Project",
    date: "May 2025",
    location: "University of Guelph",
    project: "Bee My Tutor",
    description: <div className="space-y-2">
          <div>• Developed a <span className="text-blue-400 font-medium">full-stack web application</span> enabling students to identify <span className="text-blue-400 font-medium">learning styles</span>, generate <span className="text-blue-400 font-medium">AI-powered study plans</span>, and take <span className="text-blue-400 font-medium">dynamically generated quizzes</span> based on uploaded study materials</div>
          <div>• Implemented <span className="text-blue-400 font-medium">Natural Language Processing (NLP)</span> to extract key points, summaries, and metadata from documents, enhancing <span className="text-blue-400 font-medium">quiz relevance and personalization</span></div>
          <div>• Integrated <span className="text-blue-400 font-medium">Firebase</span> for authentication, <span className="text-blue-400 font-medium">real-time data storage</span>, and <span className="text-blue-400 font-medium">cloud functions</span>, enabling secure and scalable backend operations</div>
          <div>• Optimized application performance by implementing <span className="text-blue-400 font-medium">efficient state updates</span>, <span className="text-blue-400 font-medium">asynchronous data fetching</span>, and <span className="text-blue-400 font-medium">modular component architecture</span></div>
        </div>,
    technologies: ["Express.js", "Firebase", "Google Gemini", "JavaScript", "Node.js", "React.js", "Redux.js", "NLP", "AWS Amplify"],
    prize: "Project Submission",
    demoUrl: "https://main.d2hm05foqgtggx.amplifyapp.com/",
    githubUrl: "https://github.com/tiffany-mares/bee-my-tutor",
    icon: "🐝"
  }];
  const getPositionColor = (position: string) => {
    if (position.includes("1st") || position.includes("Winner")) {
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    } else if (position.includes("2nd")) {
      return "bg-gray-400/20 text-gray-300 border-gray-400/30";
    } else if (position.includes("Finalist") || position.includes("Best")) {
      return "bg-primary/20 text-primary border-primary/30";
    }
    return "bg-accent/20 text-accent border-accent/30";
  };
  return <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-primary animate-glow">Hackathons 🏁</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">Competitive coding events where I've built innovative solutions under tight deadlines!</p>
      </div>

      <div className="space-y-6">
        {hackathons.map((hackathon, index) => {
          const CardWrapper = hackathon.credlyUrl ? 'a' : 'div';
          const cardProps = hackathon.credlyUrl 
            ? { href: hackathon.credlyUrl, target: '_blank', rel: 'noopener noreferrer', className: 'block' }
            : {};
          
          return (
            <CardWrapper key={index} {...cardProps}>
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-[var(--card-glow)] transition-all duration-300 cursor-pointer hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">
                        {hackathon.icon.startsWith('/') ? <img src={hackathon.icon} alt={`${hackathon.name} logo`} className="w-12 h-12 object-contain" /> : hackathon.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary">{hackathon.name}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-foreground">
                          {hackathon.project}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {index === 0 && hackathon.credlyUrl && <Button variant="outline" size="sm" onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(hackathon.credlyUrl, '_blank');
                        }} className="hover:text-primary">
                          <Trophy className="w-4 h-4 mr-2" />
                          View My Credly Badge from BMO
                        </Button>}
                      {index === 1 && hackathon.githubUrl && <Button variant="outline" size="sm" onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(hackathon.githubUrl, '_blank');
                        }} className="hover:text-primary">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>}
                      {index === 1 && hackathon.demoUrl && <Button variant="outline" size="sm" onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(hackathon.demoUrl, '_blank');
                        }} className="hover:text-primary">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {hackathon.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {hackathon.date}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-foreground leading-relaxed">{hackathon.description}</div>
                  
                  <div className="flex flex-wrap gap-2">
                    {hackathon.technologies.map(tech => <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>
            </CardWrapper>
          );
        })}
      </div>
    </div>;
};
export default Hackathons;
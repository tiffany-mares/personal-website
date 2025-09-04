import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bee My Tutor",
      description: (
        <div className="space-y-2">
          <div>• Developed a <span className="text-blue-400 font-medium">full-stack web application</span> enabling students to identify <span className="text-blue-400 font-medium">learning styles</span>, generate <span className="text-blue-400 font-medium">AI-powered study plans</span>, and take <span className="text-blue-400 font-medium">dynamically generated quizzes</span> based on uploaded study materials</div>
          <div>• Implemented <span className="text-blue-400 font-medium">Natural Language Processing (NLP)</span> to extract key points, summaries, and metadata from documents, enhancing <span className="text-blue-400 font-medium">quiz relevance and personalization</span></div>
          <div>• Integrated <span className="text-blue-400 font-medium">Firebase</span> for authentication, <span className="text-blue-400 font-medium">real-time data storage</span>, and <span className="text-blue-400 font-medium">cloud functions</span>, enabling secure and scalable backend operations</div>
          <div>• Optimized application performance by implementing <span className="text-blue-400 font-medium">efficient state updates</span>, <span className="text-blue-400 font-medium">asynchronous data fetching</span>, and <span className="text-blue-400 font-medium">modular component architecture</span></div>
        </div>
      ),
      technologies: ["Express.js", "Firebase", "Google Gemini", "JavaScript", "Node.js", "React.js", "Redux.js", "NLP", "AWS Amplify"],
      githubUrl: "https://github.com/tiffany-mares/bee-my-tutor",
      liveUrl: "https://main.d2hm05foqgtggx.amplifyapp.com/",
      image: "🐝"
    },
    {
      title: "College of Computing Student Council Website",
      description: (
        <div className="space-y-2">
          <div>• Developed and deployed a <span className="text-blue-400 font-medium">fully responsive, accessible website</span> that is <span className="text-blue-400 font-medium">LIVE WITH 1,000+ daily users</span>, centralizing council updates, event information, resources, and contact details for students</div>
          <div>• Implemented <span className="text-blue-400 font-medium">modular, reusable React components</span> with <span className="text-blue-400 font-medium">Vite</span> for a fast development workflow (instant HMR & optimized builds), ensuring <span className="text-blue-400 font-medium">scalability and maintainability</span></div>
          <div>• Built a <span className="text-blue-400 font-medium">reusable component library</span> and applied <span className="text-blue-400 font-medium">responsive, mobile-first design</span> with semantic HTML5, CSS3 flex/grid layouts, and <span className="text-blue-400 font-medium">accessibility best practices</span> for inclusive user experience</div>
          <div>• Enhanced <span className="text-blue-400 font-medium">discoverability with SEO-friendly metadata</span> and <span className="text-blue-400 font-medium">semantic markup</span> while maintaining a <span className="text-blue-400 font-medium">WCAG-compliant UI</span> for accessibility</div>
          <div>• Configured <span className="text-blue-400 font-medium">ESLint and Prettier</span> for consistent, high-quality code formatting and static analysis</div>
          <div>• Optimized performance through <span className="text-blue-400 font-medium">code-splitting and asset bundling</span>, improving load speed and mobile accessibility</div>
        </div>
      ),
      technologies: ["React.js", "Vite", "JavaScript (ES6+)", "HTML5", "CSS3 (Flexbox & Grid)", "ESLint", "Prettier"],
      githubUrl: "https://github.com/tiffany-mares/student-council-website",
      liveUrl: "https://cepssc.com/",
      image: "/lovable-uploads/d5ab44e8-3712-427b-8f0f-5622180272e2.png"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-primary animate-glow">Projects 🚀</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of projects demonstrating my expertise in cloud development, machine learning integration, 
          and full-stack web application development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="bg-card/50 backdrop-blur-sm border-border hover:shadow-[var(--card-glow)] transition-all duration-300 group"
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">
                    {project.image.startsWith('/') ? (
                      <img src={project.image} alt={`${project.title} logo`} className="w-12 h-12 object-contain" />
                    ) : (
                      project.image
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="hover:text-primary"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.title === "College of Computing Student Council Website" ? "Live Website" : "Live Demo"}
                  </Button>
                </div>
              </div>
              <div className="text-muted-foreground">
                {project.description}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
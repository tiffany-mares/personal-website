import { ExternalLink, Github } from "lucide-react";
import RetroWindow from "@/components/RetroWindow";

const Projects = () => {
  const projects = [
    {
      title: "Bee My Tutor",
      description: (
        <div className="space-y-2">
          <div>• Developed a <span className="text-pink font-bold">full-stack web application</span> enabling students to identify <span className="text-pink font-bold">learning styles</span>, generate <span className="text-pink font-bold">AI-powered study plans</span>, and take <span className="text-pink font-bold">dynamically generated quizzes</span> based on uploaded study materials</div>
          <div>• Implemented <span className="text-pink font-bold">Natural Language Processing (NLP)</span> to extract key points, summaries, and metadata from documents, enhancing <span className="text-pink font-bold">quiz relevance and personalization</span></div>
          <div>• Integrated <span className="text-pink font-bold">Firebase</span> for authentication, <span className="text-pink font-bold">real-time data storage</span>, and <span className="text-pink font-bold">cloud functions</span>, enabling secure and scalable backend operations</div>
          <div>• Optimized application performance by implementing <span className="text-pink font-bold">efficient state updates</span>, <span className="text-pink font-bold">asynchronous data fetching</span>, and <span className="text-pink font-bold">modular component architecture</span></div>
        </div>
      ),
      technologies: ["Express.js", "Firebase", "Google Gemini", "JavaScript", "Node.js", "React.js", "Redux.js", "NLP", "AWS Amplify"],
      githubUrl: "https://github.com/tiffany-mares/bee-my-tutor",
      liveUrl: "https://main.d2hm05foqgtggx.amplifyapp.com/",
      image: ""
    },
    {
      title: "College of Computing Student Council Website",
      description: (
        <div className="space-y-2">
          <div>• Developed and deployed a <span className="text-pink font-bold">fully responsive, accessible website</span> that is <span className="text-pink font-bold">LIVE WITH 1,000+ daily users</span>, centralizing council updates, event information, resources, and contact details for students</div>
          <div>• Implemented <span className="text-pink font-bold">modular, reusable React components</span> with <span className="text-pink font-bold">Vite</span> for a fast development workflow (instant HMR & optimized builds), ensuring <span className="text-pink font-bold">scalability and maintainability</span></div>
          <div>• Built a <span className="text-pink font-bold">reusable component library</span> and applied <span className="text-pink font-bold">responsive, mobile-first design</span> with semantic HTML5, CSS3 flex/grid layouts, and <span className="text-pink font-bold">accessibility best practices</span> for inclusive user experience</div>
          <div>• Enhanced <span className="text-pink font-bold">discoverability with SEO-friendly metadata</span> and <span className="text-pink font-bold">semantic markup</span> while maintaining a <span className="text-pink font-bold">WCAG-compliant UI</span> for accessibility</div>
          <div>• Configured <span className="text-pink font-bold">ESLint and Prettier</span> for consistent, high-quality code formatting and static analysis</div>
          <div>• Optimized performance through <span className="text-pink font-bold">code-splitting and asset bundling</span>, improving load speed and mobile accessibility</div>
        </div>
      ),
      technologies: ["React.js", "Vite", "JavaScript (ES6+)", "HTML5", "CSS3 (Flexbox & Grid)", "ESLint", "Prettier"],
      githubUrl: "https://github.com/tiffany-mares/student-council-website",
      liveUrl: "https://cepssc.com/",
      image: "/lovable-uploads/d5ab44e8-3712-427b-8f0f-5622180272e2.png"
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="retro-banner text-3xl md:text-4xl">Projects</h2>
        <p className="text-navy font-semibold max-w-2xl mx-auto bg-card/70 border-2 border-navy rounded-sm px-4 py-2 shadow-pixel-sm">
          A showcase of projects demonstrating my expertise in cloud development, machine learning integration,
          and full-stack web application development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <RetroWindow key={index} title={project.title.toLowerCase().includes("college") ? "council-website.html" : "bee-my-tutor.app"}>
            <div className="flex items-start justify-between mb-4 gap-3">
              <div className="flex items-center gap-3">
                {project.image.startsWith("/") && (
                  <div className="shrink-0">
                    <img src={project.image} alt={`${project.title} logo`} className="w-12 h-12 object-contain" />
                  </div>
                )}
                <h3 className="font-pixel text-lg text-navy leading-snug">{project.title}</h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <button onClick={() => window.open(project.githubUrl, "_blank")} className="retro-btn text-xs">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </button>
              <button onClick={() => window.open(project.liveUrl, "_blank")} className="retro-btn text-xs">
                <ExternalLink className="w-4 h-4 mr-2" />
                {project.title === "College of Computing Student Council Website" ? "Live Website" : "Live Demo"}
              </button>
            </div>

            <div className="text-card-foreground text-sm leading-relaxed mb-4">{project.description}</div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="retro-badge">
                  {tech}
                </span>
              ))}
            </div>
          </RetroWindow>
        ))}
      </div>
    </div>
  );
};

export default Projects;

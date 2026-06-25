import { ExternalLink, Github } from "lucide-react";
import RetroWindow from "@/components/RetroWindow";
import TypewriterTitle from "@/components/TypewriterTitle";

const Projects = () => {
  const projects = [
    {
      title: "College of Computing Student Council Website",
      description: (
        <div>
          The official website for the <span className="text-pink font-bold">University of Guelph College of Computing Student Council</span>, serving <span className="text-pink font-bold">2,000+ users</span>.
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
        <TypewriterTitle text="Projects" className="retro-banner text-3xl md:text-4xl" />
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

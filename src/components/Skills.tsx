import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Java", "C", "SQL", "JavaScript (ES6+)", "HTML5", "CSS3 (Flexbox & Grid)", "Node.js", "Express.js", "React.js", "Redux.js", "Assembly", "Fortran", "Ada", "COBOL"]
    },
    {
      title: "Cloud & Development",
      icon: "☁️",
      skills: ["Microsoft Azure", "AWS", "EC2", "S3", "Lambda", "DynamoDB", "API Gateway", "Amplify", "SageMaker", "Azure ML", "Azure DevOps", "Azure Functions", "Logic Apps", "Cosmos DB", "Blob Storage", "Firebase", "Terraform"]
    },
    {
      title: "Mainframe & Enterprise",
      icon: "🏛️",
      skills: ["IBM Z", "z/OS", "JCL", "RACF", "CICS", "IMS", "Db2", "MQ", "COBOL", "REXX"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Vite", "ESLint", "Prettier", "Jira", "Confluence", "PlantUML", "Microsoft Visio", "Terraform", "Angular CLI"]
    },
    {
      title: "Data & ML",
      icon: "📊",
      skills: ["Neural Networks", "Decision Trees", "Random Forest", "Generative AI", "Google Gemini", "Natural Language Processing", "TensorFlow", "Model Evaluation", "SQL Analytics", "Real-time Data Processing"]
    },
    {
      title: "Software Architecture",
      icon: "🏗️",
      skills: ["Technical Design", "Architecture Documentation", "PlantUML", "Microsoft Visio", "DevOps Best Practices", "System Scalability", "Microservices", "Load Balancing", "Caching Strategies"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary animate-glow">
            Skills & Technologies ⚡
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--card-glow)] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always excited to learn new technologies and tackle challenging problems. Currently exploring 
              <span className="text-primary font-semibold"> advanced cloud architectures</span>, <span className="text-primary font-semibold">AI/ML integration patterns</span>, 
              and <span className="text-primary font-semibold">enterprise modernization strategies</span>! 🔥
            </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
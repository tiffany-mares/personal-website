import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "BMO",
      role: "Cloud Developer",
      period: "May 2025 - Dec 2025",
      location: "Toronto, ON",
      description: "• Built <span class='text-primary font-bold'>Rovr GenAI Insurance Chatbot</span>\n• Developed intelligent, cloud-native applications on <span class='text-primary font-bold'>Microsoft Azure</span> and <span class='text-primary font-bold'>AWS</span>, integrating ML models via <span class='text-primary font-bold'>Azure ML</span> and <span class='text-primary font-bold'>AWS SageMaker</span> for real-time predictions and analytics, improving model prediction accuracy by <span class='text-primary font-bold'>30%</span>\n• Reduced release cycle time by <span class='text-primary font-bold'>50%</span> by automating ML deployment workflows using <span class='text-primary font-bold'>Azure DevOps</span>, <span class='text-primary font-bold'>Terraform</span>, and <span class='text-primary font-bold'>AWS Lambda</span>\n• Shipped full-stack features end-to-end, building frontend flows and backend APIs that boosted user engagement by <span class='text-primary font-bold'>20%</span> within the first month of launch\n• Accelerated internal developer adoption by <span class='text-primary font-bold'>30%</span> by creating and documenting a <span class='text-primary font-bold'>GraphQL API</span> used by <span class='text-primary font-bold'>5+ teams</span>\n• Debugged live issues in a production system with <span class='text-primary font-bold'>10,000+ real-time users</span>\n• Boosted system performance by <span class='text-primary font-bold'>40%</span> by implementing <span class='text-primary font-bold'>caching strategies</span>, <span class='text-primary font-bold'>database indexing</span>, and <span class='text-primary font-bold'>load balancing</span>\n• Delivered scalable, secure ML-backed services by integrating <span class='text-primary font-bold'>Azure Functions</span>, <span class='text-primary font-bold'>Logic Apps</span>, <span class='text-primary font-bold'>Cosmos DB</span>, <span class='text-primary font-bold'>Blob Storage</span>, <span class='text-primary font-bold'>AWS DynamoDB</span>, and <span class='text-primary font-bold'>API Gateway</span>\n• Enhanced backend reliability by writing <span class='text-primary font-bold'>100+ unit tests</span>, increasing code stability and test coverage",
      technologies: ["Microsoft Azure", "AWS", "Azure ML", "AWS SageMaker", "Azure DevOps", "Terraform", "AWS Lambda", "GraphQL", "Azure Functions", "Logic Apps", "Cosmos DB", "Blob Storage", "AWS DynamoDB", "API Gateway"],
      logo: "/lovable-uploads/8ed4bd74-66c5-425d-b27e-cac24f05ff6e.png"
    },
    {
      company: "BMO",
      role: "Database Analyst",
      period: "May 2024 - Sep 2024",
      location: "Toronto, ON",
      description: "• Reduced user support inquiries by <span class='text-primary font-bold'>30%</span> by analyzing application workflows and creating detailed documentation and user guides for databases and data-driven software systems\n• Accelerated design cycles by <span class='text-primary font-bold'>15%</span> by creating and reviewing <span class='text-primary font-bold'>20+ architecture and technical design documents</span> using <span class='text-primary font-bold'>Microsoft Visio</span> and <span class='text-primary font-bold'>PlantUML</span> to guide software and data pipeline development\n• Increased analysis efficiency by <span class='text-primary font-bold'>25%</span> by automating recurring data processing tasks and optimizing <span class='text-primary font-bold'>CI/CD pipelines</span> to reduce manual intervention\n• Enabled predictive insights and reporting by applying <span class='text-primary font-bold'>Python</span> and <span class='text-primary font-bold'>SQL</span> to automate analysis and support real-time data needs\n• Contributed to system reliability and scalability by collaborating on architecture decisions involving <span class='text-primary font-bold'>database optimization</span> and <span class='text-primary font-bold'>DevOps best practices</span>",
      technologies: ["Python", "SQL", "Microsoft Visio", "PlantUML", "CI/CD Pipelines", "Database Optimization", "DevOps"],
      logo: "/lovable-uploads/8ed4bd74-66c5-425d-b27e-cac24f05ff6e.png"
    },
    {
      company: "Elearning Engaged",
      role: "Web Developer",
      period: "Summer 2023",
      location: "Mississauga, ON",
      description: "• Revamped company website with <span class='text-primary font-bold'>modern design</span> and <span class='text-primary font-bold'>user-friendly interface</span>\n• Utilized <span class='text-primary font-bold'>Jira & Confluence</span> project management software to successfully complete projects on time\n• Conducted data analysis using <span class='text-primary font-bold'>Python</span> to identify key trends and insights, leading to a <span class='text-primary font-bold'>10%</span> improvement in decision-making processes\n• Utilized advanced <span class='text-primary font-bold'>Excel functions</span> to create detailed models and reports, resulting in a <span class='text-primary font-bold'>15%</span> increase in data accuracy and efficiency\n• Developed interactive dashboards with diagrams, graphs, and charts to visualize <span class='text-primary font-bold'>website traffic patterns</span> and <span class='text-primary font-bold'>user behavior</span>",
      technologies: ["Python", "Microsoft Excel", "Jira", "Confluence", "HTML", "CSS", "JavaScript", "Data Analysis", "Dashboard Development"],
      logo: "/lovable-uploads/97c40e69-1514-44fe-9d31-ed178d4243a6.png"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary animate-glow">
            Work Experience 💼
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`p-8 bg-card/50 border-border transition-all duration-300 hover:shadow-[var(--card-glow)] group ${
                index === 0 || index === 1 || index === 2 ? 'cursor-pointer hover:scale-105 hover:border-primary/50 hover:bg-primary/5 hover:shadow-xl' : 'hover:border-primary/50'
              }`}
              onClick={
                index === 0 ? () => window.open('https://www.linkedin.com/posts/tiffanymares_bmo-clouddeveloper-coopexperience-activity-7361697225447518209-FFlM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg', '_blank') :
                index === 1 ? () => window.open('https://www.linkedin.com/posts/tiffanymares_bmostudentambassador-proudtoworkatbmo-activity-7201653557161320448-Lw8t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg', '_blank') :
                index === 2 ? () => window.open('https://www.linkedin.com/company/e-learningengaged/posts/?feedView=all', '_blank') :
                undefined
              }
            >
              {(index === 0 || index === 1) && (
                <div className="mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const url = index === 0 
                        ? 'https://www.linkedin.com/posts/tiffanymares_bmo-clouddeveloper-coopexperience-activity-7361697225447518209-FFlM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg'
                        : 'https://www.linkedin.com/posts/tiffanymares_bmostudentambassador-proudtoworkatbmo-activity-7201653557161320448-Lw8t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg';
                      window.open(url, '_blank');
                    }}
                    className="hover:text-primary w-full"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View My LinkedIn Post
                  </Button>
                </div>
              )}
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors duration-300 overflow-hidden">
                    {exp.logo.includes('.png') ? (
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      exp.logo
                    )}
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end gap-1">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-muted-foreground leading-relaxed space-y-1">
                    {exp.description.split('\n').map((point, index) => (
                      <div key={index} dangerouslySetInnerHTML={{ __html: point }} />
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
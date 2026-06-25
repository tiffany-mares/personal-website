import { ArrowRight, Calendar, MapPin } from "lucide-react";
import TypewriterTitle from "@/components/TypewriterTitle";

const Experience = () => {
  const experiences = [
    {
      company: "BMO",
      tag: "bmo",
      role: "Cloud Developer",
      date: "2025/12",
      period: "May 2025 - Dec 2025",
      location: "Toronto, ON",
      technologies: ["Microsoft Azure", "AWS", "Azure ML", "AWS SageMaker", "Azure DevOps", "Terraform", "AWS Lambda", "GraphQL", "Azure Functions", "Logic Apps", "Cosmos DB", "Blob Storage", "AWS DynamoDB", "API Gateway"],
      logo: "/lovable-uploads/8ed4bd74-66c5-425d-b27e-cac24f05ff6e.png",
      link: "https://www.linkedin.com/posts/tiffanymares_bmo-clouddeveloper-coopexperience-activity-7361697225447518209-FFlM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg",
      linkLabel: "Read the LinkedIn Post"
    },
    {
      company: "BMO",
      tag: "bmo",
      role: "Database Analyst",
      date: "2024/9",
      period: "May 2024 - Sep 2024",
      location: "Toronto, ON",
      technologies: ["Python", "SQL", "Microsoft Visio", "PlantUML", "CI/CD Pipelines", "Database Optimization", "DevOps"],
      logo: "/lovable-uploads/8ed4bd74-66c5-425d-b27e-cac24f05ff6e.png",
      link: "https://www.linkedin.com/posts/tiffanymares_bmostudentambassador-proudtoworkatbmo-activity-7201653557161320448-Lw8t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg",
      linkLabel: "Read the LinkedIn Post"
    },
    {
      company: "Elearning Engaged",
      tag: "elearning",
      role: "Web Developer",
      date: "2023/8",
      period: "Summer 2023",
      location: "Mississauga, ON",
      technologies: ["Python", "Microsoft Excel", "Jira", "Confluence", "HTML", "CSS", "JavaScript", "Data Analysis", "Dashboard Development"],
      logo: "/lovable-uploads/97c40e69-1514-44fe-9d31-ed178d4243a6.png",
      link: "https://www.linkedin.com/company/e-learningengaged/posts/?feedView=all",
      linkLabel: "View on LinkedIn"
    }
  ];

  return (
    <section id="experience" className="relative">
      <div className="text-center mb-12">
        <TypewriterTitle text="Work Experience" className="retro-banner text-3xl md:text-4xl" />
      </div>

      <div className="max-w-2xl mx-auto retro-window p-6 md:p-8">
        <div className="relative pl-9">
          {/* Timeline spine */}
          <div className="absolute left-[5px] top-1 bottom-1 w-[2px] bg-navy/70" aria-hidden="true" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Node */}
                <div
                  className="absolute -left-[37px] top-1.5 h-3 w-3 rotate-45 border-2 border-navy bg-pink"
                  aria-hidden="true"
                />

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-12 w-12 flex-shrink-0 overflow-hidden rounded-sm border-2 border-navy bg-blush">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-pixel text-xl md:text-2xl text-navy leading-tight">{exp.role}</h3>
                      <p className="font-pixel text-lg text-pink">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-card-foreground/80">
                    <span className="flex items-center gap-1">
                      <Calendar size={15} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={15} />
                      {exp.location}
                    </span>
                  </div>

                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-pixel text-base text-pink hover:text-navy transition-colors"
                  >
                    <ArrowRight size={16} />
                    {exp.linkLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

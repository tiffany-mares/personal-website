import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";

const Organizations = () => {
  const organizations = [
    {
      name: "Cloud Computing Club",
      role: "President",
      period: "August 2025 – Present",
      location: "University of Guelph",
      description: (
        <div className="space-y-2">
          <div>• Founded and scaled the university's first <span className="text-blue-400 font-medium">Cloud Computing Club</span>, growing a community of <span className="text-blue-400 font-medium">40+ students</span></div>
          <div>• Organized workshops on <span className="text-blue-400 font-medium">AWS, Azure, and Google Cloud</span>, teaching <span className="text-blue-400 font-medium">serverless, AI/ML, and DevOps practices</span></div>
          <div>• Built partnerships with <span className="text-blue-400 font-medium">industry professionals and student councils</span> to host speaker events and mentorship programs</div>
          <div>• Guided peers through <span className="text-blue-400 font-medium">certifications, resume projects, and hackathon prep</span>, bridging theory with applied cloud skills</div>
          <div>• Promoted <span className="text-blue-400 font-medium">accessible, inclusive learning environments</span> that foster collaboration and peer mentorship</div>
        </div>
      ),
      type: "Leadership",
      logo: "/lovable-uploads/cloud-computing-club-logo.png"
    },
    {
      name: "Guelph Women in Computer Science",
      role: "President",
      period: "September 2025 – Present",
      location: "University of Guelph",
      description: (
        <div className="space-y-2">
          <div>• Lead <span className="text-blue-400 font-medium">executive team</span> and oversee all <span className="text-blue-400 font-medium">club operations & strategic direction</span></div>
          <div>• Organized <span className="text-blue-400 font-medium">mentorship circles, technical workshops, and networking panels</span> with industry professionals</div>
          <div>• Fostered <span className="text-blue-400 font-medium">inclusive spaces</span> for women and gender-minority students in computing</div>
          <div>• Advocated for <span className="text-blue-400 font-medium">equity and representation in Computer Science</span> through collaboration with faculty and student councils</div>
          <div>• Created <span className="text-blue-400 font-medium">professional development opportunities</span> (career talks, skills workshops, resume reviews)</div>
          <div>• Built <span className="text-blue-400 font-medium">partnerships with external organizations</span> to expand resources and opportunities for members</div>
        </div>
      ),
      type: "Leadership",
      logo: "/lovable-uploads/gwics-logo.png"
    },
    {
      name: "IBM Z Student Ambassador Program",
      role: "IBM Z Student Ambassador",
      period: "July 2025 - Present",
      location: "Global Program",
      description: (
        <div className="space-y-2">
          <div>• Represented <span className="text-blue-400 font-medium">IBM Z</span> on campus by hosting workshops and info sessions on <span className="text-blue-400 font-medium">mainframe and enterprise computing</span></div>
          <div>• Organized events with <span className="text-blue-400 font-medium">IBM speakers</span> to introduce students to <span className="text-blue-400 font-medium">COBOL, JCL, and enterprise systems</span></div>
          <div>• Advocated for <span className="text-blue-400 font-medium">digital accessibility and inclusivity</span> in tech, building student interest in <span className="text-blue-400 font-medium">mainframe and cloud careers</span></div>
          <div>• Collaborated with <span className="text-blue-400 font-medium">IBM professionals and ambassadors</span> to deliver hands-on learning, hackathons, and certification paths</div>
          <div>• Gained practical experience with <span className="text-blue-400 font-medium">z/OS, RACF, and enterprise computing</span> while mentoring peers in <span className="text-blue-400 font-medium">IBM Z technology</span></div>
        </div>
      ),
      type: "Ambassador",
      logo: "/lovable-uploads/184be785-e1c4-4551-a551-c100016ce7aa.png"
    },
    {
      name: "College of Computing",
      role: "Vice President of Communications",
      period: "May 2025 - May 2026",
      location: "University of Guelph",
      description: (
        <div className="space-y-2">
          <div>• Built and launched the <span className="text-blue-400 font-medium">official <a href="https://cepssc.com/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">College of Computing Student Council website <ExternalLink className="w-3 h-3" /></a></span> to centralize event information, resources, and announcements, increasing <span className="text-blue-400 font-medium">student engagement and accessibility</span></div>
          <div>• Directed all <span className="text-blue-400 font-medium">communication strategies</span> for <span className="text-blue-400 font-medium">2,000+ computing students</span>, ensuring clear, consistent, and engaging messaging across email, social media, and events</div>
          <div>• Collaborated with executives and faculty to promote academic, professional development, and networking opportunities</div>
          <div>• Managed branding, digital content, and marketing initiatives to strengthen student engagement and visibility of <span className="text-blue-400 font-medium">computing programs</span></div>
          <div>• Coordinated communication between student organizations, committees, and leadership to streamline collaboration and increase campus impact</div>
        </div>
      ),
      type: "Academic",
      logo: "/lovable-uploads/93a557af-5225-4bb9-948e-a4e39c5d8e44.png"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Leadership: "bg-primary/20 text-primary border-primary/30",
      Development: "bg-accent/20 text-accent border-accent/30",
      Volunteer: "bg-green-500/20 text-green-400 border-green-500/30",
      Academic: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      Ambassador: "bg-blue-500/20 text-blue-400 border-blue-500/30"
    };
    return colors[type as keyof typeof colors] || "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-primary animate-glow">Leadership 🌟</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My leadership roles and involvement in academic and professional organizations that drive innovation 
          and promote diversity in technology.
        </p>
      </div>

      <div className="space-y-6">
        {organizations.map((org, index) => (
           <Card 
             key={index} 
              className={`bg-card/50 backdrop-blur-sm border-border hover:shadow-[var(--card-glow)] transition-all duration-300 ${
                org.name === "College of Computing" || org.name === "Guelph Women in Computer Science" || org.name === "Cloud Computing Club" || org.name === "IBM Z Student Ambassador Program"
                  ? "cursor-pointer hover:scale-105 hover:border-primary/50 hover:bg-primary/5 hover:shadow-xl" 
                  : ""
              }`}
              onClick={
                org.name === "College of Computing" 
                  ? () => window.open("https://www.linkedin.com/company/uog-cepssc/posts/?feedView=all", "_blank")
                  : org.name === "Guelph Women in Computer Science"
                  ? () => window.open("https://www.linkedin.com/posts/tiffanymares_leadership-womeninstem-wics-activity-7376057599152218113-owSW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg", "_blank")
                  : org.name === "Cloud Computing Club"
                  ? () => window.open("https://www.linkedin.com/posts/tiffanymares_cloudcomputing-ai-aws-activity-7376078359983943680-LU8n/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg", "_blank")
                  : org.name === "IBM Z Student Ambassador Program"
                  ? () => window.open("https://www.linkedin.com/company/ibm-z-student-ambassador/posts/?feedView=all", "_blank")
                  : undefined
              }
           >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    {org.logo.startsWith('/') ? (
                      <img 
                        src={org.logo} 
                        alt={`${org.name} logo`} 
                        className="w-10 h-10 object-contain rounded-full bg-white/10 p-1"
                      />
                    ) : (
                      <span className="text-4xl">{org.logo}</span>
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">
                      {org.name}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground">
                      {org.role}
                    </CardDescription>
                  </div>
                </div>
                <Badge className={`${getTypeColor(org.type)} border`}>
                  {org.type}
                </Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {org.period}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {org.location}
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              {org.name === "Cloud Computing Club" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mb-4 w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://www.linkedin.com/posts/tiffanymares_cloudcomputing-ai-aws-activity-7376078359983943680-LU8n/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg", "_blank");
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View My LinkedIn Post
                </Button>
              )}
              {org.name === "Guelph Women in Computer Science" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mb-4 w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://www.linkedin.com/posts/tiffanymares_leadership-womeninstem-wics-activity-7376057599152218113-owSW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg", "_blank");
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View My LinkedIn Post
                </Button>
              )}
              <div className="text-foreground leading-relaxed">{org.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Organizations;
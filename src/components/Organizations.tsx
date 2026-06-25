import { Calendar, MapPin, ExternalLink } from "lucide-react";
import RetroWindow from "@/components/RetroWindow";
import TypewriterTitle from "@/components/TypewriterTitle";

const Organizations = () => {
  const organizations = [
    {
      name: "Cloud Computing Club",
      role: "President",
      period: "August 2025 – Present",
      location: "University of Guelph",
      description: (
        <div className="space-y-2">
          <div>• Founded and scaled the university's first <span className="text-pink font-bold">Cloud Computing Club</span>, growing a community of <span className="text-pink font-bold">40+ students</span></div>
          <div>• Organized workshops on <span className="text-pink font-bold">AWS, Azure, and Google Cloud</span>, teaching <span className="text-pink font-bold">serverless, AI/ML, and DevOps practices</span></div>
          <div>• Built partnerships with <span className="text-pink font-bold">industry professionals and student councils</span> to host speaker events and mentorship programs</div>
          <div>• Guided peers through <span className="text-pink font-bold">certifications, resume projects, and hackathon prep</span>, bridging theory with applied cloud skills</div>
          <div>• Promoted <span className="text-pink font-bold">accessible, inclusive learning environments</span> that foster collaboration and peer mentorship</div>
        </div>
      ),
      type: "Leadership",
      logo: "/lovable-uploads/cloud-computing-club-logo.png",
      link: "https://www.linkedin.com/posts/tiffanymares_cloudcomputing-ai-aws-activity-7376078359983943680-LU8n/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg",
      showButton: true
    },
    {
      name: "Guelph Women in Computer Science",
      role: "President",
      period: "September 2025 – Present",
      location: "University of Guelph",
      description: (
        <div className="space-y-2">
          <div>• Lead <span className="text-pink font-bold">executive team</span> and oversee all <span className="text-pink font-bold">club operations & strategic direction</span></div>
          <div>• Organized <span className="text-pink font-bold">mentorship circles, technical workshops, and networking panels</span> with industry professionals</div>
          <div>• Fostered <span className="text-pink font-bold">inclusive spaces</span> for women and gender-minority students in computing</div>
          <div>• Advocated for <span className="text-pink font-bold">equity and representation in Computer Science</span> through collaboration with faculty and student councils</div>
          <div>• Created <span className="text-pink font-bold">professional development opportunities</span> (career talks, skills workshops, resume reviews)</div>
          <div>• Built <span className="text-pink font-bold">partnerships with external organizations</span> to expand resources and opportunities for members</div>
        </div>
      ),
      type: "Leadership",
      logo: "/lovable-uploads/gwics-logo.png",
      link: "https://www.linkedin.com/posts/tiffanymares_leadership-womeninstem-wics-activity-7376057599152218113-owSW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg",
      showButton: true
    },
    {
      name: "IBM Z Student Ambassador Program",
      role: "IBM Z Student Ambassador",
      period: "July 2025 - Present",
      location: "Global Program",
      description: (
        <div className="space-y-2">
          <div>• Represented <span className="text-pink font-bold">IBM Z</span> on campus by hosting workshops and info sessions on <span className="text-pink font-bold">mainframe and enterprise computing</span></div>
          <div>• Organized events with <span className="text-pink font-bold">IBM speakers</span> to introduce students to <span className="text-pink font-bold">COBOL, JCL, and enterprise systems</span></div>
          <div>• Advocated for <span className="text-pink font-bold">digital accessibility and inclusivity</span> in tech, building student interest in <span className="text-pink font-bold">mainframe and cloud careers</span></div>
          <div>• Collaborated with <span className="text-pink font-bold">IBM professionals and ambassadors</span> to deliver hands-on learning, hackathons, and certification paths</div>
          <div>• Gained practical experience with <span className="text-pink font-bold">z/OS, RACF, and enterprise computing</span> while mentoring peers in <span className="text-pink font-bold">IBM Z technology</span></div>
        </div>
      ),
      type: "Ambassador",
      logo: "/lovable-uploads/184be785-e1c4-4551-a551-c100016ce7aa.png",
      link: "https://www.linkedin.com/company/ibm-z-student-ambassador/posts/?feedView=all",
      showButton: false
    },
    {
      name: "College of Computing",
      role: "Vice President of Communications",
      period: "May 2025 - May 2026",
      location: "University of Guelph",
      description: (
        <div className="space-y-2">
          <div>• Built and launched the <span className="text-pink font-bold">official <a href="https://cepssc.com/" target="_blank" rel="noopener noreferrer" className="underline inline-flex items-center gap-1">College of Computing Student Council website <ExternalLink className="w-3 h-3" /></a></span> to centralize event information, resources, and announcements, increasing <span className="text-pink font-bold">student engagement and accessibility</span></div>
          <div>• Directed all <span className="text-pink font-bold">communication strategies</span> for <span className="text-pink font-bold">2,000+ computing students</span>, ensuring clear, consistent, and engaging messaging across email, social media, and events</div>
          <div>• Collaborated with executives and faculty to promote academic, professional development, and networking opportunities</div>
          <div>• Managed branding, digital content, and marketing initiatives to strengthen student engagement and visibility of <span className="text-pink font-bold">computing programs</span></div>
          <div>• Coordinated communication between student organizations, committees, and leadership to streamline collaboration and increase campus impact</div>
        </div>
      ),
      type: "Academic",
      logo: "/lovable-uploads/93a557af-5225-4bb9-948e-a4e39c5d8e44.png",
      link: "https://www.linkedin.com/company/uog-cepssc/posts/?feedView=all",
      showButton: false
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <TypewriterTitle text="Leadership" className="retro-banner text-3xl md:text-4xl" />
      </div>

      <div className="space-y-6">
        {organizations.map((org, index) => (
          <RetroWindow key={index} title={`${org.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`} onClick={() => window.open(org.link, "_blank")}>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-navy rounded-sm bg-blush overflow-hidden">
                  {org.logo.startsWith("/") ? (
                    <img src={org.logo} alt={`${org.name} logo`} className="w-full h-full object-contain p-1 bg-white" />
                  ) : (
                    <span className="text-3xl">{org.logo}</span>
                  )}
                </div>
                <div>
                  <h3 className="font-pixel text-lg text-navy leading-snug">{org.name}</h3>
                  <p className="text-base font-bold text-pink">{org.role}</p>
                </div>
              </div>
              <span className="retro-badge bg-lavender/60">{org.type}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-card-foreground/70 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {org.period}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {org.location}
              </div>
            </div>

            {org.showButton && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(org.link, "_blank");
                }}
                className="retro-btn text-xs w-full mb-4"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View My LinkedIn Post
              </button>
            )}

            <div className="text-card-foreground text-sm leading-relaxed">{org.description}</div>
          </RetroWindow>
        ))}
      </div>
    </div>
  );
};

export default Organizations;

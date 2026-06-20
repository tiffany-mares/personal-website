import { Award, Calendar, ExternalLink, Trophy } from "lucide-react";
import RetroWindow from "@/components/RetroWindow";
const Certifications = () => {
  const certifications = [{
    title: "IBM Z Xplore Concepts Badge",
    issuer: "IBM",
    date: "2025",
    status: "Active",
    description: "Recognition badge demonstrating understanding of IBM Z mainframe concepts and technologies",
    skills: ["IBM Z", "z/OS", "JCL", "RACF", "CICS", "IMS", "Db2", "MQ", "COBOL", "REXX"],
    credentialUrl: "https://www.credly.com/badges/0c9ade46-9ebd-4c64-b1f8-a2402d18f3a2/public_url",
    badgeImg: "/lovable-uploads/343292da-0392-43e1-b819-243e9527de88.png",
    badgeLabel: "View My Credly Badge from IBM"
  }, {
    title: "BMO AI for All",
    issuer: "BMO",
    date: "2025",
    status: "Active",
    description: "Demonstrated understanding of AI/ML fundamentals, explored ethical considerations and trustworthiness in AI systems, applied AI tools for data-driven problem solving, and equipped to support responsible AI initiatives",
    skills: ["AI/ML", "Machine Learning", "Artificial Intelligence", "Ethics in AI", "Data Science", "Problem Solving", "Responsible AI"],
    credentialUrl: "https://www.credly.com/badges/45c43414-a4a5-4172-a7aa-3640e6bda319/public_url",
    badgeImg: "/lovable-uploads/bmo-ai-for-all-badge.png",
    badgeLabel: "View My Credly Badge from BMO"
  }];
  return <div>
      <div className="text-center mb-12">
        <h2 className="retro-banner text-3xl md:text-4xl">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {certifications.map(cert => <RetroWindow key={cert.title} title={`${cert.issuer.toLowerCase()}-badge.crt`} onClick={() => window.open(cert.credentialUrl, "_blank")}>
              <div className="mb-4">
                <button onClick={e => {
              e.stopPropagation();
              window.open(cert.credentialUrl, '_blank');
            }} className="retro-btn text-xs w-full">
                  <Trophy className="w-4 h-4 mr-2" />
                  {cert.badgeLabel}
                </button>
              </div>
              <div className="flex items-start justify-between mb-3 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-sm border-2 border-navy bg-blush flex items-center justify-center overflow-hidden">
                    {cert.badgeImg ? <img src={cert.badgeImg} alt={`${cert.title} badge`} className="w-full h-full object-cover" /> : <Award className="text-pink" size={20} />}
                  </div>
                  <span className="retro-badge bg-lavender/60">{cert.status}</span>
                </div>
                <ExternalLink size={16} className="text-navy" />
              </div>

              <h3 className="font-pixel text-lg text-navy mb-2">{cert.title}</h3>

              <div className="flex items-center gap-2 text-card-foreground/70 text-sm mb-4">
                <span className="font-bold">{cert.issuer}</span>
                <Calendar size={14} />
                <span>{cert.date}</span>
              </div>

              <p className="text-card-foreground text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map(skill => <span key={skill} className="retro-badge">
                    {skill}
                  </span>)}
              </div>
            </RetroWindow>)}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-card border-2 border-navy shadow-pixel-sm">
          <div className="w-2 h-2 bg-pink rounded-none animate-twinkle"></div>
          <span className="text-navy font-pixel text-xs">Currently studying for AWS Certified Cloud Practitioner</span>
        </div>
      </div>
    </div>;
};
export default Certifications;
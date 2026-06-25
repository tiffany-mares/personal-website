import { ArrowRight, Calendar, Code2, Trophy } from "lucide-react";
import RetroWindow from "@/components/RetroWindow";
import TypewriterTitle from "@/components/TypewriterTitle";

const Hackathons = () => {
  const hackathons = [
    {
      title: "Hack the North",
      date: "Coming soon",
      result: "Participant",
      description:
        "Built a full-stack project in 36 hours with a small team, focusing on cloud deployment and a polished demo.",
      tags: ["React", "Cloud", "Teamwork"],
      tint: "bg-periwinkle"
    },
    {
      title: "AI / ML Hackathon",
      date: "Coming soon",
      result: "Finalist",
      description:
        "Prototyped an ML-powered tool that turned messy data into actionable insights under tight time constraints.",
      tags: ["Python", "Machine Learning", "Data"],
      tint: "bg-lavender"
    },
    {
      title: "Cloud Innovation Challenge",
      date: "Coming soon",
      result: "Participant",
      description:
        "Designed a serverless architecture on AWS/Azure and shipped a working proof-of-concept by the deadline.",
      tags: ["AWS", "Serverless", "Architecture"],
      tint: "bg-blush"
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <TypewriterTitle text="Hackathons" className="retro-banner text-3xl md:text-4xl" />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-card border-2 border-navy shadow-pixel-sm">
          <Trophy className="w-4 h-4 text-pink animate-twinkle" />
          <span className="text-navy font-pixel text-xs">More events on the way — stay tuned!</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hackathons.map((event) => (
          <RetroWindow key={event.title} title={`${event.title.toLowerCase().split(" ").slice(0, 2).join("-")}.exe`} bodyClassName="p-0">
            <div className={`h-16 ${event.tint} border-b-[3px] border-navy`} />
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-4 text-xs text-card-foreground/70">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5" />
                  {event.result}
                </span>
              </div>
              <h3 className="font-pixel text-base text-navy leading-snug">{event.title}</h3>
              <p className="text-sm text-card-foreground leading-relaxed">{event.description}</p>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <span key={tag} className="retro-badge">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-pixel text-card-foreground/60">
                <Code2 className="w-4 h-4" />
                Project showcase coming soon
              </div>
            </div>
          </RetroWindow>
        ))}
      </div>

      <div className="text-center">
        <button
          className="retro-btn text-sm"
          onClick={() => window.open("https://github.com/tiffany-mares", "_blank")}
        >
          See my projects on GitHub
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Hackathons;

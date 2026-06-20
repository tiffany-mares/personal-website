import { ArrowRight, Calendar, Clock, PenLine, Sparkles } from "lucide-react";
import RetroWindow from "@/components/RetroWindow";

const Blog = () => {
  const posts = [
    {
      title: "Breaking Into Cloud as a Student",
      excerpt:
        "How I went from curious beginner to AWS Cloud Club Captain — the certifications, projects, and mindset that made the difference.",
      date: "Coming soon",
      readTime: "6 min read",
      tags: ["Cloud", "Career", "AWS"],
      tint: "bg-periwinkle"
    },
    {
      title: "Bridging Mainframes & Modern Cloud",
      excerpt:
        "Lessons from being an IBM Z Student Ambassador on why COBOL and the cloud aren't as far apart as you think.",
      date: "Coming soon",
      readTime: "8 min read",
      tags: ["IBM Z", "Enterprise", "Modernization"],
      tint: "bg-lavender"
    },
    {
      title: "Building Inclusive Tech Communities",
      excerpt:
        "What leading GWICS and founding a Cloud Computing Club taught me about mentorship, belonging, and impact.",
      date: "Coming soon",
      readTime: "5 min read",
      tags: ["Leadership", "Community", "Women in STEM"],
      tint: "bg-blush"
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="retro-banner text-3xl md:text-4xl">Blog</h2>
        <p className="text-navy font-semibold max-w-2xl mx-auto bg-card/70 border-2 border-navy rounded-sm px-4 py-2 shadow-pixel-sm">
          Thoughts on cloud, machine learning, mainframes, and student leadership. New posts are
          on the way — here's a peek at what's coming.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-card border-2 border-navy shadow-pixel-sm">
          <Sparkles className="w-4 h-4 text-pink animate-twinkle" />
          <span className="text-navy font-pixel text-xs">Articles publishing soon — stay tuned!</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <RetroWindow key={post.title} title={`${post.title.toLowerCase().split(" ").slice(0, 2).join("-")}.md`} bodyClassName="p-0">
            <div className={`h-16 ${post.tint} border-b-[3px] border-navy`} />
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-4 text-xs text-card-foreground/70">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="font-pixel text-base text-navy leading-snug">{post.title}</h3>
              <p className="text-sm text-card-foreground leading-relaxed">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="retro-badge">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-pixel text-card-foreground/60">
                <PenLine className="w-4 h-4" />
                Draft in progress
              </div>
            </div>
          </RetroWindow>
        ))}
      </div>

      <div className="text-center">
        <button
          className="retro-btn text-sm"
          onClick={() => window.open("https://www.linkedin.com/in/tiffanymares/", "_blank")}
        >
          Follow along on LinkedIn
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Blog;

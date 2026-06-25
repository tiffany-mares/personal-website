import RetroWindow from "@/components/RetroWindow";
import TypewriterTitle from "@/components/TypewriterTitle";

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="text-center mb-12">
        <TypewriterTitle text="About Me" className="retro-banner text-3xl md:text-4xl" />
      </div>

      <div className="max-w-3xl mx-auto">
        <RetroWindow title="about-me.txt">
          <div className="space-y-5">
            <p className="text-base text-card-foreground leading-relaxed">
              I'm a highly efficient <span className="text-pink font-bold">Computer Science Student</span> skilled in
              cloud development, software architecture, and machine learning integration. As an experienced
              student leader established in fast-paced and challenging environments, I'm eager to learn
              with an aptitude for applying new knowledge!
            </p>

            <p className="text-base text-card-foreground leading-relaxed">
              Currently pursuing my <span className="text-pink font-bold">Bachelor of Computing in Computer Science Co-op
              with a Minor in Business</span> at the University of Guelph, I specialize in
              <span className="text-pink font-bold"> Microsoft Azure and AWS cloud solutions</span> and
              <span className="text-pink font-bold"> IBM Z mainframe systems</span>.
            </p>

            <p className="text-base text-card-foreground leading-relaxed">
              As <span className="text-pink font-bold underline decoration-2 underline-offset-2 cursor-pointer hover:text-navy transition-colors duration-200" onClick={() => window.open("https://www.linkedin.com/posts/tiffanymares_leadership-womeninstem-wics-activity-7376057599152218113-owSW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg", "_blank")}>President of Guelph Women in Computer Science (GWICS)</span>,
              <span className="text-pink font-bold underline decoration-2 underline-offset-2 cursor-pointer hover:text-navy transition-colors duration-200" onClick={() => window.open("http://linkedin.com/posts/tiffanymares_cloudcomputing-ai-aws-activity-7376078359983943680-LU8n/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEogt0ABMF03rdl7d47Um3jWsXvZ5aKMNVg", "_blank")}> AWS Cloud Club Captain</span>,
              <span className="text-pink font-bold underline decoration-2 underline-offset-2 cursor-pointer hover:text-navy transition-colors duration-200" onClick={() => window.open("https://www.linkedin.com/company/ibm-z-student-ambassador/posts/?feedView=all", "_blank")}> IBM Z Student Ambassador</span>, and
              <span className="text-pink font-bold underline decoration-2 underline-offset-2 cursor-pointer hover:text-navy transition-colors duration-200" onClick={() => window.open("https://www.linkedin.com/company/uog-cepssc/posts/?feedView=all", "_blank")}> Vice President of the College of Computing</span>, I'm passionate about bridging modern cloud technologies with
              traditional enterprise systems while fostering inclusive communities in technology.
            </p>
          </div>
        </RetroWindow>
      </div>
    </section>
  );
};

export default About;

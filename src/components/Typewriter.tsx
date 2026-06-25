import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string;
  className?: string;
  typeSpeed?: number;
}

// Inline text that retypes itself each time it scrolls into view. Before its
// first appearance it renders an invisible copy so surrounding layout doesn't
// jump while the text is empty.
const Typewriter = ({ text, className, typeSpeed = 45 }: TypewriterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCycle((c) => c + 1);
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={cn(className)}>
      {cycle === 0 ? (
        <span className="invisible">{text}</span>
      ) : (
        <ReactTyped
          key={cycle}
          strings={[text]}
          typeSpeed={typeSpeed}
          showCursor
          cursorChar="_"
        />
      )}
    </span>
  );
};

export default Typewriter;

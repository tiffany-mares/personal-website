import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";

interface TypewriterTitleProps {
  text: string;
  className?: string;
  typeSpeed?: number;
}

// Section title that retypes itself each time it scrolls into view.
// Before its first appearance it renders an invisible copy so the banner
// reserves its final size and the page layout doesn't jump.
const TypewriterTitle = ({ text, className, typeSpeed = 55 }: TypewriterTitleProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
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
    <h2 ref={ref} className={className}>
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
    </h2>
  );
};

export default TypewriterTitle;

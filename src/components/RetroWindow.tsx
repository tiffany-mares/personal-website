import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Typewriter from "@/components/Typewriter";

interface RetroWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  onClick?: () => void;
}

// A Windows-95-style window frame: title bar with a label and _ [] X controls,
// a navy border and a hard pixel drop-shadow.
const RetroWindow = ({ title, children, className, bodyClassName, onClick }: RetroWindowProps) => {
  return (
    <div
      className={cn(
        "retro-window overflow-hidden transition-transform duration-150",
        onClick && "cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5",
        className
      )}
      onClick={onClick}
    >
      <div className="retro-titlebar">
        <Typewriter text={title} className="truncate" />
      </div>
      <div className={cn("p-6", bodyClassName)}>{children}</div>
    </div>
  );
};

export default RetroWindow;

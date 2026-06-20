const NAVY = "#26235e";

type FlyerType =
  | "rocket"
  | "plane"
  | "bird"
  | "balloon"
  | "butterfly"
  | "bee"
  | "ufo"
  | "blimp"
  | "kite"
  | "shootingStar";

// Symmetric sprites should never be horizontally flipped.
const SYMMETRIC: Record<FlyerType, boolean> = {
  rocket: false,
  plane: false,
  bird: false,
  bee: false,
  balloon: true,
  butterfly: true,
  ufo: true,
  blimp: false,
  kite: true,
  shootingStar: false
};

const Sprite = ({ type, size, flip }: { type: FlyerType; size: number; flip: boolean }) => {
  const doFlip = flip && !SYMMETRIC[type];
  const common = {
    width: size,
    style: { height: "auto", transform: doFlip ? "scaleX(-1)" : undefined } as React.CSSProperties,
    shapeRendering: "geometricPrecision" as const
  };

  switch (type) {
    case "rocket":
      return (
        <svg viewBox="0 0 26 16" {...common}>
          <g stroke={NAVY} strokeWidth="1" strokeLinejoin="round">
            <polygon points="6,7 0,8 6,9" fill="#ffb020" stroke="none" />
            <polygon points="6,7.6 2.5,8 6,8.4" fill="#ff5a3c" stroke="none" />
            <polygon points="10,5 7,2 13,5" fill="#ff5a7a" />
            <polygon points="10,11 7,14 13,11" fill="#ff5a7a" />
            <path d="M8,5 H17 a4,3 0 0 1 0,6 H8 Z" fill="#ffffff" />
            <polygon points="17,5 24,8 17,11" fill="#ff5a7a" />
            <circle cx="12" cy="8" r="1.8" fill="#7fd2ff" />
          </g>
        </svg>
      );
    case "plane":
      return (
        <svg viewBox="0 0 28 16" {...common}>
          <g stroke={NAVY} strokeWidth="1" strokeLinejoin="round">
            <polygon points="5,8 1,2 8,8" fill="#9bb0ff" />
            <polygon points="13,9 9,15 18,9" fill="#9bb0ff" />
            <polygon points="13,8 12,2 17,7" fill="#bcc8ff" />
            <path d="M4,8 Q4,6 7,6 H21 L26,8 L21,10 H7 Q4,10 4,8 Z" fill="#ffffff" />
            <rect x="15" y="7" width="5" height="1.6" fill="#7fd2ff" stroke="none" />
          </g>
        </svg>
      );
    case "bird":
      return (
        <svg viewBox="0 0 24 12" {...common}>
          <path
            d="M1,8 Q6,2 11,7 Q12,8 13,7 Q18,2 23,8"
            fill="none"
            stroke={NAVY}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "balloon":
      return (
        <svg viewBox="0 0 20 28" {...common}>
          <g stroke={NAVY} strokeWidth="1" strokeLinejoin="round">
            <path d="M10,1 C3,1 1,7 1,11 C1,16 6,19 10,20 C14,19 19,16 19,11 C19,7 17,1 10,1 Z" fill="#ff8fb0" />
            <path d="M10,1 C8,6 8,15 10,20" stroke="#ffffff" strokeWidth="1.6" fill="none" />
            <path d="M6,2.4 C4,7 5,15 8,19.4" stroke="#ffd23e" strokeWidth="1.2" fill="none" />
            <path d="M14,2.4 C16,7 15,15 12,19.4" stroke="#9bb0ff" strokeWidth="1.2" fill="none" />
            <line x1="7" y1="20" x2="8.5" y2="24" />
            <line x1="13" y1="20" x2="11.5" y2="24" />
            <rect x="8" y="24" width="4" height="3" fill="#9c6b3f" />
          </g>
        </svg>
      );
    case "butterfly":
      return (
        <svg viewBox="0 0 18 16" {...common}>
          <g stroke={NAVY} strokeWidth="1" strokeLinejoin="round">
            <circle cx="6" cy="6" r="4" fill="#c77dff" />
            <circle cx="12" cy="6" r="4" fill="#c77dff" />
            <circle cx="6" cy="11" r="3" fill="#ff9ecb" />
            <circle cx="12" cy="11" r="3" fill="#ff9ecb" />
            <rect x="8.4" y="4" width="1.4" height="9" rx="0.7" fill={NAVY} stroke="none" />
            <path d="M9,4 C8,1 6.5,1 6.2,2.2" fill="none" />
            <path d="M9.2,4 C10.2,1 11.7,1 12,2.2" fill="none" />
          </g>
        </svg>
      );
    case "bee":
      return (
        <svg viewBox="0 0 20 14" {...common}>
          <g stroke={NAVY} strokeWidth="1" strokeLinejoin="round">
            <ellipse cx="9" cy="4" rx="3" ry="2" fill="#cdecff" />
            <ellipse cx="12.5" cy="4.3" rx="2.4" ry="1.7" fill="#cdecff" />
            <ellipse cx="9" cy="8.5" rx="6" ry="4" fill="#ffd23e" />
            <rect x="7.5" y="5" width="1.7" height="7" fill={NAVY} stroke="none" />
            <rect x="10.5" y="5" width="1.7" height="7" fill={NAVY} stroke="none" />
          <circle cx="16" cy="8.5" r="2.2" fill={NAVY} stroke="none" />
          <polygon points="3,8.5 0,8 3,9" fill={NAVY} stroke="none" />
          </g>
        </svg>
      );
    case "ufo":
      return (
        <svg viewBox="0 0 24 14" {...common}>
          <g stroke={NAVY} strokeWidth="1" strokeLinejoin="round">
            <ellipse cx="12" cy="9" rx="11" ry="3.4" fill="#b9c2ff" />
            <path d="M6,8 A6 5 0 0 1 18,8 Z" fill="#d6f0ff" />
            <circle cx="6" cy="9.4" r="0.9" fill="#ffd23e" stroke="none" />
            <circle cx="12" cy="10.2" r="0.9" fill="#ff5a7a" stroke="none" />
            <circle cx="18" cy="9.4" r="0.9" fill="#7fd2ff" stroke="none" />
          </g>
        </svg>
      );
    case "blimp":
      return (
        <svg viewBox="0 0 32 16" {...common}>
          <g stroke={NAVY} strokeWidth="1" strokeLinejoin="round">
            <ellipse cx="14" cy="7" rx="13" ry="5.5" fill="#ff9e4d" />
            <path d="M3,7 H22" stroke="#ffffff" strokeWidth="1.2" fill="none" />
            <polygon points="26,3 31,1 28,7 31,13 26,11" fill="#ffd23e" />
            <rect x="11" y="12" width="6" height="2.6" fill="#9c6b3f" />
          </g>
        </svg>
      );
    case "kite":
      return (
        <svg viewBox="0 0 16 28" {...common}>
          <g stroke={NAVY} strokeWidth="1" strokeLinejoin="round">
            <polygon points="8,1 14,9 8,17 2,9" fill="#ff8fb0" />
            <line x1="8" y1="1" x2="8" y2="17" />
            <line x1="2" y1="9" x2="14" y2="9" />
            <path d="M8,17 q3,3 -1,5 q-4,2 -1,5" fill="none" />
          </g>
        </svg>
      );
    case "shootingStar":
      return (
        <svg viewBox="0 0 26 12" {...common}>
          <path d="M2,6 H14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <path
            d="M19,1 L20.5,4.5 L24,6 L20.5,7.5 L19,11 L17.5,7.5 L14,6 L17.5,4.5 Z"
            fill="#fff7c0"
            stroke={NAVY}
            strokeWidth="0.5"
          />
        </svg>
      );
    default:
      return null;
  }
};

interface Flyer {
  type: FlyerType;
  top: string;
  size: number;
  duration: number;
  delay: number;
  dir: "ltr" | "rtl";
  bob?: boolean;
}

// Distributed by altitude: rockets high in the dark, planes/birds/balloons
// across the mid sky, butterflies and bees low near the flower field.
const flyers: Flyer[] = [
  // Dark upper sky: rockets and shooting stars
  { type: "shootingStar", top: "6%", size: 70, duration: 14, delay: -2, dir: "ltr" },
  { type: "shootingStar", top: "14%", size: 56, duration: 11, delay: -7, dir: "rtl" },
  { type: "shootingStar", top: "20%", size: 64, duration: 13, delay: -10, dir: "ltr" },
  { type: "rocket", top: "10%", size: 104, duration: 26, delay: -4, dir: "ltr", bob: true },
  { type: "rocket", top: "22%", size: 80, duration: 32, delay: -16, dir: "rtl", bob: true },
  { type: "rocket", top: "28%", size: 92, duration: 29, delay: -11, dir: "ltr", bob: true },
  { type: "ufo", top: "17%", size: 86, duration: 36, delay: -20, dir: "rtl", bob: true },
  { type: "ufo", top: "30%", size: 72, duration: 30, delay: -5, dir: "ltr", bob: true },

  // Mid sky: planes, blimps, birds, balloons, kites
  { type: "plane", top: "40%", size: 150, duration: 34, delay: -8, dir: "ltr" },
  { type: "plane", top: "56%", size: 120, duration: 40, delay: -22, dir: "rtl" },
  { type: "plane", top: "62%", size: 134, duration: 37, delay: -3, dir: "ltr" },
  { type: "blimp", top: "46%", size: 150, duration: 64, delay: -14, dir: "ltr", bob: true },
  { type: "blimp", top: "70%", size: 130, duration: 78, delay: -45, dir: "rtl", bob: true },
  { type: "bird", top: "33%", size: 46, duration: 28, delay: -2, dir: "ltr", bob: true },
  { type: "bird", top: "37%", size: 36, duration: 30, delay: -6, dir: "ltr", bob: true },
  { type: "bird", top: "48%", size: 44, duration: 33, delay: -18, dir: "rtl", bob: true },
  { type: "bird", top: "52%", size: 40, duration: 31, delay: -9, dir: "rtl", bob: true },
  { type: "bird", top: "60%", size: 50, duration: 27, delay: -24, dir: "ltr", bob: true },
  { type: "balloon", top: "44%", size: 64, duration: 70, delay: -10, dir: "ltr", bob: true },
  { type: "balloon", top: "66%", size: 80, duration: 85, delay: -40, dir: "rtl", bob: true },
  { type: "balloon", top: "74%", size: 72, duration: 92, delay: -18, dir: "ltr", bob: true },
  { type: "kite", top: "50%", size: 70, duration: 48, delay: -6, dir: "rtl", bob: true },
  { type: "kite", top: "64%", size: 60, duration: 54, delay: -30, dir: "ltr", bob: true },

  // Low sky near the flowers: butterflies and bees
  { type: "butterfly", top: "82%", size: 52, duration: 26, delay: -15, dir: "ltr", bob: true },
  { type: "butterfly", top: "86%", size: 58, duration: 24, delay: -3, dir: "ltr", bob: true },
  { type: "butterfly", top: "92%", size: 48, duration: 20, delay: -12, dir: "rtl", bob: true },
  { type: "butterfly", top: "90%", size: 44, duration: 22, delay: -19, dir: "ltr", bob: true },
  { type: "bee", top: "84%", size: 48, duration: 19, delay: -5, dir: "rtl", bob: true },
  { type: "bee", top: "89%", size: 54, duration: 18, delay: -7, dir: "ltr", bob: true },
  { type: "bee", top: "94%", size: 44, duration: 16, delay: -1, dir: "rtl", bob: true },
  { type: "bee", top: "96%", size: 40, duration: 15, delay: -10, dir: "ltr", bob: true }
];

const SkyFlyers = () => {
  return (
    <>
      {flyers.map((f, i) => (
        <div
          key={i}
          className="absolute left-0 animate-drift will-change-transform"
          style={{
            top: f.top,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            animationDirection: f.dir === "rtl" ? "reverse" : "normal"
          }}
        >
          <div className={f.bob ? "animate-float" : undefined} style={f.bob ? { animationDuration: `${3 + (i % 3)}s` } : undefined}>
            <Sprite type={f.type} size={f.size} flip={f.dir === "rtl"} />
          </div>
        </div>
      ))}
    </>
  );
};

export default SkyFlyers;

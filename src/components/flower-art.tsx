const NAVY = "#26235e";

export type FlowerType = "daisy" | "tulip" | "five" | "poof";

export interface Combo {
  type: FlowerType;
  color: string;
  center: string;
}

// Decorative (non-interactive) background flowers.
export const COMBOS: Combo[] = [
  { type: "daisy", color: "#ffffff", center: "#ffd23e" },
  { type: "tulip", color: "#ff5a7a", center: "#ff2e5b" },
  { type: "tulip", color: "#ff9e4d", center: "#ef7a1f" },
  { type: "five", color: "#c77dff", center: "#ffd23e" },
  { type: "five", color: "#7fb0ff", center: "#ffffff" },
  { type: "five", color: "#ff5a5a", center: "#ffd23e" },
  { type: "poof", color: "#ff8fb0", center: "#ff5a7a" },
  { type: "poof", color: "#ffd23e", center: "#ff9e4d" },
  { type: "daisy", color: "#ffd6ec", center: "#ffd23e" },
  { type: "five", color: "#9b8bff", center: "#ffffff" }
];

const Bloom = ({ combo }: { combo: Combo }) => {
  const { type, color, center } = combo;
  const s = { stroke: NAVY, strokeWidth: 0.4 } as const;
  switch (type) {
    case "daisy": {
      const petals = [
        [10, 4.8],
        [12.8, 6.4],
        [12.8, 9.6],
        [10, 11.2],
        [7.2, 9.6],
        [7.2, 6.4]
      ];
      return (
        <g {...s}>
          {petals.map(([cx, cy], i) => (
            <ellipse key={i} cx={cx} cy={cy} rx={2} ry={2.1} fill={color} />
          ))}
          <circle cx={10} cy={8} r={2.1} fill={center} />
        </g>
      );
    }
    case "five": {
      const petals = [
        [10, 4.8],
        [7.15, 6.85],
        [8.23, 10.2],
        [11.77, 10.2],
        [12.85, 6.85]
      ];
      return (
        <g {...s}>
          {petals.map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={2.3} fill={color} />
          ))}
          <circle cx={10} cy={8} r={1.7} fill={center} />
        </g>
      );
    }
    case "tulip":
      return (
        <g {...s}>
          <path
            d="M6,11 Q5,5 7.5,4 Q8,7 10,7 Q12,7 12.5,4 Q15,5 14,11 Q10,13.5 6,11 Z"
            fill={color}
          />
          <path d="M10,7 V12.5" stroke={center} strokeWidth={0.8} fill="none" />
        </g>
      );
    case "poof":
      return (
        <g {...s}>
          <circle cx={10} cy={8} r={4} fill={color} />
          <circle cx={10} cy={8} r={1.7} fill={center} />
        </g>
      );
    default:
      return null;
  }
};

export const Flower = ({ combo, width }: { combo: Combo; width: number }) => (
  <svg viewBox="0 0 20 32" width={width} style={{ height: "auto", display: "block" }}>
    <rect x="9.2" y="13" width="1.6" height="16" fill="#3aa54a" stroke={NAVY} strokeWidth="0.4" />
    <path
      d="M10,21 C6,19 3.5,20.5 3.5,22.5 C6.5,23.5 9,22.5 10,21.5 Z"
      fill="#49bf57"
      stroke={NAVY}
      strokeWidth="0.4"
    />
    <path
      d="M10,25 C14,23 16.5,24.5 16.5,26.5 C13.5,27.5 11,26.5 10,25.5 Z"
      fill="#49bf57"
      stroke={NAVY}
      strokeWidth="0.4"
    />
    <Bloom combo={combo} />
  </svg>
);

export const GrassTuft = ({ width }: { width: number }) => (
  <svg viewBox="0 0 14 12" width={width} style={{ height: "auto", display: "block" }}>
    <path d="M7,12 C6,7 5,5 3,3" stroke="#2f8f3e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M7,12 V2" stroke="#3aa54a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M7,12 C8,7 9,5 11,3" stroke="#2f8f3e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

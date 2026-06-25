import { useMemo } from "react";
import SkyFlyers from "@/components/SkyFlyers";
import FlowerField from "@/components/FlowerField";

// A crisp pixel-art cloud rendered as an SVG (guaranteed transparent
// background) from overlapping "puffs" rasterized onto a grid.
const CloudPixel = ({ width }: { width: number }) => {
  const W = 24;
  const H = 14;
  const puffs = [
    { cx: 7, cy: 6, r: 4 },
    { cx: 11, cy: 4.5, r: 4.2 },
    { cx: 15.5, cy: 6, r: 4.3 },
    { cx: 19, cy: 7.5, r: 3 },
    { cx: 5, cy: 8, r: 3 }
  ];

  const cells = useMemo(() => {
    const inside = (x: number, y: number) => {
      const px = x + 0.5;
      const py = y + 0.5;
      if (py > 11) return false; // flat-ish bottom
      for (const p of puffs) {
        const dx = px - p.cx;
        const dy = py - p.cy;
        if (dx * dx + dy * dy <= p.r * p.r) return true;
      }
      if (px >= 4 && px <= 19 && py >= 6 && py <= 11) return true; // body fill
      return false;
    };

    const out: { x: number; y: number; fill: string }[] = [];
    // Find the lowest inside row per column for shading
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        if (!inside(x, y)) continue;
        const border =
          !inside(x - 1, y) || !inside(x + 1, y) || !inside(x, y - 1) || !inside(x, y + 1);
        let fill = "#ffffff";
        if (border) fill = "hsl(243 53% 22%)"; // navy outline
        else if (!inside(x, y + 1) || !inside(x, y + 2)) fill = "#d7def8"; // periwinkle shade near bottom
        out.push({ x, y, fill });
      }
    }
    return out;
  }, []);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={width} style={{ height: "auto" }} shapeRendering="crispEdges">
      {cells.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width={1} height={1} fill={c.fill} />
      ))}
    </svg>
  );
};

// A single sky that spans the full page height: dark night at the top
// transitioning down through "blue hour" twilight into a light day sky,
// finishing with a pixel-art flower field pinned to the very bottom.
const SkyBackground = () => {
  // Scatter pixel stars densely across the upper (dark) portion of the page.
  const stars = useMemo(() => {
    const items = [] as { left: number; top: number; size: number; delay: number }[];
    for (let i = 0; i < 180; i++) {
      items.push({
        left: Math.random() * 100,
        top: Math.random() * 40, // concentrated in the top ~40% (darkest region)
        size: Math.random() < 0.7 ? 2 : 3,
        delay: Math.random() * 3
      });
    }
    return items;
  }, []);

  const clouds = [
    { top: "55%", size: 150, opacity: 0.85, duration: 90 },
    { top: "62%", size: 220, opacity: 0.9, duration: 130 },
    { top: "68%", size: 130, opacity: 0.85, duration: 75 },
    { top: "73%", size: 260, opacity: 0.95, duration: 150 },
    { top: "78%", size: 180, opacity: 0.9, duration: 110 },
    { top: "82%", size: 240, opacity: 0.95, duration: 140 },
    { top: "86%", size: 160, opacity: 0.95, duration: 95 },
    { top: "90%", size: 290, opacity: 1, duration: 165 },
    { top: "94%", size: 200, opacity: 1, duration: 120 }
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Sky gradient now lives on the body so it always covers the full
          document height (see index.css). This layer holds the overlays. */}

      {/* Twinkling pixel stars (night region) */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: "white",
            boxShadow: "0 0 4px rgba(255,255,255,0.8)",
            animationDelay: `${s.delay}s`
          }}
        />
      ))}

      {/* Drifting pixel clouds through the lighter (lower) region */}
      {clouds.map((c, i) => (
        <div
          key={i}
          className="absolute animate-drift"
          style={{
            top: c.top,
            left: 0,
            opacity: c.opacity,
            animationDuration: `${c.duration}s`,
            animationDelay: `${-i * 12}s`
          }}
        >
          <CloudPixel width={c.size} />
        </div>
      ))}

      {/* Moving pixel-art flyers: rockets, planes, birds, balloons, butterflies, bees */}
      <SkyFlyers />

      {/* Sparse, varied flower field pinned to the bottom of the page */}
      <FlowerField />
    </div>
  );
};

export default SkyBackground;

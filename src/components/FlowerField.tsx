import { useMemo } from "react";
import { Flower, GrassTuft, COMBOS, type Combo } from "@/components/flower-art";

const NAVY = "#26235e";

const FlowerField = () => {
  // Sparse, varied decorative flowers spread across the width with jitter.
  const flowers = useMemo(() => {
    const items: { left: number; combo: Combo; size: number; bottom: number }[] = [];
    const count = 13;
    for (let i = 0; i < count; i++) {
      const base = (i + 0.5) * (100 / count);
      items.push({
        left: base + (Math.random() * 4 - 2),
        combo: COMBOS[Math.floor(Math.random() * COMBOS.length)],
        size: 56 + Math.random() * 46,
        bottom: 6 + Math.random() * 8
      });
    }
    return items;
  }, []);

  const tufts = useMemo(() => {
    const items: { left: number; size: number }[] = [];
    for (let i = 0; i < 16; i++) {
      items.push({ left: Math.random() * 100, size: 14 + Math.random() * 12 });
    }
    return items;
  }, []);

  return (
    <div className="pointer-events-none absolute bottom-0 left-0 w-full" style={{ height: 160 }}>
      {/* Grass ground */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: 24,
          background: "linear-gradient(to bottom, #5cbf5c, #3f9d45)",
          borderTop: `2px solid ${NAVY}`
        }}
      />

      {/* Grass tufts for texture */}
      {tufts.map((t, i) => (
        <div key={`t${i}`} className="absolute" style={{ left: `${t.left}%`, bottom: 16 }}>
          <GrassTuft width={t.size} />
        </div>
      ))}

      {/* Sparse, varied decorative flowers */}
      {flowers.map((f, i) => (
        <div
          key={`f${i}`}
          className="absolute"
          style={{ left: `${f.left}%`, bottom: f.bottom, transform: "translateX(-50%)" }}
        >
          <Flower combo={f.combo} width={f.size} />
        </div>
      ))}
    </div>
  );
};

export default FlowerField;

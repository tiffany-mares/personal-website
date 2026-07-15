import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

// Floating bubble background, themed to the site's navy/purple palette so it
// reads on the light-blue background. Translucent circles with a soft outline
// drift gently upward like rising bubbles; hovering makes nearby ones swell.
const BackgroundParticles = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      detectRetina: true,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: "bubble" },
          onClick: { enable: true, mode: "push" },
          resize: { enable: true }
        },
        modes: {
          bubble: { distance: 220, size: 55, duration: 2, opacity: 0.85 },
          push: { quantity: 4 }
        }
      },
      particles: {
        color: { value: ["#26235e", "#5b3fd6", "#7a5cf0"] },
        links: { enable: false },
        stroke: { width: 1.5, color: "#5b3fd6" },
        move: {
          enable: true,
          speed: 1.2,
          direction: "top",
          random: true,
          straight: false,
          outModes: { default: "out", bottom: "none" }
        },
        number: { value: 55, density: { enable: true } },
        opacity: {
          value: { min: 0.15, max: 0.5 },
          animation: { enable: true, speed: 0.6, sync: false }
        },
        shape: { type: "circle" },
        size: {
          value: { min: 6, max: 34 },
          animation: { enable: true, speed: 2, sync: false, startValue: "random" }
        }
      }
    }),
    []
  );

  if (!ready) return null;

  return <Particles id="bg-particles" className="fixed inset-0 -z-10" options={options} />;
};

export default BackgroundParticles;

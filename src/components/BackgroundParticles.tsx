import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

// Interactive particle network (inspired by artyomg.com), themed to the
// site's navy/purple palette so it reads on the light-blue background.
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
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
          resize: { enable: true }
        },
        modes: {
          grab: { distance: 220, links: { opacity: 1, color: "#5b3fd6" } },
          push: { quantity: 6 }
        }
      },
      particles: {
        color: { value: ["#26235e", "#5b3fd6"] },
        links: {
          color: "#5b3fd6",
          distance: 160,
          enable: true,
          opacity: 0.8,
          width: 2.2
        },
        move: {
          enable: true,
          speed: 1.6,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "bounce" }
        },
        number: { value: 170, density: { enable: true } },
        opacity: { value: { min: 0.75, max: 1 } },
        shape: { type: "circle" },
        size: { value: { min: 2.5, max: 5.5 } }
      }
    }),
    []
  );

  if (!ready) return null;

  return <Particles id="bg-particles" className="fixed inset-0 -z-10" options={options} />;
};

export default BackgroundParticles;

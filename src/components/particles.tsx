import { useEffect, useRef } from "react";

declare global {
  interface Window {
    particlesJS: any;
  }
}

export const Particles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load particles.js dynamically
    const loadParticlesJS = async () => {
      const config = {
        particles: {
          number: {
            value: 60,
            density: { enable: true, value_area: 1200 },
          },
          color: {
            value: ["#666666", "#00C4CC", "#4353FF", "#F24E1E"], // dynamic brand colors
          },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 1.5,
              opacity_min: 0.25,
              sync: false,
            },
          },
          size: {
            value: 2.5,
            random: true,
            anim: {
              enable: true,
              speed: 2.5,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 180,
            color: "#666666",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2, // slightly faster for lively feel
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: {
              enable: true,
              rotateX: 800,
              rotateY: 1600,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "attract", // hover pulls particles toward cursor
            },
            onclick: {
              enable: true,
              mode: "push", // click spawns more
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
            },
            grab: {
              distance: 200,
              line_linked: { opacity: 0.9 },
            },
            bubble: {
              distance: 250,
              size: 50,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 300,
              duration: 0.6,
            },
            push: { particles_nb: 3 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      };

      const initParticles = () => {
        if (window.particlesJS && particlesRef.current) {
          window.particlesJS("particles-js", config);
        }
      };

      if (typeof window !== "undefined" && !window.particlesJS) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
        script.onload = initParticles;
        document.head.appendChild(script);
      } else {
        initParticles();
      }
    };

    loadParticlesJS();

    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      ref={particlesRef}
      className="absolute inset-0 pointer-events-auto cursor-crosshair"
      style={{ background: "transparent", zIndex: 1 }}
    />
  );
};

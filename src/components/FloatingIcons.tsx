import { useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { SiFigma, SiCanva, SiMiro, SiAdobephotoshop, SiWebflow, SiNotion } from "react-icons/si";
import { MousePointer2, Brush, PanelsTopLeft } from "lucide-react"; // fallbacks

type IconDef = {
  id: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  colorDark?: string;
};

const ICONS: IconDef[] = [
  // 1. Figma
  { id: "figma", Icon: SiFigma, color: "#F24E1E" },

  // 2. Cursor (fallback icon)
  { id: "cursor", Icon: MousePointer2, color: "#6E59D9", colorDark: "#8B79F4" },

  // 3. Canva
  { id: "canva", Icon: SiCanva, color: "#00C4CC", colorDark: "#00B1B8" },

  // 4. Miro
  { id: "miro", Icon: SiMiro, color: "#FFD02F", colorDark: "#F4C021" },

  // 5. Mural (fallback icon)
  { id: "mural", Icon: PanelsTopLeft, color: "#FF3366", colorDark: "#FF5C84" },

  // 6. Photoshop
  { id: "ps", Icon: SiAdobephotoshop, color: "#31A8FF", colorDark: "#2A90D9" },

  // 8. Sketchbook (fallback icon)
  { id: "sketchbk", Icon: Brush, color: "#FF5500", colorDark: "#FF6E28" },

  // 9. Webflow
  { id: "webflow", Icon: SiWebflow, color: "#4353FF", colorDark: "#5F6CFF" },

  // 10. Notion
  { id: "notion", Icon: SiNotion, color: "#000000", colorDark: "#FFFFFF" },
];

const COUNT = 12;
const rand = (min: number, max: number) => Math.random() * (max - min) + min;

// detect dark mode from <html class="dark">
const isDark = () =>
  document.documentElement.classList.contains("dark") ||
  window.matchMedia?.("(prefers-color-scheme: dark)").matches;

type Item = IconDef & {
  key: string;
  leftPct: number;
  topPct: number;
  size: number;
  ampX: number;
  ampY: number;
  speed: number;
  depth: number;
  blur: boolean;
  delay: number;
};

export default function FloatingIcons() {
  const wrapRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const items: Item[] = useMemo(() => {
    return Array.from({ length: COUNT }).map((_, i) => {
      const def = ICONS[i % ICONS.length];
      const depth = [0.7, 1, 1.4][Math.floor(Math.random() * 3)];
      return {
        ...def,
        key: `${def.id}-${i}`,
        leftPct: rand(6, 94),
        topPct: rand(8, 92),
        size: Math.round(rand(26, 54) * (depth <= 1 ? 1 : 0.95)),
        ampX: rand(16, 36) * depth,
        ampY: rand(12, 28) * depth,
        speed: rand(0.05, 0.12) * (depth + 0.2),
        depth,
        blur: depth > 1.2,
        delay: rand(0, 1000),
      };
    });
  }, []);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      {items.map((it) => (
        <IconDrifter
          key={it.key}
          item={it}
          wrapRef={wrapRef}
          mouseX={mouseX}
          mouseY={mouseY}
          dark={isDark()}
        />
      ))}
    </div>
  );
}

function IconDrifter({
  item,
  wrapRef,
  mouseX,
  mouseY,
  dark,
}: {
  item: Item;
  wrapRef: React.RefObject<HTMLDivElement>;
  mouseX: ReturnType<typeof useMotionValue>;
  mouseY: ReturnType<typeof useMotionValue>;
  dark: boolean;
}) {
  const { Icon, color, colorDark, leftPct, topPct, size, ampX, ampY, speed, depth, blur, delay } = item;

  const dx = useMotionValue(0);
  const dy = useMotionValue(0);

  useAnimationFrame((t) => {
    const el = wrapRef.current;
    if (!el) return;

    const time = (t + delay * 1000) * speed * 0.001;
    const baseX = Math.sin(time) * ampX;
    const baseY = Math.cos(time * 0.9) * ampY;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + (leftPct / 100) * rect.width;
    const cy = rect.top + (topPct / 100) * rect.height;
    const mx = mouseX.get();
    const my = mouseY.get();
    const dxm = cx - mx;
    const dym = cy - my;
    const dist = Math.hypot(dxm, dym);
    const RANGE = 120;
    let rx = 0,
      ry = 0;
    if (dist < RANGE) {
      const strength = (1 - dist / RANGE) * 10;
      const nx = dxm / (dist || 1);
      const ny = dym / (dist || 1);
      rx = nx * strength * (1.2 / depth);
      ry = ny * strength * (1.2 / depth);
    }

    dx.set(baseX + rx);
    dy.set(baseY + ry);
  });

  return (
    <motion.div
      className={`absolute ${blur ? "blur-[1px] md:blur-[2px]" : ""}`}
      style={{
        left: `${leftPct}%`,
        top: `${topPct}%`,
        translateX: dx,
        translateY: dy,
        opacity: 0.22,
      }}
    >
      <Icon
        style={{
          width: size,
          height: size,
          color: dark ? colorDark ?? color : color,
          transition: "color 200ms ease",
        }}
      />
    </motion.div>
  );
}

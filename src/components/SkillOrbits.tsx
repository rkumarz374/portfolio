import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Groups = {
  core: string[];
  research: string[];
  tools: string[];
  collab: string[];
};

type Props = {
  mastered?: Groups;
  learning?: string[];
};

const DEFAULT_MASTERED: Groups = {
  core: [
    "UX Design", "UI Design", "Interaction Design", "Wireframing",
    "User Flows", "Responsive Design",
  ],
  research: [
    "Usability Testing", "Heuristic Eval", "Personas", "Journey Mapping",
  ],
  tools: [
    "Figma", "Figma Components", "Notion", "Miro", "Jira",
  ],
  collab: [
    "Design Systems", "Accessibility (WCAG)", "Agile", "Stakeholder Comms",
  ],
};

const DEFAULT_LEARNING = [
  "Storybook", "shadcn/ui", "Advanced Motion",
  "A/B Testing @ scale", "Workshop Facilitation",
  "Service Design", "ARIA Deep Dive",
];

const ringStyle = {
  core: "border-blue-400/50",
  research: "border-green-400/50",
  tools: "border-purple-400/50",
  collab: "border-amber-400/60",
};

const pillStyle: Record<keyof Groups, string> = {
  core: "border-blue-400 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200",
  research: "border-green-400 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-200",
  tools: "border-purple-400 bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200",
  collab: "border-amber-400 bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200",
};

export default function SkillOrbits({
  mastered = DEFAULT_MASTERED,
  learning = DEFAULT_LEARNING,
}: Props) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [rings, setRings] = useState<Groups>(mastered);
  const [comets, setComets] = useState<string[]>(learning);

  const ringOrder: (keyof Groups)[] = ["core", "research", "tools", "collab"];

  const radii = useMemo(
    () => ({ core: 90, research: 135, tools: 180, collab: 225, comet: 270 }),
    []
  );

  const polarPositions = (count: number, radius: number) =>
    Array.from({ length: count }, (_, i) => {
      const theta = (i / count) * Math.PI * 2;
      return { x: Math.cos(theta) * radius, y: Math.sin(theta) * radius };
    });

  const [captureIndex, setCaptureIndex] = useState(0);
  const captureTargets = ringOrder;

  const captureComet = (label: string) => {
    const target = captureTargets[captureIndex % captureTargets.length];
    setCaptureIndex((i) => i + 1);
    setComets((prev) => prev.filter((c) => c !== label));
    setRings((prev) => ({ ...prev, [target]: [...prev[target], label] }));
  };

  const reset = () => {
    setRings(mastered);
    setComets(learning);
    setIsPlaying(true);
    setCaptureIndex(0);
  };

  return (
    <section id="skills" className="relative py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <p className="text-muted-foreground mt-1">
              Orbit view — click a comet to capture it into your orbit.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="rounded-full border px-4 py-2 hover:bg-muted transition"
              aria-pressed={isPlaying}
              title={isPlaying ? "Pause orbits" : "Play orbits"}
            >
              {isPlaying ? "⏸ Pause" : "▶️ Play"}
            </button>
            <button
              onClick={reset}
              className="rounded-full border px-4 py-2 hover:bg-muted transition"
              title="Reset system"
            >
              🔄 Reset
            </button>
          </div>
        </div>

        {/* Orbit scene */}
        <div className="relative left-1/2 -translate-x-1/2 w-[70vw] max-w-[1100px] aspect-square rounded-3xl border border-border/50 bg-gradient-to-b from-background/40 to-background/70 backdrop-blur overflow-hidden">
          {/* nucleus */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-24 w-24 rounded-full border border-primary/50 bg-primary/10 flex items-center justify-center text-sm font-semibold">
              You
            </div>
          </div>

          {/* rings */}
          {ringOrder.map((ringKey, idx) => {
            const items = rings[ringKey];
            const radius = radii[ringKey];
            const positions = polarPositions(Math.max(items.length, 1), radius);
            const duration = 40 - idx * 6;

            return (
              <motion.div
                key={ringKey}
                className="absolute inset-0 flex items-center justify-center"
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration, ease: "linear", repeat: isPlaying ? Infinity : 0 }}
                style={{ willChange: "transform" }}
              >
                <div
                  className={`absolute rounded-full border ${ringStyle[ringKey]} pointer-events-none`}
                  style={{ width: radius * 2, height: radius * 2 }}
                />
                {items.map((label, i) => (
                  <motion.button
                    key={label + i}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs sm:text-sm shadow ${pillStyle[ringKey]}`}
                    style={{
                      left: `calc(50% + ${positions[i]?.x || 0}px)`,
                      top: `calc(50% + ${positions[i]?.y || 0}px)`,
                    }}
                    title={label}
                  >
                    {label}
                  </motion.button>
                ))}
              </motion.div>
            );
          })}

          {/* comets */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={isPlaying ? { rotate: -360 } : { rotate: 0 }}
            transition={{ duration: 55, ease: "linear", repeat: isPlaying ? Infinity : 0 }}
            style={{ willChange: "transform" }}
          >
            <div
              className="absolute rounded-full border border-pink-400/40"
              style={{ width: radii.comet * 2, height: radii.comet * 2 }}
            />
            <AnimatePresence initial={false}>
              {comets.map((label, i) => {
                const angle = (i / Math.max(comets.length, 1)) * Math.PI * 2;
                const x = Math.cos(angle) * radii.comet;
                const y = Math.sin(angle) * radii.comet;
                return (
                  <motion.button
                    key={label}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      captureComet(label);
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs sm:text-sm shadow border-pink-400 bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-200"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                    title="Click to capture into an inner orbit"
                  >
                    {label} ✨
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* legend */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground px-3">
            <LegendDot className="border-blue-400 bg-blue-50 dark:bg-blue-900/30" label="Core" />
            <LegendDot className="border-green-400 bg-green-50 dark:bg-green-900/30" label="Research" />
            <LegendDot className="border-purple-400 bg-purple-50 dark:bg-purple-900/30" label="Tools" />
            <LegendDot className="border-amber-400 bg-amber-50 dark:bg-amber-900/30" label="Collab" />
            <LegendDot className="border-pink-400 bg-pink-50 dark:bg-pink-900/30" label="Learning" />
          </div>
        </div>

        {/* mobile fallback */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 md:hidden">
          {Object.entries(rings).flatMap(([type, arr]) =>
            arr.map((label) => (
              <span
                key={`${type}-${label}`}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs shadow ${
                  pillStyle[type as keyof Groups]
                }`}
              >
                {label}
              </span>
            ))
          )}
          {comets.map((label) => (
            <span
              key={`comet-${label}`}
              className="whitespace-nowrap rounded-full border px-3 py-1.5 text-xs shadow border-pink-400 bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-200"
            >
              {label} (Learning)
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegendDot({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className={`h-2.5 w-2.5 rounded-full border ${className}`} />
      <span>{label}</span>
    </span>
  );
}

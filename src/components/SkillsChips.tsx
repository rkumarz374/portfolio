import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Skill = {
  label: string;
  type: "mastered" | "learning";
  note?: string;          // optional tiny tooltip text
  progress?: number;      // 0..100 (for learning)
};

type Props = {
  skills?: Skill[];
  defaultFilter?: "all" | "mastered" | "learning";
  title?: string;
};

const DEFAULT_SKILLS: Skill[] = [
  // mastered
  { label: "UX Design", type: "mastered", note: "End-to-end flows, IA" },
  { label: "UI Design", type: "mastered", note: "Design systems, states" },
  { label: "Interaction Design", type: "mastered", note: "Micro-interactions" },
  { label: "Figma", type: "mastered", note: "Components & tokens" },
  { label: "Usability Testing", type: "mastered" },
  { label: "Design Systems", type: "mastered" },
  { label: "Accessibility (WCAG)", type: "mastered" },
  { label: "React (collab)", type: "mastered" },
  { label: "Tailwind (collab)", type: "mastered" },

  // learning
  { label: "Storybook", type: "learning", progress: 60, note: "Docs & visual tests" },
  { label: "shadcn/ui", type: "learning", progress: 45 },
  { label: "Advanced Motion", type: "learning", progress: 35 },
  { label: "Service Design", type: "learning", progress: 25 },
  { label: "A/B at Scale", type: "learning", progress: 55 },
];

export default function SkillsChips({
  skills = DEFAULT_SKILLS,
  defaultFilter = "all",
  title = "Skills",
}: Props) {
  const [filter, setFilter] = useState<"all" | "mastered" | "learning">(defaultFilter);

  const filtered = useMemo(() => {
    if (filter === "all") return skills;
    return skills.filter(s => s.type === filter);
  }, [skills, filter]);

  return (
    <section className="relative py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>

          {/* minimal segmented filter */}
          <div
            role="tablist"
            aria-label="Skill filter"
            className="inline-flex rounded-full border bg-background p-1"
          >
            {(["all","mastered","learning"] as const).map(key => (
              <button
                key={key}
                role="tab"
                aria-selected={filter === key}
                onClick={() => setFilter(key)}
                className={[
                  "px-3 sm:px-4 py-1.5 rounded-full text-sm capitalize transition",
                  filter === key
                    ? "bg-foreground text-background"
                    : "text-foreground/70 hover:bg-muted"
                ].join(" ")}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* chip grid */}
        <motion.div
          layout
          className="relative left-1/2 -translate-x-1/2 w-[70vw] max-w-[1100px]"
        >
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <AnimatePresence initial={false}>
              {filtered.map((s) => (
                <SkillChip key={s.label} skill={s} />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillChip({ skill }: { skill: Skill }) {
  const learning = skill.type === "learning";
  const progress = Math.min(Math.max(skill.progress ?? 45, 5), 100); // clamp

  // subtle animated progress halo for learning chips
  const haloStyle = learning
    ? {
        background: `conic-gradient(var(--tw-ring-color, rgb(244 114 182)) ${progress * 3.6}deg, transparent 0)`,
      }
    : undefined;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 30 }}
      className="group relative"
    >
      {/* halo ring for learning */}
      {learning && (
        <span
          aria-hidden
          className="absolute -inset-[2px] rounded-full"
          style={haloStyle}
        />
      )}

      <button
        className={[
          "relative select-none whitespace-nowrap rounded-full border px-3 py-1.5 text-sm shadow-sm",
          learning
            ? "border-pink-400 bg-pink-50/80 text-pink-700 dark:bg-pink-900/30 dark:text-pink-200"
            : "border-blue-300 bg-blue-50/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200",
          "backdrop-blur will-change-transform transition-transform",
          "hover:shadow hover:-translate-y-[1px]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        ].join(" ")}
        title={skill.note || (learning ? "Learning" : "Mastered")}
      >
        {skill.label}
        {learning && (
          <span className="ml-2 text-[10px] opacity-70 align-middle">
            {progress}%
          </span>
        )}
      </button>

      {/* tiny tooltip on hover if note exists */}
      {skill.note && (
        <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 hidden -translate-x-1/2 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs text-popover-foreground shadow group-hover:block">
          {skill.note}
        </div>
      )}
    </motion.div>
  );
}

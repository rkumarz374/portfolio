// src/components/SkillsMixer.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Skill = { label: string; type: "core" | "research" | "tools" | "collab" | "learning" };

export default function SkillsMixer() {
  // ✅ Mastered skills grouped by type
  const [mastered, setMastered] = useState<Skill[]>([
    // Core UX/UI
    { label: "UX Design", type: "core" },
    { label: "UI Design", type: "core" },
    { label: "Wireframing", type: "core" },
    { label: "User Flows", type: "core" },
    { label: "Interaction Design", type: "core" },
    { label: "Responsive Design", type: "core" },

    // Research
    { label: "Usability Testing", type: "research" },
    { label: "Heuristic Evaluation", type: "research" },
    { label: "Personas", type: "research" },
    { label: "Journey Mapping", type: "research" },

    // Tools
    { label: "Figma", type: "tools" },
    { label: "Figma Components", type: "tools" },
    { label: "Miro", type: "tools" },
    { label: "Notion", type: "tools" },
    { label: "Jira", type: "tools" },

    // Collaboration / Process
    { label: "Design Systems", type: "collab" },
    { label: "Accessibility (WCAG)", type: "collab" },
    { label: "Agile Collaboration", type: "collab" },
    { label: "Stakeholder Communication", type: "collab" },
  ]);

  // 🧪 Learning skills
  const [learning, setLearning] = useState<Skill[]>([
    { label: "Storybook", type: "learning" },
    { label: "shadcn/ui", type: "learning" },
    { label: "Advanced Motion", type: "learning" },
    { label: "A/B Testing at Scale", type: "learning" },
    { label: "Workshop Facilitation", type: "learning" },
    { label: "Service Design", type: "learning" },
    { label: "Accessibility (ARIA Deep Dive)", type: "learning" },
  ]);

  // Every 2s, move one from learning → mastered
  useEffect(() => {
    if (!learning.length) return;
    const id = setInterval(() => {
      setLearning((prev) => {
        if (!prev.length) return prev;
        const [first, ...rest] = prev;
        setMastered((m) => [...m, first]);
        return rest;
      });
    }, 2000);
    return () => clearInterval(id);
  }, [learning.length]);

  // 🎨 color map
  const colorMap: Record<Skill["type"], string> = {
    core: "border-blue-400 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    research: "border-green-400 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    tools: "border-purple-400 bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    collab: "border-amber-400 bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    learning: "border-pink-400 bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  };

  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>

        {/* Skills box ~70% viewport width */}
        <div className="relative left-1/2 -translate-x-1/2 w-[70vw] rounded-3xl border bg-gradient-to-b from-background/50 to-background/80 p-6 min-h-[360px] overflow-hidden">
          
          {/* Floating learning pills */}
          <div className="absolute inset-x-0 top-[20%] bottom-[35%] pointer-events-none">
            <AnimatePresence>
              {learning.map((skill, i) => (
                <motion.span
                  key={skill.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: [0, 8, 0] }}
                  exit={{ opacity: 0, y: 200 }}
                  transition={{ duration: 1.4 + (i % 3) * 0.2, repeat: Infinity, repeatType: "mirror" }}
                  style={{ left: `${35 + (i % 6) * 8}%` }}
                  className={`absolute -translate-x-1/2 mt-2 inline-block whitespace-nowrap rounded-full border px-4 py-1.5 text-sm shadow ${colorMap[skill.type]}`}
                >
                  {skill.label}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom-settled mastered pills */}
          <div className="absolute left-0 right-0 bottom-4 px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {mastered.map((skill) => (
                <motion.span
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  className={`inline-block whitespace-nowrap rounded-full border px-4 py-1.5 text-sm shadow ${colorMap[skill.type]}`}
                >
                  {skill.label}
                </motion.span>
              ))}
            </div>
            <div className="mt-2 text-center text-xs text-muted-foreground">
              Settled skills
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Palette, Mail, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "./particles";

// Helper Component 1: Name hover easter-egg (Updated for smoother animation and color change)
function EasterEggName() {
  const [alt, setAlt] = useState(false);
  const t = useRef<number | null>(null);

  const show = () => {
    if (t.current) window.clearTimeout(t.current);
    setAlt(true);
    // Keep the "alt" state for a bit longer for a smoother transition
    t.current = window.setTimeout(() => setAlt(false), 900); 
  };

  useEffect(() => () => { if (t.current) window.clearTimeout(t.current); }, []);

  return (
    <motion.h1
      className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-foreground cursor-pointer"
      onMouseEnter={show}
      onFocus={show}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      aria-label="Rajat Shakya — hover for a surprise"
      title="Hover me"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={alt ? "alt" : "main"}
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1, 
            y: 0, 
            // New: Animate color change smoothly
            color: alt ? "var(--accent)" : "var(--foreground)" 
          }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ 
            duration: 0.22,
            // New: Ensure color transition is also smooth
            color: { duration: 0.4 } 
          }}
          className="inline-block"
        >
          {alt ? "Problem Solver" : "Rajat Shakya"}
        </motion.span>
      </AnimatePresence>
    </motion.h1>
  );
}
// Helper Component 2: Role cycler
function RoleCycler() {
  const roles = [
    "Senior Product Designer",
    "UX Strategist",
    "Interaction Designer",
    "Design Systems Builder",
  ];
  const [i, setI] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const id = setInterval(() => setI(v => (v + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, [pause]);

  return (
    <motion.h2
      className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mb-6"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[i]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </motion.h2>
  );
}

// Helper Component 3: Magnetic primary button
function MagneticCTA() {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(dx, dy);
    const max = 80; // influence radius
    const strength = 10; // how far it shifts
    const t = Math.max(0, 1 - dist / max);
    el.style.transform = `translate(${(dx / dist) * t * strength || 0}px, ${(dy / dist) * t * strength || 0}px)`;
  };

  const reset = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };

  return (
    <div onMouseMove={onMove} onMouseLeave={reset} className="inline-block">
      <Button
        ref={ref}
        size="lg"
        className="px-8 py-3 text-lg bg-foreground hover:bg-foreground/90 text-background shadow-subtle transition-transform"
        onClick={() => window.open('https://www.behance.net/arrajat', '_blank')}
      >
        View Portfolio
      </Button>
    </div>
  );
}

export const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rajatkumarshakya/", label: "LinkedIn" },
    { icon: Palette, href: "https://www.behance.net/arrajat", label: "Behance" },
    { icon: Github, href: "https://github.com/rajatshakya", label: "GitHub" },
    { icon: Mail, href: "mailto:rajat@example.com", label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    
      {/* Subtle Particles */}
      <Particles />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-muted border border-border text-foreground text-sm font-medium mb-6 backdrop-subtle"
            >
              <Calendar className="w-4 h-4 mr-2" />
              4+ Years Experience
            </motion.div>

            {/* Heading */}
            <EasterEggName />

            {/* Subheading */}
            <RoleCycler />

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="inline-flex items-center text-muted-foreground mb-8"
            >
              <MapPin className="w-5 h-5 mr-2" />
              <span>Gurugram, Haryana, India • Available for Remote Work</span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Designing purposeful digital experiences that connect users and products seamlessly. I focus on crafting intuitive interfaces, scalable systems, and user-first solutions that bring clarity, value, and impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="inline-flex gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <MagneticCTA />
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-border hover:border-foreground/30 hover:bg-muted transition-all duration-300">
                Get in Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card/60 backdrop-subtle border border-border hover:border-foreground/30 hover:shadow-subtle transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Go to Rajat Shakya's ${link.label}`}
                >
                  <link.icon className="h-5 w-5 text-foreground group-hover:text-secondary transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <motion.a
            href="#projects"
            className="p-2 rounded-full inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll down to projects section"
          >
            <ArrowDown className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
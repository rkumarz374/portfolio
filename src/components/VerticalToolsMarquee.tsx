import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    SiFigma,
    SiCanva,
    SiWebflow,
    SiOpenai,
    SiGoogle,
} from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";
import { TbRocket } from "react-icons/tb";

const tools = [
    {
        name: "Figma",
        label: "Product design & systems",
        icon: SiFigma,
        color: "#F24E1E",
    },
    {
        name: "FigJam",
        label: "Problem framing & flows",
        icon: HiSparkles,
        color: "#A259FF",
    },
    {
        name: "ChatGPT",
        label: "Research & UX writing",
        icon: SiOpenai,
        color: "#10A37F",
    },
    {
        name: "Gemini",
        label: "Exploratory research",
        icon: SiGoogle,
        color: "#4285F4",
    },
    {
        name: "Lovable",
        label: "Concept validation & experiments",
        icon: HiSparkles,
        color: "#EC4899",
    },
    {
        name: "AntiGravity",
        label: "Concept validation & experiments",
        icon: TbRocket,
        color: "#F97316",
    },
    {
        name: "Canva",
        label: "Visual assets & marketing",
        icon: SiCanva,
        color: "#00C4CC",
    },
    {
        name: "Webflow",
        label: "Design to production",
        icon: SiWebflow,
        color: "#4353FF",
    },
];

export const VerticalToolsMarquee = () => {
    return (
        <div className="relative h-full w-full flex flex-col items-center overflow-hidden py-12">
            {/* Section header */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">
                    Tools I <span className="text-gradient">Use</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                    My daily drivers
                </p>
            </div>

            {/* Marquee container */}
            <div className="relative w-full flex-1 overflow-hidden mask-gradient-y">
                {/* Gradient masks */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

                <div className="flex flex-col items-center animate-marquee-vertical hover:pause-animation">
                    {[...tools, ...tools].map((tool, index) => (
                        <div key={`${tool.name}-${index}`} className="py-4">
                            <TiltCard tool={tool} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const TiltCard = ({
    tool,
}: {
    tool: {
        name: string;
        label: string;
        icon: any;
        color: string;
    };
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative flex flex-col items-center gap-1 group cursor-default perspective-1000"
        >
            <div
                style={{ transform: "translateZ(70px)" }}
                className="relative w-24 h-24 rounded-xl bg-card/60 backdrop-blur-md border border-border/50 flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-glow"
            >
                <tool.icon
                    className="w-10 h-10 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: tool.color, transform: "translateZ(40px)" }}
                />
            </div>

            <span
                style={{ transform: "translateZ(40px)" }}
                className="text-xs font-medium text-foreground"
            >
                {tool.name}
            </span>

            <span
                style={{ transform: "translateZ(30px)" }}
                className="text-[10px] text-muted-foreground text-center max-w-[120px]"
            >
                {tool.label}
            </span>
        </motion.div>
    );
};

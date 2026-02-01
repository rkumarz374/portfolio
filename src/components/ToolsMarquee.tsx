import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SiFigma, SiCanva, SiMiro, SiAdobephotoshop, SiWebflow, SiNotion, SiAdobeillustrator, SiAdobexd, SiSketch, SiInvision } from "react-icons/si";

const toolsRow1 = [
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Webflow", icon: SiWebflow, color: "#4353FF" },
    { name: "Adobe PS", icon: SiAdobephotoshop, color: "#31A8FF" },
    { name: "Notion", icon: SiNotion, color: "currentColor" },
    { name: "Miro", icon: SiMiro, color: "#FFD02F" },
];

const toolsRow2 = [
    { name: "Canva", icon: SiCanva, color: "#00C4CC" },
    { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
    { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
    { name: "Sketch", icon: SiSketch, color: "#F7B500" },
    { name: "InVision", icon: SiInvision, color: "#FF3366" },
];

export const ToolsMarquee = () => {
    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden bg-background py-24 space-y-12">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Tools I <span className="text-gradient">Use</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    My digital arsenal for designing, prototyping, and building products.
                </p>
            </div>

            <div className="relative w-full overflow-hidden mask-gradient-x space-y-8 pause-on-hover">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Row 1: Left to Right */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex gap-8 md:gap-12 pr-8 md:pr-12 animate-marquee w-max">
                        {[...toolsRow1, ...toolsRow1, ...toolsRow1, ...toolsRow1].map((tool, index) => (
                            <TiltCard key={`row1-${index}`} tool={tool} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex gap-8 md:gap-12 pr-8 md:pr-12 animate-marquee-reverse w-max">
                        {[...toolsRow2, ...toolsRow2, ...toolsRow2, ...toolsRow2].map((tool, index) => (
                            <TiltCard key={`row2-${index}`} tool={tool} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const TiltCard = ({ tool }: { tool: { name: string; icon: any; color: string } }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
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
            className="relative flex flex-col items-center justify-center gap-4 group cursor-pointer perspective-1000"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-md border border-border/50 shadow-sm group-hover:shadow-glow group-hover:border-primary/50 transition-all duration-500 w-32 h-32 flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <tool.icon
                    className="w-12 h-12 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: tool.color, transform: "translateZ(50px)" }}
                />
            </div>
            <span
                style={{ transform: "translateZ(50px)" }}
                className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors"
            >
                {tool.name}
            </span>
        </motion.div>
    );
};

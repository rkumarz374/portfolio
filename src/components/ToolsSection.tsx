import { motion } from "framer-motion";
import {
    SiFigma,
    SiOpenai,
    SiGoogle,
    SiAdobe,
    SiMiro,
} from "react-icons/si";
import { TbRocket, TbSparkles } from "react-icons/tb";
import { RiRobot2Line } from "react-icons/ri";

const tools = [
    {
        name: "Figma",
        category: "Design & Craft",
        icon: SiFigma,
        color: "#F24E1E",
    },
    {
        name: "ChatGPT",
        category: "Research and study",
        icon: SiOpenai,
        color: "#10A37F",
    },
    {
        name: "Claude",
        category: "Research and study",
        icon: RiRobot2Line,
        color: "#D97757",
    },
    {
        name: "Perplexity",
        category: "Research and study",
        icon: TbSparkles,
        color: "#1FB8CD",
    },
    {
        name: "Antigravity",
        category: "Development",
        icon: TbRocket,
        color: "#F97316",
    },
    {
        name: "Lovable",
        category: "Explore and development",
        icon: TbSparkles,
        color: "#EC4899",
    },
    {
        name: "Raycast",
        category: "Productivity",
        icon: TbRocket,
        color: "#FF6363",
    },
    {
        name: "Adobe Suite",
        category: "Creatives",
        icon: SiAdobe,
        color: "#FF0000",
    },
    {
        name: "Miro",
        category: "Collaboration",
        icon: SiMiro,
        color: "#FFD02F",
    },
];

export const ToolsSection = () => {
    return (
        <section id="tools" className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            My <span className="text-gradient">tools</span>
                        </h2>
                    </motion.div>

                    {/* Tools Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg"
                            >
                                {/* Content */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-base font-semibold text-foreground mb-1">
                                                {tool.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {tool.category}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 ml-3">
                                            <tool.icon
                                                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                                                style={{ color: tool.color }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

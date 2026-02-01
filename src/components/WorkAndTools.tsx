import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Projects } from "./projects";
import { VerticalToolsMarquee } from "./VerticalToolsMarquee";

export const WorkAndTools = () => {
    return (
        <section id="work-and-tools" className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Projects (70%) */}
                    <div className="w-full lg:w-[70%]">
                        {/* We can reuse the Projects component but we might need to adjust its internal layout. 
                 For now, let's wrap it. Ideally, Projects should accept a className or we refactor it.
                 Since Projects has its own section tag and container, we should probably refactor Projects 
                 to be just the list of cards, or import the cards directly.
                 
                 Let's assume we will refactor Projects.tsx to export the list of cards or 
                 we will copy the logic here for better control.
             */}
                        <ProjectList />
                    </div>

                    {/* Right Column: Tools (30%) - Sticky */}
                    <div className="hidden lg:block lg:w-[30%]">
                        <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm">
                            <VerticalToolsMarquee />
                        </div>
                    </div>

                    {/* Mobile Tools (visible only on mobile) */}
                    <div className="lg:hidden">
                        <VerticalToolsMarquee />
                    </div>
                </div>
            </div>
        </section>
    );
};

// We will move the project rendering logic here or import it. 
// For this step, I'll import the projects data and render them.
// But first I need to export 'projects' from projects.tsx or copy it.
// I'll copy the data and imports for now to ensure it works self-contained, 
// or better, I'll modify projects.tsx to export the data.
// Let's assume I'll modify projects.tsx next. 
// For now, I will use a placeholder ProjectList and implement it fully in the next step.

const ProjectList = () => {
    return <Projects />
}

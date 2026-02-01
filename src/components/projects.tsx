import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/Ghar-Care.png";
import project2 from "@/assets/repair-ar.png";
import project3 from "@/assets/rural-india.png";
import project4 from "@/assets/neer-kosh.jpg";
import project5 from "@/assets/kurukshetra.jpg";
import project6 from "@/assets/air-pollution.png";


const projects = [

  {
    id: 1,
    title: "Ghar Care",
    description: "Empowering House-Helps to get Fairly paying work Opportunities as per their skill set",
    image: project1,
    behanceUrl: "https://www.behance.net/gallery/176167341/Ghar-Care-An-App-for-Maids-to-search-for-Job",
    tags: ["UI/UX", "Mobile", "Empowering India"]
  },
  {
    id: 2,
    title: "Repair.AR",
    description: "Augmented Reality guidance that empowers anyone to repair appliances with clear, interactive step-by-step instructions.",
    image: project2,
    behanceUrl: "https://www.behance.net/gallery/121449395/RepairAR(Repair-with-Augmented-reality)",
    tags: ["Augmented Reality", "Mobile Application", "UX Research"]
  },
  {
    id: 3,
    title: "Design for Rural India",
    description: "Goal is to Provide an Assistive app for teachers of (STS)Single Teacher Schools So that they can invest more time in teaching kids rather than doing paper work assign by government. ",
    image: project3,
    behanceUrl: "https://www.behance.net/gallery/115387541/Digi-Helper-UX-Design-Service-Design-Project",
    tags: ["User Experience", "Service Design", "Design System"]
  },
  {
    id: 4,
    title: "Neer-Kosh",
    description: "Water dispenser for railway commuters ensuring safe drinking water while maintaining social distancing.",
    image: project4,
    behanceUrl: "https://www.behance.net/gallery/109837679/-Kosh-Water-dispenser-for-railways",
    tags: ["Product Design", "Workshop", "User Research"]
  },
  {
    id: 5,
    title: "Kurukshetra",
    description: "A Board game Inspired from the Events of Mahabharata, When the Pandavasa were in exile Period and they were preparing for the upcoming war ( The Great Kurukshetra War)",
    image: project5,
    behanceUrl: "https://www.behance.net/gallery/102485515/Kurukshetra-board-game",
    tags: ["Board Game", "Mahabharata", "Visual Design"]
  },
  {
    id: 6,
    title: "DIY Solution for pollution in delhi",
    description: "Low Cost and DIY Solution for Slum Dwellers of New Delhi to tackle Air Pollution",
    image: project6,
    behanceUrl: "https://www.behance.net/gallery/106432779/Air-pollution-in-Delhi-DIY-solution-for-slum-dwellers",
    tags: ["Social", "Community", "Product"]
  }

];

export const Projects = ({ className }: { className?: string }) => {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className={`py-24 bg-gradient-to-b from-muted/20 to-background ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of my recent work showcasing design thinking,
            user research, and creative problem-solving across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4 p-6 rounded-3xl border-2 border-border bg-card/30 backdrop-blur-sm hover:border-foreground/20 transition-all duration-500 shadow-lg hover:shadow-xl cursor-pointer"
            >
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full"
              >
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Content Side */}
              <div className="space-y-4">
                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-bold leading-tight"
                >
                  {project.title}
                </motion.h3>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium bg-muted text-foreground rounded-lg border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base text-muted-foreground leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Case Study Link */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground font-semibold text-base group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Case Study
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-24"
        >
          <motion.a
            href="https://www.behance.net/arrajat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-glow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on Behance
            <ExternalLink className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
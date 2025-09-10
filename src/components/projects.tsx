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
    description: "Neer-Kosh is a Water dispenser for railway commuters which ensures safe drinking water while maintaining social disctancing",
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
    title: "Air Pollution of Delhi(DIY Solution)",
    description: "Low Cost and DIY Solution for Slum Dwellers of New Delhi to tackle Air Pollution",
    image: project6,
    behanceUrl: "https://www.behance.net/gallery/106432779/Air-pollution-in-Delhi-DIY-solution-for-slum-dwellers",
    tags: ["Social", "Community", "Product"]
  }
  
];

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing design thinking, 
            user research, and creative problem-solving across various industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-glow transition-all duration-500 backdrop-glass">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4">
                      <motion.a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
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
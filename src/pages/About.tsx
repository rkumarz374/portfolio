import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Globe, Zap, Heart } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const About = () => {
  const skills = [
    "Product Design", "UX/UI Design", "Strategic Design", "Website and Mobile Apps",
    "Interaction Design", "Design Systems", "Brand Identity", "Webflow",
    "Design Thinking", "User Testing", "Information Architecture", "Visual Design", "Adobe Creative Suite"
  ];

  const experience = [
    {
      year: "2024 - Present",
      role: "UX Designer L2",
      company: "Awiros",
      description: "1. Website Revamp: Led redesign and development in Figma and Webflow; improved engagement by 60–80% and boosted inbound leads.\n\n2. Designed and led end-to-end UX for a Freelancer & Payment Management Dashboard, replacing third-party tools through usability testing and iterative design.\n\n3. Spearheaded the redesign of the flagship product for cloud-first deployment, simplifying user flows and enabling scalability for international clients.\n\n4. Created impactful marketing collateral (pitch decks, brochures, event visuals) that strengthened client engagement and brand perception."
    },
    {
      year: "2022 - 2024",
      role: "Senior Experience Designer",
      company: "Cognizant",
      description: "Client Project: Making the existing portal and process more user-friendly and intuitive and some other things that I can't reveal here."
    },
    {
      year: "2021 - 2022",
      role: "Executive UI/UX Designer",
      company: "Awiros",
      description: "Designed intuitive user experiences for innovative products, conducting user research and creating comprehensive design systems."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "50+ Projects Completed",
      description: "Successfully delivered design solutions across various industries"
    },
    {
      icon: Users,
      title: "30+ Happy Clients",
      description: "Built long-term relationships with satisfied clients worldwide"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worked with clients from 15+ countries across different time zones"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Average project completion time: 2-4 weeks"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section id="about" className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
                I'm a passionate product designer with over 5 years of experience creating
                meaningful digital experiences that drive business growth and user satisfaction.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Story */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">My Story</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed font-inter">
                  <p>
                    I began my design journey in 2019 with a simple curiosity — how design could shape the way people interact with the world. Over the years, that curiosity has evolved into a strong foundation in human-centered and business-driven design. What started with experimenting in visuals has grown into crafting digital experiences that are intuitive, functional, and strategically aligned with user and business needs.
                  </p>
                  <p>
                    From startups to MNCs, my path has always been about solving real problems through thoughtful design. Today, at a fast-growing startup, I design digital products and build modern websites — integrating the latest design trends, Webflow development, and AI-powered prototyping to move from idea to impact faster and more efficiently.
                  </p>
                  <p>
                    Alongside my work, I’ve continuously expanded my skill set through certifications in product design, AI, problem-solving, and emotional design. These experiences fuel my mission to create solutions that not only work well but also resonate with people on a deeper, more meaningful level.
                  </p>
                </div>

                {/* Values */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-foreground">My Values</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-secondary" />
                      <span className="text-muted-foreground font-inter">User-centered design approach</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-secondary" />
                      <span className="text-muted-foreground font-inter">Quality over quantity</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-secondary" />
                      <span className="text-muted-foreground font-inter">Continuous learning and growth</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-secondary" />
                      <span className="text-muted-foreground font-inter">Collaboration and communication</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Experience & Skills */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Experience Timeline */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Experience</h3>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative pl-8 border-l-2 border-muted-foreground/20"
                      >
                        <div className="absolute -left-2 w-4 h-4 bg-foreground rounded-full"></div>
                        <div className="text-sm text-muted-foreground font-medium mb-1">{exp.year}</div>
                        <h4 className="font-semibold text-lg mb-1 text-foreground">{exp.role}</h4>
                        <div className="text-muted-foreground mb-2 font-inter">{exp.company}</div>
                        <div className="text-muted-foreground text-sm leading-relaxed font-inter space-y-2">
                          {exp.description.split('\n\n').map((point, i) => (
                            <div key={i}>{point}</div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Skills & Expertise</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 text-muted-foreground font-inter"
                      >
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span className="text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Achievements Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <h3 className="text-2xl font-bold text-center mb-4 text-foreground">Key Target Achievements</h3>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 font-inter">
                Here are the big goals I plan to conquer within the year—because growth happens outside comfort zones… and sometimes in panic mode too.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 rounded-2xl bg-card/50 backdrop-subtle border border-border hover:border-foreground/30 transition-all duration-300 hover:shadow-subtle"
                  >
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm font-inter">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
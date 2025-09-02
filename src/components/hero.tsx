import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Palette, Mail, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "./particles";


export const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rajatkumarshakya/", label: "LinkedIn" },
    { icon: Palette, href: "https://www.behance.net/arrajat", label: "Behance" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
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
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Rajat Shakya
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Senior Product Designer
            </motion.h2>

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
              <Button 
                size="lg" 
                className="px-8 py-3 text-lg bg-foreground hover:bg-foreground/90 text-background shadow-subtle"
                onClick={() => window.open('https://www.behance.net/arrajat', '_blank')}
              >
                View Portfolio
              </Button>
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
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

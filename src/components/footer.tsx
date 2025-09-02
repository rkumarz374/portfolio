import { motion } from "framer-motion";
import { Heart, Linkedin, Palette, Github, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/rajatshakya", label: "LinkedIn" },
    { icon: Palette, href: "https://behance.net/rajatshakya", label: "Behance" },
    { icon: Github, href: "https://github.com/rajatshakya", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@rajatshakya.com", label: "Email" },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gradient"
          >
            Rajat Shakya
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-muted-foreground"
          >
            <p className="flex items-center justify-center space-x-2 mb-2">
              <span>© {currentYear} Rajat Shakya. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>and lots of coffee.</span>
            </p>
            <p className="text-sm">
              All rights reserved. Design and code crafted with passion.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const navItems = [
    ,
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 backdrop-glass border-b border-border/50"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-bold text-xl text-gradient"
              >
                Rajat Shakya
              </motion.div>
            </Link>

            {/* Right: Desktop Nav + Mobile Menu Button */}
            <div className="flex items-center gap-6">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
                {navItems.map((item) => (
                  <Link key={item.name} to={item.href}>
                    <motion.div
                      className="text-foreground hover:text-primary transition-colors duration-300 relative group"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </motion.div>
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <Button
                aria-label="Toggle menu"
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen((v) => !v)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="py-4 space-y-2" aria-label="Mobile Primary">
              {navItems.map((item) => (
                <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)}>
                  <motion.div
                    className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-300"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>
      </motion.header>

      {/* Floating Night Mode Toggle (outside header so it's bottom-right of viewport) */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60]">
        <Button
          aria-label="Toggle dark mode"
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full border shadow-lg bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          <motion.div
            initial={false}
            animate={{ rotate: theme === "dark" ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.div>
        </Button>
      </div>
    </>
  );
};

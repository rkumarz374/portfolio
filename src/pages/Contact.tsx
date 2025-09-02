import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MapPin, Linkedin, Github, Palette } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@rajatshakya.com",
      href: "mailto:hello@rajatshakya.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 78694 95947",
      href: "tel:+917869495947"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurugram, India",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rajatkumarshakya/", label: "LinkedIn" },
    { icon: Palette, href: "https://www.behance.net/arrajat", label: "Behance" },
    { icon: Github, href: "https://github.com/rkumarz374", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. Let's discuss 
                how we can bring your ideas to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="backdrop-glass border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Send Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <Label htmlFor="name" className="text-sm font-medium">
                          Name
                        </Label>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-2 transition-all duration-300 focus:shadow-glow"
                            placeholder="Your full name"
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email
                        </Label>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-2 transition-all duration-300 focus:shadow-glow"
                            placeholder="your@email.com"
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <Label htmlFor="message" className="text-sm font-medium">
                          Message
                        </Label>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="mt-2 resize-none transition-all duration-300 focus:shadow-glow"
                            placeholder="Tell me about your project..."
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting || isSubmitted}
                          className="w-full relative overflow-hidden"
                        >
                          <motion.div
                            className="flex items-center justify-center"
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.1 }}
                          >
                            {isSubmitted ? (
                              <>
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                </motion.div>
                                Message Sent!
                              </>
                            ) : isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2"
                                />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4 mr-2" />
                                Send Message
                              </>
                            )}
                          </motion.div>
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    I'm always excited to discuss new opportunities and creative challenges. 
                    Whether you have a specific project in mind or just want to connect, 
                    I'd love to hear from you.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <motion.a
                        href={item.href}
                        className={`flex items-center p-4 rounded-lg border border-border/50 backdrop-glass transition-all duration-300 ${
                          item.href !== '#' ? 'hover:border-primary/50 hover:shadow-glow cursor-pointer' : 'cursor-default'
                        }`}
                        whileHover={item.href !== '#' ? { scale: 1.02, y: -2 } : {}}
                        whileTap={item.href !== '#' ? { scale: 0.98 } : {}}
                      >
                        <div className="p-2 rounded-full bg-primary/10 mr-4">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-muted-foreground text-sm">{item.value}</p>
                        </div>
                      </motion.a>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
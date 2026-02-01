import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ToolsSection } from "@/components/ToolsSection";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ToolsSection />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

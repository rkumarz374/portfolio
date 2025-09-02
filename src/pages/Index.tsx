import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import FloatingIcons from "@/components/FloatingIcons";



const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* Floating icons background section */}
        <section className="
    relative min-h-[40vh] flex items-center justify-center overflow-hidden
    before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px
    before:bg-gradient-to-r before:from-transparent before:via-border before:to-transparent
    after:content-['']  after:absolute  after:bottom-0 after:left-0 after:right-0 after:h-px
    after:bg-gradient-to-r after:from-transparent after:via-border after:to-transparent
  ">
         <FloatingIcons />
         <div className="relative z-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tools I Use</h2>
          <p className="text-muted-foreground">
            A blend of design and development tools powering my work
          </p>
        </div>
        </section>

        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

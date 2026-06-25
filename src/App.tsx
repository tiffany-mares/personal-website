import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Organizations from "./components/Organizations";
import Hackathons from "./components/Hackathons";
import BackgroundParticles from "./components/BackgroundParticles";

const queryClient = new QueryClient();

const sectionOrder = [
  "home",
  "about",
  "experience",
  "projects",
  "organizations",
  "hackathons",
  "certifications",
  "contact"
];

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Scroll-spy: highlight the tab for whichever section is in view.
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of sectionOrder) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 72, behavior: "smooth" });
    }
    setActiveTab(id);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <div className="relative isolate min-h-screen overflow-x-hidden bg-background">
                <BackgroundParticles />
                <Navigation activeTab={activeTab} onTabChange={scrollToSection} />

                {/* All sections stacked into one continuously scrollable page. */}
                <section id="home">
                  <Hero />
                </section>

                <section id="about" className="py-20">
                  <div className="container mx-auto px-6">
                    <About />
                  </div>
                </section>

                <section id="experience" className="py-20">
                  <div className="container mx-auto px-6">
                    <Experience />
                  </div>
                </section>

                <section id="projects" className="py-20">
                  <div className="container mx-auto px-6">
                    <Projects />
                  </div>
                </section>

                <section id="organizations" className="py-20">
                  <div className="container mx-auto px-6">
                    <Organizations />
                  </div>
                </section>

                <section id="hackathons" className="py-20">
                  <div className="container mx-auto px-6">
                    <Hackathons />
                  </div>
                </section>

                <section id="certifications" className="py-20">
                  <div className="container mx-auto px-6">
                    <Certifications />
                  </div>
                </section>

                <section id="contact" className="py-20">
                  <div className="container mx-auto px-6">
                    <Contact />
                  </div>
                </section>
              </div>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

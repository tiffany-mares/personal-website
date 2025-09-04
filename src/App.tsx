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
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Organizations from "./components/Organizations";
import Hackathons from "./components/Hackathons";

const queryClient = new QueryClient();

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "certifications", "projects", "organizations", "hackathons", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navigation

      for (const section of sections) {
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
      const offset = 80; // Account for fixed navigation
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setActiveTab(id);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <div className="min-h-screen">
                <Navigation activeTab={activeTab} onTabChange={scrollToSection} />
                
                {/* All sections in one scrollable page */}
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
                
                <section id="skills" className="py-20">
                  <div className="container mx-auto px-6">
                    <Skills />
                  </div>
                </section>
                
                <section id="certifications" className="py-20">
                  <div className="container mx-auto px-6">
                    <Certifications />
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

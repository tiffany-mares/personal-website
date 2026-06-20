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
import Blog from "./components/Blog";

const queryClient = new QueryClient();

const sectionComponents: Record<string, JSX.Element> = {
  home: <Hero />,
  about: <About />,
  experience: <Experience />,
  projects: <Projects />,
  organizations: <Organizations />,
  certifications: <Certifications />,
  blog: <Blog />,
  contact: <Contact />
};

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Each tab behaves like its own page: jump to the top when switching.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeTab]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <div className="min-h-screen overflow-x-hidden bg-background">
                <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

                {/* Each tab is its own standalone page on a simple background. */}
                <main>
                  {activeTab === "home" ? (
                    <div key={activeTab} className="animate-fade-in-delay">
                      {sectionComponents.home}
                    </div>
                  ) : (
                    <div key={activeTab} className="flex min-h-screen flex-col justify-center animate-fade-in-delay">
                      <div className="container mx-auto w-full px-6 pb-16 pt-28">
                        {sectionComponents[activeTab]}
                      </div>
                    </div>
                  )}
                </main>
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

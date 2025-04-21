// File: src/App.tsx
import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ClientReview } from "./components/ClientReview";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar handles its own scroll & menu state internally */}
      <Navbar />

      {/* Page sections */}
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ClientReview />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyEphorTech from "@/components/WhyEphorTech";
import About from "@/components/About";
import BrandReveal from "@/components/BrandReveal";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import WhatsAppButton from "@/components/WhatsAppButton";

const SplashScreen = dynamic(() => import("@/components/SplashScreen"), {
  ssr: false,
});

export default function HomeContent() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <div
        style={{
          opacity: splashDone ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <CursorGlow />
        <Navbar />
        <WhatsAppButton />
        <main>
          <Hero />
          <Marquee />
          <Partners />
          <Stats />
          <Services />
          <WhyEphorTech />
          <About />
          <BrandReveal />
          <Testimonials />
          <BlogPreview />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

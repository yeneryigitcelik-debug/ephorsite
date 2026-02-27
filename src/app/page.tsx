import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import About from "@/components/About";
import BrandReveal from "@/components/BrandReveal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <TrustedBy />
        <Services />
        <About />
        <BrandReveal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

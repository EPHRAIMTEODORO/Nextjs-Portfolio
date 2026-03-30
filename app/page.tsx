import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Skills";
import WhyMe from "@/components/About";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyMe />
      <Projects />
      <Process />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}

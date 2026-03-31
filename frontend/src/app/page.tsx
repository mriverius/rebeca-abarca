import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <Problem />
      <About />
      <Services />
      <Process />
      <FAQ />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}

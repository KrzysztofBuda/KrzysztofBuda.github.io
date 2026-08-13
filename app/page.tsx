import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505]">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
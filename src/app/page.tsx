import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Strengths from "@/components/sections/Strengths";
import Works from "@/components/sections/Works";
import Flow from "@/components/sections/Flow";
import FAQ from "@/components/sections/FAQ";
import Company from "@/components/sections/Company";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Strengths />
        <Works />
        <Flow />
        <FAQ />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

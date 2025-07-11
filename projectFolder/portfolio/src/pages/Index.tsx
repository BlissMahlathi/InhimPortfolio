import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import BusinessSolutions from "@/components/BusinessSolutions";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Process />
        <BusinessSolutions />
        <Projects />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

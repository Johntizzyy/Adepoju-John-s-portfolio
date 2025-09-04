import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Work from "@/components/work";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

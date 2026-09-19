import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import HowWeWork from "@/components/HowWeWork";
import Expertise from "@/components/Expertise";
import MethodsSection from "@/components/MethodsSection";
import Services from "@/components/Services";
import About from "@/components/About";
import OurOffice from "@/components/OurOffice";
import FAQSection from "@/components/FAQSection";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <HowWeWork />
        <Expertise />
        <MethodsSection />
        <Services />
        <About />
        <OurOffice />
        <FAQSection />
        <AppointmentCTA />
      </main>
      <Footer />
    </>
  );
}

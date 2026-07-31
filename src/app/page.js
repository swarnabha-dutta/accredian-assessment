import Navbar from "@/components/layout/Navbar";
import AccredianEdge from "@/components/sections/AccredianEdge";
import CATSection from "@/components/sections/CATSection";
import Clients from "@/components/sections/Clients";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import DomainExpertise from "@/components/sections/DomainExpertise";
import FAQSection from "@/components/sections/FAQSection";
import Home from "@/components/sections/Home";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import StrategicSkill from "@/components/sections/StrategicSkill";
import Testimonials from "@/components/sections/Testimonials";









export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Home />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <StrategicSkill />
        <CATSection />
        <HowItWorks />
        <FAQSection />
        <Testimonials />
      </main>
    </>
  );
}

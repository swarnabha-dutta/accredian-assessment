import Navbar from "@/components/layout/Navbar";
import AccredianEdge from "@/components/sections/AccredianEdge";
import CATSection from "@/components/sections/CATSection";
import Clients from "@/components/sections/Clients";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import DomainExpertise from "@/components/sections/DomainExpertise";
import Home from "@/components/sections/Home";
import Stats from "@/components/sections/Stats";
import StrategicSkill from "@/components/sections/StrategicSkill";









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

      </main>
    </>
  );
}

import Navbar from "@/components/layout/Navbar";
import Clients from "@/components/sections/Clients";
import Home from "@/components/sections/Home";
import Stats from "@/components/sections/Stats";
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Home />
        <Stats />
        <Clients />
      </main>
    </>
  );
}

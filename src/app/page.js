import Navbar from "@/components/layout/Navbar";
import Clients from "@/components/sections/Clients";
import Home from "@/components/sections/Home";
import Stats from "@/components/sections/Stats";
export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Stats />
      <Clients/>
    </>
  );
}

import { Globe } from "@/components/globe";
import ScrollArrow from "@/components/scroll-arrow";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Welcome from "./components/Welcome";
export default function Home() {
  return (
    <main className="w-full">
      <NavBar />

      <Welcome />
      <ScrollArrow />
      <BackgroundBeams />
      <Globe />
      <Services />
      <Pricing />
      <Footer />
    </main>
  );
}

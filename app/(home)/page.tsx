import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import NavBar from "./components/NavBar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";
import { Globe } from "@/components/globe";
import { LampContainer, LampDemo } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Welcome from "./components/Welcome";
import { Spotlight } from "@/components/ui/spotlight";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ScrollArrow from "@/components/scroll-arrow";
export default function Home() {
  return (
    <main className="w-full">
           <NavBar />

           <Welcome />
           <BackgroundBeams />
           <Globe />
           <Services />
           <Pricing />
           <Footer />
    </main>
  );
}

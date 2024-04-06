import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import NavBar from "./components/NavBar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";
export default function Home() {
  return (
    <main className="w-full">
           <NavBar />
           <BackgroundBeams />
    </main>
  );
}

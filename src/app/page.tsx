import Hero from "@/components/Hero";
import Image from "next/image";
import { NavBar } from "@/components/ui/NavBar";
import { navItems } from "@/data";
import About from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
            <NavBar navItems={navItems}/>
            <Hero />
            <About/>
        </div>
    </main>
  );
}

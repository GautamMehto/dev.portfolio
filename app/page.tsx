import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import NewProject from "@/components/NewProject";
import Experiance from "@/components/Experiance";
import Approach from "@/components/Approach";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <NewProject/>
        <Feedback/>
        <Experiance/>
        <Approach/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}

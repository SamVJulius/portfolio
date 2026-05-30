"use client";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Leadership from "@/components/sections/Leadership";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const StarField = dynamic(() => import("@/components/background/StarField"), {
  ssr: false,
});
const CustomCursor = dynamic(() => import("@/components/background/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <div className="noise-overlay" />

      {/* Persistent star background */}
      <div className="fixed inset-0 z-0">
        <StarField />
      </div>

      {/* Global nebula blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="nebula-bg w-[600px] h-[600px] top-[-200px] left-[-200px]"
          style={{ background: "radial-gradient(circle, rgba(108,63,197,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="nebula-bg w-[500px] h-[500px] top-[40%] right-[-150px]"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="nebula-bg w-[400px] h-[400px] bottom-[-100px] left-[30%]"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Leadership />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

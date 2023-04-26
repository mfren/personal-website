import About from "@/components/Home/About";
import Education from "@/components/Home/Education";
import Experience from "@/components/Home/Experience";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import React from "react";

export default function HomePage() {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
        </div>
    )
}
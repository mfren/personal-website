import About from "@/components/Home/About";
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
        </div>
    )
}
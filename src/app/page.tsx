import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import React from "react";

export default function HomePage() {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
        </div>
    )
}
"use client";

import profilePic from "../../../../public/images/profile.jpg";
import linkedInLogo from "../../../../public/svgs/linkedin.svg";
import githubLogo from "../../../../public/svgs/github.svg";
import emailLogo from "../../../../public/svgs/email.svg";
import Image from "next/image";
import { HomePageSection } from "@/components/HomePageSection";
import { ABOUT } from "@/content/about";

const socials = [
    {
        name: "LinkedIn",
        displayName: "matthewfrench019",
        icon: linkedInLogo,
        link: "https://www.linkedin.com/in/matthewfrench019/",
    },
    {
        name: "GitHub",
        displayName: "MattAdamFrench",
        icon: githubLogo,
        link: "https://github.com/MattAdamFrench",
    },
    {
        name: "Email",
        displayName: "matt.adam.french@gmail.com",
        icon: emailLogo,
        link: "mailto:matt.adam.french@gmail.com",
    }
]

export function About() {

    return (
        <HomePageSection id="about">
            <div className="flex flex-col sm:flex-row mx-auto">
                <div className="basis-1/3 p-10">
                    <Image src={profilePic} alt="Matt French" className="rounded-full h-40 mx-auto" priority/>
                </div>
                <div className="basis-2/3 flex flex-col justify-center">
                    <h3 className="font-semibold text-3xl">About Me</h3>
                    <p className="font-light dark:text-slate-300">
                        {ABOUT}
                    </p>
                </div>
            </div>
            <br />
            <div className="flex flex-row flex-wrap justify-evenly gap-3">
                {socials.map((social, index) => (
                    <a className="flex flex-row items-center h-5 gap-1" href={social.link} target="_blank" rel="noopener noreferrer" key={index}>
                        <Image src={social.icon} alt={social.name} width="20" className="max-h-full" />
                        <p className="font-extralight hidden sm:block">{social.displayName}</p>
                    </a>
                ))}
            </div>
        </HomePageSection>
    )
}
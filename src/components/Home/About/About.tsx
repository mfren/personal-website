"use client";

import profilePic from "../../../../public/images/profile.jpg";
import linkedInLogo from "../../../../public/svgs/linkedin.svg";
import githubLogo from "../../../../public/svgs/github.svg";
import emailLogo from "../../../../public/svgs/email.svg";
import Image from "next/image";

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
        <div id="about" className="container pt-20 pb-20">
            <div className="flex flex-col sm:flex-row mx-auto">
                <div className="basis-1/3 p-10">
                    <Image src={profilePic} alt="Matt French" className="rounded-full h-40 mx-auto" priority/>
                </div>
                <div className="basis-2/3 flex flex-col justify-center">
                    <h3 className="font-semibold text-3xl">About Me</h3>
                    <p className="font-light">
                        I am a software developer with a passion for learning and creating. I have a background in web development and am currently learning mobile development. I am currently working as a software developer at <a href="https://www.3dmd.com/" className="text-blue-500">3DMD</a> where I am working on a variety of projects including a web application for managing and tracking medical devices, a mobile application for managing and tracking medical devices, and a web application for managing and tracking medical device repairs.
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
        </div>
    )
}
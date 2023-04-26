import profilePic from "../../../public/images/profile.jpg";
import Image from "next/image";
import { HomePageSection } from "@/components/HomePageSection";
import { ABOUT } from "@/content/about";
import { SOCIALS } from "@/content/socials";

export default function About() {

    return (
        <HomePageSection id="about">
            <div className="flex flex-col sm:flex-row mx-auto">
                <div className="basis-1/3 p-10">
                    <Image src={profilePic} alt="Matt French" className="rounded-full w-full max-w-[256px] mx-auto" priority/>
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
                {SOCIALS.map((social, index) => (
                    <a className="flex flex-row items-center h-5 gap-1" href={social.url} target="_blank" rel="noopener noreferrer" key={index}>
                        <Image src={social.logo} alt={social.name} width="20" className="max-h-full" />
                        <p className="font-extralight hidden sm:block">{social.username}</p>
                    </a>
                ))}
            </div>
        </HomePageSection>
    )
}
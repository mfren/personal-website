import linkedInLogo from "../../public/svgs/linkedin.svg";
import githubLogo from "../../public/svgs/github.svg";
import emailLogo from "../../public/svgs/email.svg";


export type Social = {
    name: string,
    username: string,
    logo: any,
    url: string,
}

export const linkedIn: Social = {
    name: "LinkedIn",
    username: "matthewfrench019",
    logo: linkedInLogo,
    url: "https://www.linkedin.com/in/matthewfrench019/",
}

export const github: Social = {
    name: "GitHub",
    username: "MattAdamFrench",
    logo: githubLogo,
    url: "https://github.com/MattAdamFrench",
}

export const email: Social = {
    name: "Email",
    username: "matt.adam.french@gmail.com",
    logo: emailLogo,
    url: "mailto:matt.adam.french@gmail.com",
}

export const SOCIALS: Social[] = [
    linkedIn, github, email
]


import { CSharp, JavaScript, Python, Skill, TypeScript } from "./skills";

export type Experience = {
    organization: string;
    position: string;
    start: Date;
    end: Date | null;
    description: string;
    type: ExperienceType;
    skills: Skill[];
}

export enum ExperienceType {
    Work, Education
}

export const SpringboardIT: Experience = {
    organization: "Springboard IT",
    position: "Software Engineer",
    start: new Date("2022-05-01"),
    end: new Date("2022-12-01"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
    type: ExperienceType.Work,
    skills: [JavaScript, CSharp, Python]
}

export const KolmTech: Experience = {
    organization: "KolmTech Ltd",
    position: "Founder",
    start: new Date("2022-12-01"),
    end: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
    type: ExperienceType.Work,
    skills: []
}

export const MyMarkingMachine: Experience = {
    organization: "MyMarkingMachine",
    position: "Technical Lead",
    start: new Date("2023-02-01"),
    end: new Date("2023-05-01"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
    type: ExperienceType.Work,
    skills: [TypeScript]
}

export const EXPERIENCE: Experience[] = [
    SpringboardIT, KolmTech, MyMarkingMachine
];
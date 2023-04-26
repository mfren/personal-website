import { AWS, AspDotNet, Azure, CSharp, Docker, GitHub, GoLang, JavaScript, Kubernetes, MySQL, PostgreSQL, Python, React, RubyOnRails, Skill, SqlServer, TypeScript } from "./skills";

export type Experience = {
    organization: string;
    position: string;
    start: Date;
    end: Date | null;
    description?: string;
    descItems?: string[];
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
    descItems: [
        "Designed a full-stack architecture using ASP.NET, Entity Framework, NopCommerce, and TypeScript for a new customer web portal for Pattersons Cleaning.",
        "Experimented with Azure Form Recogniser and OCR for invoice processing & redaction, which secured us several new contracts.",
        "Managed our custom ERP product, supported its 5 major customers, organised its continued development, and implemented new CI/CD pipelines.",
        "Utilised ASP.NET Entity Framework to develop new functionality for a custom CRM, built around an existing legacy database.",
    ],
    type: ExperienceType.Work,
    skills: [JavaScript, CSharp, Azure, Python, TypeScript, AspDotNet, SqlServer]
}

export const KolmTech: Experience = {
    organization: "KolmTech Ltd",
    position: "Founder",
    start: new Date("2022-12-01"),
    end: null,
    descItems: [
        "KolmTech aims to support local small businesses that lack internal IT experience.",
        "We provide free consultations to try and understand their needs and then we can advise them on what we can offer a variety of services and support packages.",
    ],
    type: ExperienceType.Work,
    skills: [React, GoLang, TypeScript, RubyOnRails, GitHub]
}

export const MyMarkingMachine: Experience = {
    organization: "MyMarkingMachine",
    position: "Technical Lead",
    start: new Date("2023-02-01"),
    end: new Date("2023-05-01"),
    descItems: [
        "Managed the rearchitecting & migration of our data-models, increasing query performance by an average of 600% and reducing our data-footprint by 40%.",
        "Designed and managed our internal workflows, using Agile & Kanban methodologies, and used tools like ClickUp to schedule & prioritise.",
        "Developed metrics scripts using Python to increase our understanding of our userbase and provided key data for investors.",
        "Ran our user helpdesk, supporting them with issues and fixed application problems.",
        "Setup CI/CD using GitHub actions and Vercel to reduce our deployment downtimes from ~4 hours to minutes.",
    ],
    type: ExperienceType.Work,
    skills: [React, TypeScript, Python, GitHub, AWS, MySQL]
}

export const Clearmatics: Experience = {
    organization: "Clearmatics",
    position: "Software Engineer Intern",
    start: new Date("2021-06-01"),
    end: new Date("2021-08-01"),
    descItems: [
        "Created a new UI for exchanging tokens using React and TypeScript, which forms a critical part users' interaction with the blockchain.",
        "Migrated our GitHub Actions testing scripts to use KinD instead of GKE, saving hundreds of pounds per month in hosting fees.",
        "Developed new Docker containers for performing Proof-of-Work on the blockchain, which were ~30% faster than our existing ones.",
        "Managed our local testing blockchain, using Helm charts and Kubernetes to improve deployment speeds.",
    ],
    type: ExperienceType.Work,
    skills: [React, TypeScript, Docker, Kubernetes, GitHub, PostgreSQL]
}

export const MyMarkingMachineIntern: Experience = {
    organization: "MyMarkingMachine",
    position: "Software Engineer Intern",
    start: new Date("2021-02-01"),
    end: new Date("2021-07-01"),
    descItems: [
        "Redesigned the whole frontend using React, Typescript, and MUI, creating a sleek and modern interface, contributing to a ~500% rise in users over just 2 months.",
        "Built a new CI/CD pipeline using GitHub Actions, Shell scripts, and Google Cloud, reducing our testing & deployment times from ~4 hours to just minutes.",
    ],
    type: ExperienceType.Work,
    skills: [React, TypeScript, GitHub]
}

export const EXPERIENCE: Experience[] = [
    SpringboardIT, KolmTech, MyMarkingMachine, Clearmatics, MyMarkingMachineIntern
];
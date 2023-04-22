import javascriptLogo from "../../../public/svgs/javascript.svg";
import typescriptLogo from "../../../public/svgs/typescript.svg";
import pythonLogo from "../../../public/svgs/python.svg";
import javaLogo from "../../../public/svgs/java.svg";
import csharpLogo from "../../../public/svgs/csharp.svg";



enum TimelineType {
    Work, Education
}

type Experience = {
    organization: string;
    position: string;
    start: Date;
    end: Date | null;
    description: string;
    type: TimelineType;
    skills: Skill[];
    projects: Project[];
}

type Project = {
    name: string;
    description: string;
    start?: Date;
    end?: Date;
    skills: Skill[];
}

export const experience: Experience[] = [
    {
        organization: "MyMarkingMachine",
        position: "Technical Lead",
        start: new Date("2023-02-01"),
        end: new Date("2023-05-01"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        type: TimelineType.Work,
        skills: [],
        projects: []
    },
    {
        organization: "KolmTech Ltd",
        position: "Founder",
        start: new Date("2022-12-01"),
        end: null,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        type: TimelineType.Work,
        skills: [],
        projects: []
    },
    {
        organization: "Springboard IT",
        position: "Software Engineer",
        start: new Date("2022-05-01"),
        end: new Date("2022-12-01"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        type: TimelineType.Work,
        skills: [],
        projects: []
    },
]


type Skill = {
    name: string,
    logo: any,
    description: string,
}


export const skills = {
    "Languages": [
        {
            name: "JavaScript",
            logo: javascriptLogo,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
        },
        {
            name: "TypeScript",
            logo: typescriptLogo,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
        },
        {
            name: "Python",
            logo: pythonLogo,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
        },
        {
            name: "Java",
            logo: javaLogo,
        },
        {
            name: "C#",
            logo: csharpLogo,
        },
    ],
    "Frameworks": [
        "React",
        "Next.js",
    ],
    "Databases": [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "SQL Server",
    ],
    "Tools": [
        "Git/GitHub",
        "Docker",
        "Vercel",
        "AWS",
        "Azure",
    ],
}
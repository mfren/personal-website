

enum TimelineType {
    Work, Education
}

export const experience = [
    {
        company: "MyMarkingMachine",
        position: "Technical Lead",
        start: new Date("2023-02-01"),
        end: new Date("2023-05-01"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        type: TimelineType.Work
    },
    {
        company: "KolmTech Ltd",
        position: "Founder",
        start: new Date("2022-12-01"),
        end: null,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        type: TimelineType.Work
    },
    {
        company: "Springboard IT",
        position: "Software Engineer",
        start: new Date("2022-05-01"),
        end: new Date("2022-12-01"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
        type: TimelineType.Work
    },
]

export const skills = {
    "Languages": [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C#",
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
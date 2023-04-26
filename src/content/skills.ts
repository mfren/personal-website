
export type Skill = {
    name: string,
    logoFont: string,
    type: SkillType,
    description: string,
} 

export enum SkillType {
    Language, Framework, Library, Database, Other
}

export const JavaScript: Skill = {
    name: "JavaScript",
    logoFont: "devicon-javascript-plain",
    type: SkillType.Language,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const TypeScript: Skill = {
    name: "TypeScript",
    logoFont: "devicon-typescript-plain",
    type: SkillType.Language,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const Python: Skill = {
    name: "Python",
    logoFont: "devicon-python-plain",
    type: SkillType.Language,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const Java: Skill = {
    name: "Java",
    logoFont: "devicon-java-plain",
    type: SkillType.Language,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const CSharp: Skill = {
    name: "C#",
    logoFont: "devicon-csharp-plain",
    type: SkillType.Language,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const React: Skill = {
    name: "React",
    logoFont: "devicon-react-original",
    type: SkillType.Framework,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const GoLang: Skill = {
    name: "Go",
    logoFont: "devicon-go-plain",
    type: SkillType.Language,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const RubyOnRails: Skill = {
    name: "Ruby on Rails",
    logoFont: "devicon-rails-plain",
    type: SkillType.Framework,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const AspDotNet: Skill = {
    name: "ASP.NET",
    logoFont: "devicon-dot-net-plain",
    type: SkillType.Framework,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const Azure: Skill = {
    name: "Azure",
    logoFont: "devicon-azure-plain",
    type: SkillType.Other,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const AWS: Skill = {
    name: "AWS",
    logoFont: "devicon-amazonwebservices-plain",
    type: SkillType.Other,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const MySQL: Skill = {
    name: "MySQL",
    logoFont: "devicon-mysql-plain",
    type: SkillType.Database,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl."
}

export const PostgreSQL: Skill = {
    name: "PostgreSQL",
    logoFont: "devicon-postgresql-plain",
    type: SkillType.Database,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl."
}

export const SqlServer: Skill = {
    name: "SQL Server",
    logoFont: "devicon-microsoftsqlserver-plain",
    type: SkillType.Database,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl."
}

export const Docker: Skill = {
    name: "Docker",
    logoFont: "devicon-docker-plain",
    type: SkillType.Other,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl."
}

export const Kubernetes: Skill = {
    name: "Kubernetes",
    logoFont: "devicon-kubernetes-plain",
    type: SkillType.Other,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl."
}

export const GitHub: Skill = {
    name: "Git/GitHub",
    logoFont: "devicon-github-plain",
    type: SkillType.Other,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl."
}

export const SKILLS: Skill[] = [
    JavaScript, TypeScript, Python, Java, CSharp, React, GoLang, RubyOnRails, AspDotNet, Azure, AWS,
    MySQL, PostgreSQL, SqlServer, Docker, Kubernetes, GitHub
];
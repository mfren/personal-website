import javascriptLogo from "../../public/svgs/javascript.svg";
import typescriptLogo from "../../public/svgs/typescript.svg";
import pythonLogo from "../../public/svgs/python.svg";
import javaLogo from "../../public/svgs/java.svg";
import csharpLogo from "../../public/svgs/csharp.svg";

export type Skill = {
    name: string,
    logo: any,
    type: SkillType,
    description: string,
} 

export enum SkillType {
    Language, Framework, Library, Database, Other
}

export const JavaScript: Skill = {
    name: "JavaScript",
    logo: javascriptLogo,
    type: SkillType.Language,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const TypeScript: Skill = {
    name: "TypeScript",
    logo: typescriptLogo,
    type: SkillType.Language,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const Python: Skill = {
    name: "Python",
    logo: pythonLogo,
    type: SkillType.Language,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const Java: Skill = {
    name: "Java",
    logo: javaLogo,
    type: SkillType.Language,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}

export const CSharp: Skill = {
    name: "C#",
    logo: csharpLogo,
    type: SkillType.Language,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem."
}
export const SKILLS: Skill[] = [
    JavaScript, TypeScript, Python, Java, CSharp
];
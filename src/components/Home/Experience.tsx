import { HomePageSection } from "@/components/HomePageSection";
import { EXPERIENCE, Experience } from "@/content/experience"
import { Skill } from "@/content/skills";

const ordering = (a: Experience, b: Experience) => {
    if (a.start > b.start) {
        return -1;
    } else if (a.start < b.start) {
        return 1;
    } else {
        return 0;
    }
}

const dateFormatter = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: 'short' });

function SkillChip(props: { skill: Skill }) {

    return (
        <div className="max-h-fit flex flex-row gap-2 items-center pl-2 pr-3 pt-1 pb-1 border rounded-full border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600">
            <i className={`${props.skill.logoFont} colored`} />
            <p className="font-extralight text-xs text-center select-none">{props.skill.name}</p>
        </div>
    )
}

function ExperienceSection(props: { experience: Experience }) {

    let dateText;
    if (props.experience.end) {
        dateText = `${dateFormatter.format(props.experience.start)} – ${dateFormatter.format(props.experience.end)}`
    } else {
        dateText = `${dateFormatter.format(props.experience.start)} – Present`
    }

    return (
        <div className="flex flex-col mx-auto">
            <h4 className="font-light text-xl"><span className="font-medium">{props.experience.organization} &#183;</span> {props.experience.position}</h4>
            
            <div className="flex flex-col sm:flex-row gap-2 pt-1 pb-1">
                <p className="mr-5 font-light min-w-fit">{dateText}</p>
                <div className="flex flex-row flex-wrap gap-2">
                    {props.experience.skills.map((skill, index) => (
                        <SkillChip skill={skill} key={index} />
                    ))}
                </div>
            </div>
            <ul className="list-disc list-outside ml-5 gap-5">
                {props.experience.descItems?.map((desc, index) => (
                    <li key={index} className="mb-1">
                        <p className="font-light">{desc}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function Experience() {

    return (
        <HomePageSection id="experience" title="Experience">
            <div className="flex flex-col gap-8">
                {EXPERIENCE.sort(ordering).map((experience, index) => (
                    <ExperienceSection experience={experience} key={index} />
                ))}
            </div>
        </HomePageSection>
    )
}
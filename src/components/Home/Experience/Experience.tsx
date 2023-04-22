import { EXPERIENCE } from "@/content/experience"
import Image from "next/image"

export function Experience() {

    return (
        <div>
            <div className="container pt-20 pb-20">
            <h3 className="font-semibold text-5xl text-center mb-3">Experience</h3>

                <div className="flex flex-col gap-8">
                    {EXPERIENCE.map((job, index) => (
                        <div className="flex flex-col mx-auto" key={index}>
                            <h4>{job.organization} - {job.position}</h4>
                            <p>{job.start.getFullYear()}/{job.start.getMonth()} - {job.end?.getFullYear()}/{job.end?.getMonth()}</p>
                            <p>{job.description}</p>
                            <div className="flex flex-row gap-2">
                                {job.skills.map((skill, index) => (
                                    <div className="flex flex-row gap-2 items-center pt-1 pb-1 pl-1 pr-4 border rounded bg-white border-white drop-shadow-md hover:drop-shadow-xl hover:cursor-pointer" key={index}>
                                        <Image src={skill.logo} alt={skill.name} width={20} className="h-8 w-8 mx-auto" />
                                        <p className="font-light text-center select-none">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
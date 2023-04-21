import { experience } from "@/content/Home/content"

export function Experience() {

    return (
        <div>
            <div className="container pt-20 pb-20">
            <h3 className="font-semibold text-5xl text-center mb-3">Experience</h3>

                <div className="flex flex-col gap-8">
                    {experience.map((job, index) => (
                        <div className="flex flex-col mx-auto" key={index}>
                            <h4>{job.company} - {job.position}</h4>
                            <p>{job.start.getFullYear()}/{job.start.getMonth()} - {job.end?.getFullYear()}/{job.end?.getMonth()}</p>
                            <p>{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
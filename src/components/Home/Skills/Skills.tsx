import { skills } from "@/content/Home/content"


export function Skills() {

    return (
        <div className="w-full bg-gray-700">
            <div id="skills" className="container pt-20 pb-20">
                <h3 className="text-gray-100 font-semibold text-5xl text-center mb-3">Skills</h3>
                
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <h4 className="font-semibold text-xl">Languages</h4>
                        {skills.Languages.map((language, index) => (
                            <p className="font-light" key={index}>{language}</p>
                        ))}
                    </div>
                    <div>
                        <h4 className="font-semibold text-xl">Frameworks</h4>
                        {skills.Frameworks.map((framework, index) => (
                            <p className="font-light" key={index}>{framework}</p>
                        ))}
                    </div>
                    <div>
                        <h4 className="font-semibold text-xl">Databases</h4>
                        {skills.Databases.map((database, index) => (
                            <p className="font-light" key={index}>{database}</p>
                        ))}
                    </div>
                    <div>
                        <h4 className="font-semibold text-xl">Tools</h4>
                        {skills.Tools.map((tool, index) => (
                            <p className="font-light" key={index}>{tool}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
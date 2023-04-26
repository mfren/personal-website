import { HomePageSection } from "../HomePageSection";

export default function Education() {
    return (
        <HomePageSection id="education" title="Education" dark>
            <div className="flex flex-col flex-wrap justify-center gap-4">
                <div className="flex flex-col">
                    <h4 className="font-light text-xl text-homepage-dark"><span className="font-medium">University of Warwick &#183;</span> Computer Science, BSc</h4>
                    <p className="text-homepage-dark">September 2021 - March 2022</p>
                    <p className="font-light text-slate-300">
                        {`I completed the first year of content my degree, averaging 87% in my modules, compared to a 65% cohort average.
                        University never really suited me, and Warwick wasn't working, so I decided to take a gap year
                        with a view to returning to a different university.
                        During my year off, I've worked with some amazing companies, and even started my own, and I've
                        come to the conclusion that I'm better suited in industry.`}
                    </p>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-light text-xl text-homepage-dark"><span className="font-medium">Sidcot School &#183;</span> A Levels</h4>
                    <p className="text-homepage-dark">September 2019 - June 2021</p>
                    <ul>
                        <li className="font-light text-slate-300">Maths &#183; A*</li>
                        <li className="font-light text-slate-300">Computer Science &#183; A*</li>
                        <li className="font-light text-slate-300">Physics &#183; A*</li>
                    </ul>
                </div>
            </div>
        </HomePageSection>
    )
}
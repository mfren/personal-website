

export function HomePageSection(props: { id: string, title?: string, dark?: boolean, children: React.ReactNode }) {

    const containerBg = props.dark === true ? "bg-homepage-dark" : "bg-homepage-light"
    const titleColor = props.dark === true ? "text-homepage-dark" : "text-homepage-light"

    return (
        <div className={`w-full ${containerBg}`}>
            <div id={props.id} className="container max-w-screen-md pt-20 pb-20">
                {props.title !== undefined && <h3 className={`font-semibold text-5xl text-center mb-5 ${titleColor}`}>{props.title}</h3>} 
                {props.children}
            </div>
        </div>
    )
}
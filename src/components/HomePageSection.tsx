

export function HomePageSection(props: { id: string, title?: string, dark?: any, children: React.ReactNode }) {

    let containerBg = props.dark ? "bg-homepage-dark" : "bg-homepage-light"
    let titleColor = props.dark ? "text-gray-100 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"

    return (
        <div className={`w-full ${containerBg}`}>
            <div id={props.id} className="container max-w-screen-md pt-20 pb-20">
                {props.title && <h3 className={`font-semibold text-5xl text-center mb-5 ${titleColor}`}>{props.title}</h3>} 
                {props.children}
            </div>
        </div>
    )
}
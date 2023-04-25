

export function HomePageSection(props: { id: string, title?: string, dark?: any, children: React.ReactNode }) {

    let containerBg = props.dark ? "bg-slate-700 dark:bg-slate-950" : "bg-slate-100 dark:bg-slate-800"
    let titleColor = props.dark ? "text-gray-100" : "text-gray-900"

    return (
        <div className={`w-full ${containerBg}`}>
            <div id={props.id} className="container max-w-screen-md pt-20 pb-20">
                {props.title && <h3 className={`font-semibold text-5xl text-center mb-3 ${titleColor}`}>{props.title}</h3>} 
                {props.children}
            </div>
        </div>
    )
}
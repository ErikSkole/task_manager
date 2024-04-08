export default function TaskCard(
    {props: {title, description, createdAt}}: {props: {title: string, description: string, createdAt: any}} 
) {
    const created = new Date(createdAt)
    const year = created.getFullYear()
    const month = created.getMonth() + 1
    const day = created.getDate()
    var hours:any = created.getHours()
    var minutes:any = created.getMinutes()

    if (minutes < 10) {
        minutes = `0${minutes.toString()}`
    }
    if (hours < 10) {
        hours = `0${hours.toString()}`
    }

    return (
        <>
            <div className="taskBox bg-background-700 text-text-100">
                <div className="taskBoxColor"></div>
                <div className="taskBoxContent flex flex-col p-4">
                    <div className="taskBoxHeader text-text-50">
                        <h2>{title}</h2>
                    </div>
                    <div className="taskBoxTextContent">
                        <p className="text-lg">{description}</p>
                    </div>
                </div>
                <p className="taskBoxDate text-xs text-text-400">
                    {`${hours}:${minutes} / ${year}-${month}-${day}`}
                </p>
            </div>
        </>
    )
}
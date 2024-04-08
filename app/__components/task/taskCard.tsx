export default function TaskCard(
    {props: {title, description, createdAt}}: {props: {title: string, description: string, createdAt: any}} 
) {
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
                    {createdAt.toString()}
                </p>
            </div>
        </>
    )
}
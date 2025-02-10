type ProjectDescriptionProps = {
    projTitle: string,
    timeframe: string,
    tasks: string[],
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({projTitle, timeframe, tasks}) => {
    return (
        <div className="projDesc-txt">
            <h3>{projTitle}</h3>
            <text><em>{timeframe}</em></text>
            <ul>
                {
                    tasks.map((task, index) => {
                        return(
                            <li key={index} className="proj-task-item">{task}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};
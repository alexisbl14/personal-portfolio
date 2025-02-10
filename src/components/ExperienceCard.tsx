
type ExperienceCardProps = {
    company: string,
    title: string,
    timeframe: string,
    companyDesc: string,
    duties: string[],
    link: string
}


export const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, title, timeframe, companyDesc, duties, link }) => {
    return(
        <div>
            <h2>{title}</h2>
            <a href={link}><h3>{company}</h3></a>
            <text>{timeframe}</text>
            <text>{companyDesc}</text>
            <ul>
                {
                    duties.map((duty, index) => {
                        return(
                            <li key={index}>{duty}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
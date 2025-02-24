import "./NewArrivalCard.scss"

interface NewArrivalCardProps {
    imageSrc: string;
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    classNameCon?: string;
}

export const NewArrivalCard: React.FC<NewArrivalCardProps> = function({
    imageSrc,
    title,
    description,
    linkText,
    linkHref,
    classNameCon= '',
}){
    return (
        <div className={`new-arrival-card ${classNameCon}`}>
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={linkHref} target="_blank" rel="noopener noreferrer">{linkText}</a>
        </div>
    )
}
import './CategoryCard.scss'

interface CAtCardProps {
    catName1?: string;
    imageClass1?: string;
}


export const CategoryCard: React.FC<CAtCardProps> = 
function({imageClass1, catName1}){
    return(
        <>
            <div className="cat-card">
                <i className={imageClass1}></i>
                <h6>
                    {catName1}
                </h6>
            </div>
        </>
    )
}
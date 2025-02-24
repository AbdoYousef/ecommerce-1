import './NewArrival.scss'
import { NewArrivalCard } from './NewArrivalCard';
interface Props{
    header?: string
    mainTopic?: string
}

export const NewArrival: React.FC<Props> = function(
    {header, mainTopic}
){
    return(
        <div className='container all-sec'>
            <p className='sec-head'>{header}</p>
            <div className='sec-topic'>
                <div className='sec-topic-lef'>
                    <h2>{mainTopic}</h2>
                </div>
            </div>
            <div className="new-arr-grid">
                <NewArrivalCard
                    classNameCon= "gr-1"
                    imageSrc="../../../public/images/ps5-slim-goedkope-playstation_large 1.png"
                    title="PlayStation 5"
                    description="Black and white version of the PS5 coming out on sale."
                    linkText="Shop Now"
                    linkHref="https://example.com/ps5"
                />
                <NewArrivalCard
                    classNameCon= "gr-2"
                    imageSrc="../../../public/images/attractive-woman-wearing-hat-posing-black-background 1.png"
                    title="Women's Collections"
                    description="Featured women collections that give you another vibe."
                    linkText="Shop Now"
                    linkHref="https://example.com/women"
                />
                <NewArrivalCard
                    classNameCon= "gr-3"
                    imageSrc="../../../public/images/speakers.png"
                    title="Speakers"
                    description="Amazon wireless speakers"
                    linkText="Shop Now"
                    linkHref="https://example.com/speakers"
                />
                <NewArrivalCard
                    classNameCon= "gr-4"
                    imageSrc="../../../public/images/gucci-perfium.png"
                    title="Perfume"
                    description="GUCCI INTENSE OUD EDP"
                    linkText="Shop Now"
                    linkHref="https://example.com/perfume"
                />
            </div>
            <div className='services-container'>
                <div className="service-item">
                    <i className="fa-solid fa-truck-fast"></i>
                    <h3>FREE AND FAST DELIVERY</h3>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className="service-item">
                    <i className="fa-solid fa-headset"></i>
                    <h3>24/7 CUSTOMER SERVICE</h3>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div className="service-item">
                    <i className="fa-regular fa-circle-check"></i>
                    <h3>MONEY BACK GUARANTEE</h3>
                    <p>We return money within 30 days</p>
                </div>
            </div>
        </div>
    )
}
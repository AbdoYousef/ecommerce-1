import './CategorySec.scss'
import { CarouselSlider } from '../ProductsCarousel/CarouselSlider';
import { CategoryCarousel } from './CategoryCarousel';

interface Props{
    header?: string
    mainTopic?: string
    carouselArrows?: boolean;
    getCarouselClass?: string;
    prodCarlClassMain?: string;
}

export const CategorySec: React.FC<Props> = function({header, mainTopic, carouselArrows, getCarouselClass, prodCarlClassMain}){

    return(
        <div className='container all-sec'>
            <p className='sec-head'>{header}</p>
            <div className='sec-topic'>
                <div className='sec-topic-lef'>
                    <h2>{mainTopic}</h2>
                </div>
                {carouselArrows&&(
                    <CarouselSlider carouselClass={getCarouselClass}/>
                )}
            </div>
            <CategoryCarousel  prodCarlClass={prodCarlClassMain}/>
        </div>
    )
}
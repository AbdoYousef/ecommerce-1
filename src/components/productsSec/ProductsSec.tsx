import './ProductsSec.scss'
import CountdownTimer from './CountdownTimer';
import { MainBtn } from '../Buttons/MainBtn';
import { ProdCarousel } from '../ProductsCarousel/ProdCarousel';
import { CarouselSlider } from '../ProductsCarousel/CarouselSlider';
interface Props{
    header?: string
    mainTopic?: string
    showCountdown?: boolean;
    carouselArrows?: boolean;
    getCarouselClass?: string;
    prodCarlClassMain?: string;
}
export const ProductsSec: React.FC<Props> = function({prodCarlClassMain, header, mainTopic, showCountdown, carouselArrows, getCarouselClass}){
    return (
        <div className='container all-sec'>
            <p className='sec-head'>{header}</p>
            <div className='sec-topic'>
                <div className='sec-topic-lef'>
                    <h2>{mainTopic}</h2>
                    {showCountdown&&(
                        <CountdownTimer targetDate="2025-12-31T23:59:59" />
                    )}
                </div>
                {carouselArrows&&(
                    <CarouselSlider carouselClass={getCarouselClass}/>
                )}
            </div>
            <ProdCarousel prodCarlClass={prodCarlClassMain}/>
            <MainBtn className="view-all-pro-btn" name='View All Products'/>
        </div>
    )
}
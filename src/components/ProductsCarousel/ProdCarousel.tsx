import './ProdCarousel.scss'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../ProductCard/ProductCard';

interface CarouselProps {
    prodCarlClass?: string;
}

export const ProdCarousel: React.FC<CarouselProps> = function({ prodCarlClass }){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
            ],
        };

        const products = [
            {
            name: '1-HAVIT HV-092 Gamepad',
            price: 160,
            discountPrice: 120,
            rating: 4.5,
            reviews: 88,
            image: '../../../public/images/products/play-station.png',
            },
            {
            name: 'AK-900 Wired Keyboard',
            price: 1160,
            discountPrice: 960,
            rating: 4.7,
            reviews: 75,
            image: '../../../public/images/products/keyBoard.png',
            },
            {
            name: 'IPS LCD Gaming Monitor',
            price: 400,
            discountPrice: 370,
            rating: 4.9,
            reviews: 99,
            image: '../../../public/images/products/tv.png',
            },
            {
            name: '5-Series Comfort Chair',
            price: 400,
            discountPrice: 375,
            rating: 4.8,
            reviews: 99,
            image: '../../../public/images/products/chair.png',
            },
        ];

    
    return(
        <Slider className={prodCarlClass} {...settings}>
            {products.map((product, index) => (
                <div className='handle-gap' key={index}>
                    <ProductCard
                        name={product.name}
                        price={product.price}
                        discountPrice={product.discountPrice}
                        rating={product.rating}
                        reviews={product.reviews}
                        image={product.image}
                    />
                </div>
                ))}
        </Slider>
    )
}


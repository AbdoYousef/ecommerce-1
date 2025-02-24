import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryCard } from './CategoryCard';

interface CarouselProps {
    prodCarlClass?: string;
}
export const CategoryCarousel: React.FC<CarouselProps> = function({prodCarlClass}){

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 6,
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

const cats =[
    {
        catName: 'Phones',
        imageClass: "bi bi-phone",
    },
    {
        catName: 'Laptops',
        imageClass: "bi bi-laptop",
    },
    {
        catName: 'SmartWatch',
        imageClass: "bi bi-smartwatch",
    },
    {
        catName: 'Camera',
        imageClass: "bi bi-camera",
    },
    {
        catName: 'HeadPhones',
        imageClass: "bi bi-headphones",
    },
    {
        catName: 'Gaming',
        imageClass: "bi bi-controller",
    },
]

    return (
        <>
        <Slider className={prodCarlClass} {...settings}>
            {cats.map((cat, index) => (
                <div key={index}>
                    <CategoryCard
                        imageClass1={cat.imageClass}
                        catName1={cat.catName}
                    />
                </div>
                ))}
        </Slider>
        </>
    )
}
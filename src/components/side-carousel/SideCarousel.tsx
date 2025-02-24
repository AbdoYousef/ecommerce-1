// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SideCarousel.scss'

export const SideCarousel = function(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
    return(
        <div className="side-carousel container">

            <ul>
                <li>
                    <a href="#">Woman’s Fashion <i className="bi bi-chevron-right"></i></a>
                </li>
                <li>
                    <a href="#">Men’s Fashion <i className="bi bi-chevron-right"></i></a>
                </li>
                <li>
                    <a href="#">Electronics</a>
                </li>
                <li>
                    <a href="#">Home & Lifestyle</a>
                </li>
                <li>
                    <a href="#">Medicine</a>
                </li>
                <li>
                    <a href="#">Sports & Outdoor</a>
                </li>
                <li>
                    <a href="#">Baby’s & Toys</a>
                </li>
                <li>
                    <a href="#">Groceries & Pets</a>
                </li>
                <li>
                    <a href="#">Health & Beauty</a>
                </li>
            </ul>
            <div className="slider">
                <Slider {...settings}>
                    <div className="slide-cards">
                        <div className="card-left">
                            <div className="item-name">
                                <img src="../../../public/images/1200px-Apple_gray_logo 1.png" alt="" />
                                <p>iPhone 14 Series</p>
                            </div>
                            <p>Up to 10% <br></br> off  Voucher</p>
                            <a href="#">Shop Now <i className="bi bi-arrow-right"></i></a>
                        </div>
                        <div className="card-img">
                        <img  src="./images/hero_endframe__cvklg0xk3w6e_large 2.png" alt="" />
                        </div>
                    </div>
                    <div className="slide-cards">
                        <div className="card-left">
                            <div className="item-name">
                                <img src="../../../public/images/1200px-Apple_gray_logo 1.png" alt="" />
                                <p>iPhone 14 Series</p>
                            </div>
                            <p>Up to 10% <br></br> off  Voucher</p>
                            <a href="#">Shop Now <i className="bi bi-arrow-right"></i></a>
                        </div>
                        <div className="card-img">
                        <img  src="./images/hero_endframe__cvklg0xk3w6e_large 2.png" alt="" />
                        </div>
                    </div>
                    <div className="slide-cards">
                        <div className="card-left">
                            <div className="item-name">
                                <img src="../../../public/images/1200px-Apple_gray_logo 1.png" alt="" />
                                <p>iPhone 14 Series</p>
                            </div>
                            <p>Up to 10% <br></br> off  Voucher</p>
                            <a href="#">Shop Now <i className="bi bi-arrow-right"></i></a>
                        </div>
                        <div className="card-img">
                        <img  src="./images/hero_endframe__cvklg0xk3w6e_large 2.png" alt="" />
                        </div>
                    </div>
                    <div className="slide-cards">
                        <div className="card-left">
                            <div className="item-name">
                                <img src="../../../public/images/1200px-Apple_gray_logo 1.png" alt="" />
                                <p>iPhone 14 Series</p>
                            </div>
                            <p>Up to 10% <br></br> off  Voucher</p>
                            <a href="#">Shop Now <i className="bi bi-arrow-right"></i></a>
                        </div>
                        <div className="card-img">
                        <img  src="./images/hero_endframe__cvklg0xk3w6e_large 2.png" alt="" />
                        </div>
                    </div>
                    <div className="slide-cards">
                        <div className="card-left">
                            <div className="item-name">
                                <img src="../../../public/images/1200px-Apple_gray_logo 1.png" alt="" />
                                <p>iPhone 14 Series</p>
                            </div>
                            <p>Up to 10% <br></br> off  Voucher</p>
                            <a href="#">Shop Now <i className="bi bi-arrow-right"></i></a>
                        </div>
                        <div className="card-img">
                        <img  src="./images/hero_endframe__cvklg0xk3w6e_large 2.png" alt="" />
                        </div>
                    </div>
                    <div className="slide-cards">
                        <div className="card-left">
                            <div className="item-name">
                                <img src="../../../public/images/1200px-Apple_gray_logo 1.png" alt="" />
                                <p>iPhone 14 Series</p>
                            </div>
                            <p>Up to 10% <br></br> off  Voucher</p>
                            <a href="#">Shop Now <i className="bi bi-arrow-right"></i></a>
                        </div>
                        <div className="card-img">
                        <img  src="./images/hero_endframe__cvklg0xk3w6e_large 2.png" alt="" />
                        </div>
                    </div>
                </Slider>

            </div>
        </div>
    )
}
import React from 'react';
import './ProductCard.scss'

interface ProductCardProps {
    name: string;
    price: number;
    discountPrice: number;
    rating: number;
    reviews: number;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    price,
    discountPrice,
    rating,
    reviews,
    image,
    }) => {
    return (
        <div className="product-card">
            <div className="card-img">
                <img src={image} alt={name} className="product-image" />
                <span className='prod-disc'>-{((price - discountPrice)*100 / price).toFixed(0)}%</span>
                <i className="item-like bi bi-heart"></i>
                <i className="item-see bi bi-eye"></i>
                <div className="btn add-to-cart">Add To Cart</div>
            </div>
            <div className="product-info">
                <h5>{name}</h5>
                <div className="price">
                    {discountPrice ? (
                        <>
                            <span className="discount-price">{discountPrice} $</span>
                            <span className="original-price">{price} $</span>
                        </>
                    ) : (
                        <span className="discount-price">{price} $</span>
                    )}
                </div>
                <div className="rating">
                    <span className="stars">{Array.from({ length: Math.floor(rating) }, () => '★').join('')}</span>
                    <span className="reviews">({reviews})</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
import { useEffect, useState } from 'react'
import { MainBtn } from '../Buttons/MainBtn'
import './BestSellingSec.scss'
import ProductCard from '../ProductCard/ProductCard'
import CountdownTimer from '../productsSec/CountdownTimer'

interface Props{
    header?: string
    mainTopic?: string
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    discountPrice?: number;
}



export const BestSellingSec: React.FC<Props> = function({header, mainTopic}){
    const[prods, setProds]= useState<Product[]>([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProds(data))
        .catch(error => console.error('Error fetching data:', error));
    }, [])
    return(
            <div className='container all-sec'>
                <p className='sec-head'>{header}</p>
                <div className='sec-topic'>
                    <div className='sec-topic-lef'>
                        <h2>{mainTopic}</h2>
                    </div>
                    <MainBtn name='View All'/>
                </div>
                <div className="best-prods">
                    { prods.slice(0, 4).map((prod) => ( 
                    <ProductCard 
                    key={prod.id} 
                    name={prod.title.slice(0, 12) + "..."}
                    price={prod.price}
                    discountPrice={prod.discountPrice || 0} 
                    rating={prod.rating.rate}
                    reviews={prod.rating.count}
                    image={prod.image}
                        />
                    ))}
                </div>
                <div className="best-bot">
                    <div className='best-bot-l'>
                        <span>Categories</span>
                        <h3>Enhance Your Music Experience</h3>
                        <CountdownTimer targetDate="2025-12-31T23:59:59" />
                        <div className="btn green-btn">Buy Now!</div>
                    </div>
                    <div className='best-bot-r'>
                        <img src="../../../public/images/JBL_BOOMBOX.png" alt="JBL_BOOM" />
                    </div>
                </div>
            </div>
    )
}
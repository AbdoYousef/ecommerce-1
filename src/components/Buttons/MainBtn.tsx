import React from 'react';
import './MainBtn.scss'
interface BtnName{
    name?: string;
    className?: string;  
}
export const MainBtn: React.FC<BtnName> = function({name, className}){
    return(
        <div className='main-btn-sty'>
            <button className={`btn main-btn ${className || ''}`}>{name}</button>
        </div>
    )
}
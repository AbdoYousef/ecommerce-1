import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './NavBar.scss'
import { NavBarIcons } from './NavBarIcons';
// import { ReactNode } from 'react';


export const NavBar= function(){
    return(
        <>
            <div className="nav-top d-flex justify-content-around">
                <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <a href="#" className='shop-btn'>ShopNow</a>
                </p>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        English
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Arabic</a></li>
                        <li><a className="dropdown-item" href="#">Italian</a></li>
                        <li><a className="dropdown-item" href="#">Spanish</a></li>
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">Exclusive</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-auto gap-3 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign Up</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="input-group">
                                <input
                                type="search"
                                className="form-control border-end-0"
                                placeholder="What are you looking for?"
                                aria-label="Search"
                                />
                            <button className="btn ms-2" type="submit">
                                <span className="input-group-text" style={{ backgroundColor: 'var(--bs-body-bg)' }}>
                                    <i className="bi bi-search"></i>
                                </span>
                            </button>
                            </div>
                        </form>
                        <NavBarIcons heart cart person/>
                    </div>
                </div>
            </nav>
        </>
    );
}
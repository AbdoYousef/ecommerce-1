import './NavbarIcons.scss'

interface NavIconsProps {
    heart?: boolean;
    cart?: boolean;
    person?: boolean;
}
export const NavBarIcons: React.FC<NavIconsProps> = function({heart, cart, person}){
    return (
        <>
            {heart&&(
                <i className="nav-i nav-i-heart bi bi-heart ms-3" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
            )}
            {cart&&(
                <i className="nav-i nav-i-cart bi bi-cart3 ms-3" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
            )}
            {person&&(
                    <i className="nav-i nav-i-person bi bi-person ms-3" style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
                        <div>
                            <a href="">
                                <i className="bi bi-person" style={{ fontSize: '1.5rem', cursor: 'pointer' }}></i>
                                <p>Manage My Account</p>
                            </a>
                            <a href="">
                                <i className="bi bi-bag"></i>
                                <p>My Order</p>
                            </a>
                            <a href="">
                                <i className="bi bi-x-circle"></i>
                                <p>My Cancellations</p>
                            </a>
                            <a href="">
                            <i className="bi bi-star"></i>
                                <p>My Reviews</p>
                            </a>
                            <a href="">
                                <i className="bi bi-box-arrow-left"></i>
                                <p>Logout</p>
                            </a>
                        </div>
                    </i>
            )}
            
        </>
    )
}
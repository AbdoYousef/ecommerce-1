// Footer.tsx

import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
return (
    <div className="footer-parent">
        <div className="footer container">
            <div className="footer-section">
                <h3>Exclusive</h3>
                <div className="email-subscribe">
                    <h4>Subscribe</h4>
                    <p>Get 10% off your first order</p>
                    <input type="email" placeholder="Enter your email" />
                </div>
            </div>
            <div className="footer-section">
                <h3>Support</h3>
                <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className="footer-section">
                <h3>Account</h3>
                <ul>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Login / Register</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Shop</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Quick Link</h3>
                <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-section app-download">
                <h3>Download App</h3>
                <p>Save $3 with App New User Only</p>
                <div className="app-download-img">
                    <div className="qr-codes">
                        <img src="../../../public/images/QrCode.png" alt="QR-code image" />
                    </div>
                    <div className="social-icons">
                        <div>
                            <i className="fa-brands fa-google-play"></i>
                            <div>
                                <p>GET IT NOW</p>
                                <h3>Google Play</h3>
                            </div>
                        </div>
                        <div>
                            <i className="fa-brands fa-apple"></i>                            
                            <div>
                                <p>Download on the </p>
                                <h3>App Store</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="copyright">
                <p>© Copyright Rimel 2025. All rights reserved.</p>
            </div>
    </div>
);
};

export default Footer;
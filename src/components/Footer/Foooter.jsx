import React from "react";
import './Footer.css'
import { assets } from "../../assets/assets";
const Footer = () =>{
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                <p>A food delivery e-commerce website serves as a convenient platform for users to explore, order, and enjoy their favorite meals from a wide variety of restaurants.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy & Policy</li>

                    </ul>
                    
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-12234567</li>
                        <li>contact@gmail.com</li>
                        
                    </ul>
                    
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 @ Tomato.com All Right Reserved.</p>
        </div>
    )
}
export default Footer
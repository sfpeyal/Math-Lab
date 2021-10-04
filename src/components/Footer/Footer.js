import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-div-holder mx-auto">
                <div className="pb-4">
                    <ul className="mt-2">
                        <li className="font-medium text-gray-50"><a href="https://www.facebook.com/">www.MATHLAb Facebook.com</a></li>
                        <li className="font-medium text-gray-50"><a href="https://www.youtube.com/">www.MATHLAb Youtube.com</a></li>
                        <li className="font-medium text-gray-50"><a href="https://www.instagram.com/">www.MATHLAb Instagram.com</a></li>
                        <li className="font-medium text-gray-50"><a href="https://www.facebook.com/Gmail/">www.MATHLAb Gmail.com</a></li>
                    </ul>
                </div>
                <div className="">
                    <h1 className="text-5xl">MATHLAb</h1>
                    <h1 className="text-3xl">Social Media</h1>
                </div>
            </div>
            <small>@ 2021 MATHLAb Bangladesh, ALL rights reserved.</small>
        </div>
    );
};

export default Footer;
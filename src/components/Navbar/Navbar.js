import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    };
    return (
        <div className="bg-blue-50 top">
            <nav className="w-5/6 mx-auto py-2">
                <div className="">
                    <span>MATH</span>
                    <span className="text-red-500">LAb</span>
                </div>
                <ul>
                    <li><NavLink className="font-medium" activeStyle={activeStyle} to="/home">Home</NavLink></li>
                    <li><NavLink className="font-medium" activeStyle={activeStyle} to="/about">About</NavLink></li>
                    <li><NavLink className="font-medium" activeStyle={activeStyle} to="/courses">Courses</NavLink></li>
                    <li><NavLink className="font-medium" activeStyle={activeStyle} to="/support">Support</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
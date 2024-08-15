import React from 'react';
import  "./index.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Nodium</div>
            <ul className="nav-links">
                <li><a href="#">Explore</a></li>
                <li><a href="#">English</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Become A Job Provider</a></li>
                <li><a href="#">Sign In</a></li>
            </ul>
            <button className="join-button">Join</button>
        </nav>
    );
};

export default Navbar;
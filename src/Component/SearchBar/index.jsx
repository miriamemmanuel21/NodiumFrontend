import React from 'react';
import './SearchBar.css';
import google from "../../assets/google.png"
import netfix from "../../assets/netfix.png"
import paypal from "../../assets/paypal.png"
import payoneer from "../../assets/payoneer.png"

function SearchBar() {
    return (
        <div className="search-bar-container">
            <h2>Find the right freelance service, right away</h2>
            <input type="text" placeholder="Search for any service..." />
            <div className="trusted-by">
                <p>Trusted by:</p>
                <div className="logos">
                    <img src={google} />
                    <img src={netfix} alt="Netflix" />
                    <img src={paypal} alt="PayPal" />
                    <img src={payoneer} alt="Payoneer" />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;

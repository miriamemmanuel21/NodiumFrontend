import React from 'react';
import './SearchBar.css';
import google from "../../assets/google.png"
import netflix from "../../assets/netflix.png"
import paypal from "../../assets/paypal.png"
import payoneer from "../../assets/payoneer.png"

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <h2>Find the right professional to get the job done</h2>
            <form>
                <input type="text" placeholder="Search for any service..."
                       style={{
                           borderColor: "rgb(119, 110, 98)",
                           backgroundColor: "rgb(24, 26, 27)",
                           color: "rgb(232, 230, 227)",
                       }}
                />
                <button type="submit">
                    <svg height="16"
                         width="16"
                         fill="currentFill"
                         viewBox="0 0 16 16"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"
                              style={{
                                  borderColor: "rgb(119, 110, 98)",
                                  backgroundColor: "rgb(24, 26, 27)",
                                  color: "rgb(232, 230, 227)",
                              }}
                        />
                    </svg>
                </button>
            </form>
            <div className="trusted-by">
                <span>Trusted by:</span>
                <ul>
                    <li><img src={google} alt="Google" width="53.41" height="17.87" /></li>
                    <li><img src={netflix} alt="NETFLIX" width="53.64" height="14.37" /></li>
                    <li><img src={paypal} alt="PayPal" width="53.01" height="12.69" /></li>
                    <li><img src={payoneer} alt="Payoneer" width="82.42" height="16" /></li>
                </ul>
            </div>
        </div>
    );
};

export default SearchBar;

import insta from "../../assets/insta.png"
import web from "../../assets/web.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import style from '../Style/index.module.css'
import Part from "../Part";
import GuideSession from "../GuideSession";
import FreelancingBenefits from "../FreelancingBenefits";
import ServiceCategoryList from "../ServiceCategoryList";
import SearchBar from "../SearchBar";
import paystack from "../../assets/paystack.png"

const Footer = () => {
    return (
        <div className={style.footer} style={{ backgroundColor: '#f1f1f1', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div><SearchBar /></div>
            <div><ServiceCategoryList /></div>
            <div><FreelancingBenefits /></div>
            <div><GuideSession /></div>
            <div><Part /></div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram" style={{ margin: '0 10px' }} /></a>
                <a href="https://www.website.com" target="_blank" rel="noopener noreferrer"><img src={web} alt="Website" style={{ margin: '0 10px' }} /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" style={{ margin: '0 10px' }} /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" style={{ margin: '0 10px' }} /></a>
            </div>

            <div className={style.footerSide} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div>
                    <p style={{ fontWeight: "bolder" }}>Categories</p>
                    <p>Graphic Design</p>
                    <p>Digital Marketing</p>
                    <p>Programming & Tech</p>
                    <p>Logo Maker</p>
                    <p>End To End Projects</p>
                </div>

                <div>
                    <p style={{ fontWeight: "bolder" }}>About</p>
                    <p>Careers</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                </div>

                <div>
                    <p style={{ fontWeight: "bolder" }}>Support</p>
                    <p>Help And Support</p>
                    <p>Trust And Safety</p>
                    <p>Quality Guide</p>
                </div>

                <div>
                    <p style={{ fontWeight: "bolder" }}>Community</p>
                    <p>Blogs</p>
                    <p>Event</p>
                    <p>Forum</p>
                    <p>Become A Member</p>
                </div>

                <div>
                    <p style={{ fontWeight: "bolder" }}>More From Nodium</p>
                    <p>Nodium Pro</p>
                    <p>Nodium Studios</p>
                    <p>Nodium Logo Maker</p>
                    <p>Nodium Guides</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <img src={paystack} alt="Paystack Payment Method" style={{ margin: '0 10px', width: '30px', height: 'auto' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <select style={{ marginRight: '20px' }}>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                </select>

                <select>
                    <option>NGN</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>JPY</option>
                </select>
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <p>Copyright © 2024 Nodium. <span style={{ display: "block" }}>All rights reserved</span></p>
                <a href="/terms-of-service" style={{ margin: '0 10px' }}>Terms of Service</a>
                <a href="/privacy-policy" style={{ margin: '0 10px' }}>Privacy Policy</a>
            </div>
        </div>
    )
}

export default Footer;
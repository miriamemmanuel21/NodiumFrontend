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

const Footer = ()=>{
    return(

        <div className={style.footer}>
            <div><SearchBar/></div>
            <div><ServiceCategoryList/></div>
            <div><FreelancingBenefits/></div>
            <div><GuideSession/></div>
            <div><Part/></div>
            <div>
                <img src={insta}/>
                <img src={web}/>
                <img src={twitter}/>
                <img src={youtube}/>
            </div>


            <div className={style.footerSide}>
                <div>
                    <div><p style={
                        {fontWeight: "bolder"}
                    }>Categories</p></div>
                    <p>Graphic Design</p>
                    <p>Digital Marketing</p>
                    <p>Programming & Tech</p>
                    <p>Logo Maker</p>
                    <p>End To End Projects</p>
                </div>

                <div><p style={
                    {fontWeight: "bolder"}
                }>About</p>
                    <p>Careers</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                </div>
                <div><p style={
                    {fontWeight: "bolder"}
                }>Community</p>
                    <p>Blogs</p>
                    <p>Event</p>
                    <p>Forum</p>
                    <p>Become A Member</p>
                </div>
                <div>
                    <p style={
                    {fontWeight: "bolder",marginTop:"13px"}}>

                    Business And Solution</p>
                    <p>Become An Agency</p>
                    <p>Clear Voice </p>
                    <p>Contact Sales</p>
                </div>
                <div><p style={
                    {fontWeight: "bolder"}
                }>Support</p>
                    <p>Help And Support</p>
                    <p>Trust And Safety </p>
                    <p>Quality Guide</p>
                </div>
                <p>Copyright © 2024 Nodium. <span style={{display: "block"}}>All rights reserved</span></p>
            </div>

        </div>

    )
}
export default Footer;
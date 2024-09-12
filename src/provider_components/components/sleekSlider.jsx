import React from "react";
import Slider from "react-slick";
import Image1 from '../../assets/setting_image.svg';
import Image2 from '../../assets/image_icon.svg';
import Image3 from '../../assets/speaker.svg';
import Image4 from '../../assets/red_logo_display.svg'
export default function SleekSlider(){
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            swipeToSlide: true
        };
        const contents = [
            [Image1, 'Web Development','60+ Jobs'],
            [Image2, 'Design & Arts','120+ Jobs'],
            [Image3, 'Marketing', '110+ Jobs'],
            [Image4 ,'Full Stack Development', '25+ Jobs']
        ]
        const DisplayContent=()=>{
            return (
                <div>
                    {
                        contents.map(([image,text1, text2])=>(
                            <div className={'flex gap-6 '}>
                                <img src={image} alt=""/>
                                <div className={'flex flex-col'}>
                                    <p className={'font-bold text-xl '}>{text1}</p>
                                    <p className={'tex-xl font-semibold text-gray-300'}>{text2}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
        }
    return (
            <div className="slider-container">
                <Slider {...settings}>
                    <DisplayContent/>
                </Slider>
            </div>
        );

}
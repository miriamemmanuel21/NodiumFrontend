import React from "react";
import Slider from "react-slick";
import Image1 from '../../assets/setting_image.svg';
import Image2 from '../../assets/image_icon.svg';
import Image3 from '../../assets/speaker.svg';
import Image4 from '../../assets/red_logo_display.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SleekSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: true,
        swipeToSlide:true,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll:3,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false
                }
            }
        ]
    };

    const contents = [
        [Image1, 'Web Development', '60+ Jobs'],
        [Image2, 'Design & Arts', '120+ Jobs'],
        [Image3, 'Marketing', '110+ Jobs'],
        [Image4, 'Devops', '25+ Jobs']
    ];

    return (
        <div className="slider-container" style={{maxWidth:'92vw',marginInline:'2vw'}}>
            <Slider {...settings}>
                {contents.map(([image, text1, text2], index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border-2 mx-[80px] my-5
                    rounded-[4px] transition-transform transform hover:scale-105 flex-row">
                        <div className={'bg-gray-200 p-[8px] '}>
                                <img src={image} width={60} height={60} alt='' />
                        </div>
                        <div className={'flex flex-col'}>
                            <p className={'font-bold text-xl md:text-4xl'}>{text1}</p>
                            <p className={'text-lg font-semibold text-gray-400'}>{text2}</p>
                        </div>
                    </div>
                    ))}
            </Slider>
        </div>
    );
}
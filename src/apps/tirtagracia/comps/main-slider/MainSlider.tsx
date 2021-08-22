import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style  from "./MainSlider.module.scss";
import ImgSlider1 from "../../assets/images/3ad78822f61a68e7aa3187f35b981ca7.jpg"
import ImgSlider2 from "../../assets/images/e1057be0d23c0d7af02a50283adb85e8.jpg"
import ImgSlider3 from "../../assets/images/583cba83c764e13a1bd11ea08d326e10.jpg"
import ImgSlider4 from "../../assets/images/5f305412325952919e673ee0f17bca16.jpg"
import ViewMore from "../../assets/images/view_more.png"
import { Link } from "react-router-dom";

interface ISliderItems {
    title: string,
    image: string
}

export default function MainSlider() {

    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1500,
        autoplay: true,
        dotsClass: style.slickDots,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderItems:ISliderItems[] = [
        {
            title: 'contact center system',
            image: ImgSlider1
        },
        {
            title: 'manage social media',
            image: ImgSlider2
        },
        {
            title: 'PABX service',
            image: ImgSlider3
        },
        {
            title: 'vouice and message',
            image: ImgSlider4
        },
    ]

    return (
      <div className={style.slider}>
        <Slider {...settings}>
            {
                sliderItems.map((sliderItem, idx) => (
                    <div key={idx} className={style.sliderItem}>
                        <div className={style.image}>
                            <img src={sliderItem.image} alt="" />
                        </div>
                        <div className={style.text}>
                            <p>{sliderItem.title}</p>
                            <Link to="/service" className={style.more}>
                                <img src={ViewMore} alt=""/>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </Slider>
      </div>
    );
}

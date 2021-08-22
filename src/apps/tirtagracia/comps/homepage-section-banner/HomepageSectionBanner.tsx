import { innerScroll } from 'apps/tirtagracia/helper/helper'
import style from './HomepageSectionBanner.module.scss'
import MainSlider from '../main-slider/MainSlider'
import ImageScrollDown from  '../../assets/images/home_down-button.png'

export default function HomepageSectionBanner() {
    return (
        <div className={style.container}>
            <MainSlider />
            <button onClick={()=>innerScroll('about')} className="arrow-down">
                <img src={ImageScrollDown} alt="scroll down" />
            </button>
        </div>
    )
}
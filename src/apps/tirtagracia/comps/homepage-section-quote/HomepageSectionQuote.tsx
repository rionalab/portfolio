import style from './HomepageSectionQuote.module.scss'
import About1 from '../../assets/images/about1.jpg'
import About2 from '../../assets/images/about2.jpg'
import About3 from '../../assets/images/about3.jpg'
import AboutMotto from '../../assets/images/about_motto.png'

export default function HomepageSectionQuote() {
    return (
        <div className={style.sectionQuote}>
            <img className={style.about1} src={About1} alt="" />
            <div className={style.bar}></div>
            <img className={style.aboutMotto} src={AboutMotto} alt="" />
            <img className={style.about2} src={About2} alt="" />
            <img className={style.about3} src={About3} alt="" />
            <div className={style.e}></div>
        </div>
     )
}
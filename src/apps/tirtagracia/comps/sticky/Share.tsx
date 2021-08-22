import style from './Sticky.module.scss'
import TwitterIcon from '../../assets/images/sticky/home-share_twitter.png'
import InstagramIcon from '../../assets/images/sticky/home-share_instagram.png'
import FacebookIcon from '../../assets/images/sticky/home-share_facebook.png'
import ShareIcon from '../../assets/images/sticky/home-share_text.png'

export default function Share() {
    return (
        <div className={style.share}>
            <a href="https://twitter.com"><img src={TwitterIcon} alt="twitter icon" /></a>
            <a href="https://instagram.com"><img src={InstagramIcon} alt="instagram icon" /></a>
            <a href="https://facebook.com"><img src={FacebookIcon} alt="facebook icon" /></a>
            <img src={ShareIcon} alt="share icon" />
        </div>
    )
}

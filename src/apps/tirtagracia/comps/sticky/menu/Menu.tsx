import { useContext } from 'react'
import { innerScroll } from 'apps/tirtagracia/helper/helper'
import style from './Menu.module.scss'
import IconFb from  '../../../assets/images/menu/menu_facebook.png'
import IconTw from  '../../../assets/images/menu/menu_instagram.png'
import IconLn from  '../../../assets/images/menu/menu_linkedin.png'
import { MainContext } from 'apps/tirtagracia/context/MainContext'
import { Link } from 'react-router-dom'

export default function Menu() {

    const { sidebarVisibility, toggleSidebar } = useContext(MainContext)

    return (
        <div className={`${style.sideMenu} ${sidebarVisibility && style.sideMenuShow}`}>
            <div className={style.sidemenuInner}>
                <div className="text-right">
                    <button onClick={toggleSidebar} className={style.closeMenu}>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div className={style.linkContainer}>
                    <Link to="/tirtagracia" className={style.menuItem}>Home</Link>
                    <button onClick={() => innerScroll('about')} className={style.menuItem}>About</button>
                    <Link to="/prducts" className={style.menuItem}>Products</Link>
                    <Link to="/services" className={style.menuItem}>Service</Link>
                    <button onClick={() => innerScroll('locations')} className={style.menuItem}>Locations</button>
                    <button onClick={() => innerScroll('footer')} className={style.menuItem}>Contact Us</button>
                </div>

                <div className={style.sidemenuFooter}>
                    <span>Find us on </span>
                    <div>
                        <a href="https://facebook.com"><img src={IconFb} alt="" /></a>
                        <a href="https://twitter.com"><img src={IconTw} alt="" /></a>
                        <a href="https://linkedin.com"><img src={IconLn} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}



//
//
//     </div>
// </div>

// <a href="/" class="logo">
//     <img src="/img/logo.png" alt="">
// </a>

// <div class="share">
//     <a href="#"><img src="/img/sticky/home-share_twitter.png" alt=""></a>
//     <a href="#"><img src="/img/sticky/home-share_instagram.png" alt=""></a>
//     <a href="#"><img src="/img/sticky/home-share_facebook.png" alt=""></a>
//     <a href="#"><img src="/img/sticky/home-share_text.png" alt=""></a>
// </div>

// <div class="menu">
//     <a href="#" onclick="mainNav(event, 'footer')">Contact us</a>
//     <a href="#" onclick="showMenu(event)"><img src="/img/menu/menu.png" alt=""></a>
// </div>

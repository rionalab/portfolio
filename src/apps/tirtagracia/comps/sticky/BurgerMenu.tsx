import { useContext } from 'react'
import { MainContext } from 'apps/tirtagracia/context/MainContext'
import { IMainContext } from 'apps/tirtagracia/interfaces/main'
import Burgericon from '../../assets/images/menu/menu.png'
import style from './Sticky.module.scss'

export default function BurgerMenu() {

    const {toggleSidebar} = useContext<IMainContext>(MainContext)

    const handleClickContact = () => {
    }

    return (
        <div className={style.menu}>
            <button onClick={handleClickContact}>Contact us</button>
            <div onClick={()=>toggleSidebar()}>
                <img src={Burgericon} alt="Burger Icon" />
            </div>
        </div>
    )
}

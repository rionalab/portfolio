import React from 'react'
import Icon from '../../assets/images/back-to-top.png'
import style from './Sticky.module.scss'

export default function ToTop() {

    const handleClick = () => {
        window.scrollTo(0,0)
    }

    return (
        <button onClick={handleClick} className={style.totop}>
            <img src={Icon} alt="to-top" />
        </button>
    )
}

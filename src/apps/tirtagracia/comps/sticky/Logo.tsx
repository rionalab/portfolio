import React from 'react'
import style from './Sticky.module.scss'
import LogoImg from  '../../assets/images/logo.png'

export default function Logo() {
    return (
        <a href="/tirtagracia" className={style.logo}>
            <img src={LogoImg} alt="Logo" />
        </a>
    )
}

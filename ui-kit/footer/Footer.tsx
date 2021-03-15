import React from 'react'
// import Link from 'next/link'
import s from './Footer.module.css'
import Fbook from './../../assets/fbook-svg'
import Vk from './../../assets/vk-svg'
import Ytube from './../../assets/Ytube-svg'
import {WinOrbit} from '../win-orbit/WinOrbit'

export const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
            <div>
                <WinOrbit/>

                <div className={s.menu}>
                    <div className={s.menuItem}>обучение</div>
                    <div className={s.menuItem}>цены</div>
                    <div className={s.menuItem}>о нас</div>
                    <div className={s.menuItem}>партнёрство</div>
                </div>
            </div>

            <div className={s.space}/>

            <div>
                <div className={s.end}>
                    <div className={s.contacts}>
                        <Fbook/>
                        <Vk/>
                        <Ytube/>
                    </div>
                </div>

                <div className={s.mail}>contacts@gmail.com</div>
            </div>
        </footer>
    )
}
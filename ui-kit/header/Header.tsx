import React from 'react'
import Link from 'next/link'
import s from './Header.module.css'
import Logo from './../../assets/logo-svg'
import Men from './../../assets/men-svg'

export const Header: React.FC = () => {
    return (
        <header className={s.all}>
            <div className={s.menu}>
                <div className={s.menuItem}>обучение</div>
                <div className={s.menuItem}>цены</div>
                <div className={s.menuItem}>о нас</div>

                {/*for test*/}
                <div className={s.menuItem}><Link href={'/ui-kit'}>ui-kit</Link></div>
                <div className={s.menuItem}><Link href={'/'}>home</Link></div>
                <div className={s.menuItem}><Link href={'/courses'}>courses</Link></div>
                <div className={s.menuItem}><Link href={'/lesson'}>lesson</Link></div>
            </div>

            <div className={s.center}>
                <div className={s.text}>зимняя</div>
                <Logo/>
                <div className={s.text}>орбита</div>
            </div>

            <div className={s.menu}>
                <div className={s.menuItem}>регистрация</div>
                <div className={s.menuItemEnd}>войти</div>
                <div className={s.men}><Men/></div>
            </div>
        </header>
    )
}
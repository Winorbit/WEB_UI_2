import React from 'react'
import Link from 'next/link'
import s from './Header.module.css'

export const Header: React.FC = () => {
    return (
        <header className={s.all}>
            <div className={s.menu}>
                <div className={s.menuItem}>обучение</div>
                <div className={s.menuItem}>цены</div>
                <div className={s.menuItem}>о нас</div>
                <Link href={'/ui-kit'}>ui-kit</Link>
            </div>

            <Link href={'/'}>home</Link>
            <Link href={'/courses'}>courses</Link>
            <Link href={'/lesson'}>lesson</Link>

        </header>
    )
}
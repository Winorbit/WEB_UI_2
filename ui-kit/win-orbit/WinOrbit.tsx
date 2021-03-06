import React from 'react'
import s from './WinOrbit.module.css'
import Logo from './../../assets/logo-svg'

export const WinOrbit: React.FC = () => {
    return (
        <div className={s.center}>
            <div className={s.text}>зимняя</div>
            <Logo stroke={0} width={0} height={0} fill={0}/>
            <div className={s.text}>орбита</div>
        </div>
    )
}
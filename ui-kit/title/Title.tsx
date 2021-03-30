import React from 'react'
import s from './Title.module.css'

type TitlePropsType = {
    text: string
}

const Title: React.FC<TitlePropsType> = ({text}) => {
    return (
        <div>
            <div className={s.block}>
                <div className={s.text}>{text}</div>
            </div>

            <div className={s.line}/>
        </div>
    )
}

export default Title
import React from 'react'
import Button from '../../../ui-kit/button/Button'
import s from './Targets.module.css'

type TargetBlockPropsType = {
    text: string
    img: string
}

const TargetBlock: React.FC<TargetBlockPropsType> = ({text, img}) => {
    return (
        <div className={s.target}>
            <div>
                <img src={img} alt={'target'}/>
                <div className={s.text}>{text}</div>
            </div>

            <Button type={'black'}>подробнее</Button>
        </div>
    )
}

export default TargetBlock
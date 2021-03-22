import React from 'react'
import s from './AboutTarget.module.css'

type AboutTargetBlockPropsType = {
    text: string
    end?: boolean
}

const AboutTargetBlock: React.FC<AboutTargetBlockPropsType> = ({text, end}) => {
    const finalClassName = s.textBlock + (
        end
            ? ''
            : ' ' + s.notEnd
    )

    return (
        <div className={s.block}>
            <div className={s.book}>
                xxx
            </div>

            <div className={finalClassName}>
                {text}
            </div>
        </div>
    )
}

export default AboutTargetBlock
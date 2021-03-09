import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.css'

type DefButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = Omit<DefButtonPropsType, 'type'> & {
    type: 'blue' | 'whiteBlue' | 'black' | 'white',
}

const Button: React.FC<ButtonPropsType> = (
    {
        type, className, children,
        disabled,
        ...restProps
    }
) => {
    const finalClassName = (
        type === 'white' && disabled
            ? s.dis
            : s[type]
    ) + (
        className
            ? ' ' + className
            : ''
    )

    return (
        <button
            className={finalClassName}
            disabled={disabled}
            {...restProps}
        >
            {type === 'whiteBlue' ? (
                <div className={s.whiteBlueIn}>{children}</div>
            ) : (
                <span>{children}</span>
            )}
        </button>
    )
}

export default Button
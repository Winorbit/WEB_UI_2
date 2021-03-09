import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './Input.module.css'

type DefInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPropsType = Omit<DefInputPropsType, 'type'> & {
    type?: 'password',
    status?: 'ok' | 'error',
    headText?: string,
    bottomText?: string,
    onChangeText?: (text: string) => void,
}

const Input: React.FC<InputPropsType> = (
    {
        className, children,
        status, headText, bottomText, onChange,
        onChangeText,
        ...restProps
    }
) => {
    const finalClassName = s.input + ' ' + (
        s[status || 'def']
    ) + (
        className
            ? ' ' + className
            : ''
    )

    const finalBottomTextClassName = status === 'error'
        ? s.errorBottomText
        : s.bottomText

    const onChangeCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    return (
        <div>
            <div className={s.headText}>{headText || <br/>}</div>
            <input
                className={finalClassName}
                onChange={onChangeCallBack}
                {...restProps}
            />
            <div className={finalBottomTextClassName}>{bottomText || <br/>}</div>
        </div>
    )
}

export default Input
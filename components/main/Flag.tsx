import Logo from '../../assets/logo-svg'
import s from './Flag.module.css'
import flag from './flag.png'

const Flag = () => {
    return (
        <div className={s.flag}>
            <div className={s.block2}>
                <Logo fill={'#2b7fd1'} height={142} width={142} stroke={1}/>
            </div>

            <div className={s.block1}>
                <img src={flag} alt={'flag'}/>
            </div>
        </div>
    )
}

export default Flag
import Title from '../../../ui-kit/title/Title'
import s from './Targets.module.css'
import TargetBlock from './TargetBlock'
import t1 from './../../../assets/target1.png'
import t2 from './../../../assets/target2.png'
import t3 from './../../../assets/target3.png'

const Targets = () => {
    return (
        <div className={s.main}>
            <Title text={'Следуй к цели'}/>

            <div className={s.blocks}>
                <div/>
                <TargetBlock text={'Создание бота помошника'} img={t1}/>
                <TargetBlock text={'Подготовка к Middle собеседованию'} img={t2}/>
                <TargetBlock text={'Создание мобильного приложения'} img={t3}/>
                <div/>
            </div>
        </div>
    )
}

export default Targets
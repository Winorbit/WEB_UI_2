import Title from '../../../ui-kit/title/Title'
import s from './AboutTarget.module.css'
import AboutTargetBlock from './AboutTargetBlock'

const AboutTarget = () => {
    return (
        <div className={s.main}>
            <Title text={'Об обучении'}/>

            <AboutTargetBlock text={''}/>

            <div className={s.block2}>
                <AboutTargetBlock text={''}/>
            </div>

            <div className={s.block3}>
                <AboutTargetBlock text={''} end/>
            </div>
        </div>
    )
}

export default AboutTarget
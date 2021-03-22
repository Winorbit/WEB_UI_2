// import Link from 'next/link'
import s from './About.module.css'
import Button from '../../../ui-kit/button/Button'
import Flag from './Flag'

const About = () => {
    return (
        <div className={s.main}>
            <div className={s.withFlag}>
                <div>
                    <div className={s.text1}>
                        Мы отличаемся от говорящих голов, курсов обещающих трудоустройство за неделю и любителей
                        растягивать знания
                    </div>

                    <div className={s.block2}>
                        <div className={s.text2}>
                            Наш подход в обучение - построение личной програаммы студентом для комфортного самообучения и
                            достижения цели, которую Вы сами запланируете. С нас максимальна удобная площадка и база знаний,
                            а с Вас - мотивация и готовность следовать к цели
                        </div>
                    </div>
                </div>

                <div className={s.flag}>
                    <Flag/>
                </div>
            </div>

            <div className={s.withButton}>
                <div>
                    <div className={s.text3}>
                        Ознакомтесь с программой обучения
                    </div>

                    <Button type={'whiteBlue'}>подробнее</Button>
                </div>
            </div>
        </div>
    )
}

export default About
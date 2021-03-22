// import Link from 'next/link'
// import s from './About.module.css'
import About from './block1/About'
import Targets from './block2/Targets'
import AboutTarget from './block3/AboutTarget'

const Main = () => {
    return (
        <div>
            <About/>

            <Targets/>

            <AboutTarget/>
        </div>
    )
}

export default Main
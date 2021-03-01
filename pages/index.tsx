import Link from 'next/link'
import s from '../ui-kit/page/Home.module.css'
import {Page} from '../ui-kit/page/Page'

const Index = () => { // any name
    return (
        <Page>
            <main className={s.main}>
               main
                <br/>
                <br/>
                <Link href={'/lesson/1'}>1</Link>
                <Link href={'/lesson/2'}>2</Link>
                <Link href={'/lesson/3'}>3</Link>
            </main>
        </Page>
    )
}

export default Index // !!!default
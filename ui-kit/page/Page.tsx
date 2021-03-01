import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import s from './Home.module.css'

export const Page:React.FC = ({children}) => {
    return (
        <div className={s.container}>
            <Head>
                <title>Winter Orbit</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>

            <header>
                header
                <br/>
                <br/>
                <Link href={'/'}>home</Link>
                <br/>
                <Link href={'/courses'}>courses</Link>
                <br/>
                <Link href={'/lesson'}>lesson</Link>
                <br/>
                <Link href={'/ui-kit'}>ui-kit</Link>
                <br/>

                <br/>
            </header>

            {children}

            <footer className={s.footer}>
                footer

                {/*<img src="/vercel.svg" alt="Vercel Logo" className={s.logo} />*/}
            </footer>
        </div>
    )
}
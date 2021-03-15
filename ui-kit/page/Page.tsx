import React from 'react'
import Head from 'next/head'
import s from './Home.module.css'
import {Header} from '../header/Header'
import {Footer} from '../footer/Footer'

export const Page:React.FC = ({children}) => {
    return (
        <div className={s.container}>
            <Head>
                <title>Winter Orbit</title>
                {/*<link rel='icon' href='/favicon.ico'/>*/}
            </Head>

            <Header/>

            {children}

            <Footer/>
        </div>
    )
}
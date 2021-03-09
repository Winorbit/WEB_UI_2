import {Page} from '../../ui-kit/page/Page'
import s from './ui-kit.module.css'
import Button from '../../ui-kit/button/Button'
import Input from '../../ui-kit/input/Input'

const UIKit = () => {
    return (
        <Page>
            <div className={s.test}>ui kit</div>

            buttons ----------------------------------
            <Button type={'blue'}>enter</Button>
            <Button type={'whiteBlue'}>else</Button>
            <div style={{padding: 10}}>
                <Button type={'black'}>else</Button>
            </div>
            <Button type={'white'}>send</Button>
            <div style={{padding: 10, background: 'black'}}>
                <Button type={'white'}>send</Button>
            </div>
            <Button type={'white'} disabled>disabled</Button>

            inputs -----------------------------------
            <Input headText={'def'} bottomText={'please, input...'}/>
            <Input headText={'ok'} status={'ok'}/>
            <Input headText={'error'} bottomText={'some error'} status={'error'}/>
            <Input headText={'password'} bottomText={'input pass...'} type={'password'}/>
        </Page>
    )
}

export default UIKit
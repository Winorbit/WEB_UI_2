import {Page} from '../../ui-kit/page/Page'
import s from './ui-kit.module.css'
import Button from './button/Button'

const UIKit = () => {
    return (
        <Page>
            <div className={s.test}>ui kit</div>
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
        </Page>
    )
}

export default UIKit
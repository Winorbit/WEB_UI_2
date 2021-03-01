import {Page} from '../ui-kit/page/Page'
import axios from 'axios'

const Courses = ({data}) => {
    return (
        <Page>
            ccccc
            <br/>
            {JSON.stringify(data)}
        </Page>
    )
}

export default Courses // !!!default

export const getStaticProps = async (context) => {
    const {data} = await axios.get('http://jsonplaceholder.typicode.com/users')
    console.log('asa', data)

    return {
        props: {data}, // will be passed to the page component as props
    }
}
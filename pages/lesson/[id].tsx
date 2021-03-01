import {useRouter} from 'next/router'
import {Page} from '../../ui-kit/page/Page'
import axios from 'axios'

const Lesson = ({data}) => {
    const {query} = useRouter()

    return (
        <Page>
            {query.id}

            {JSON.stringify(data)}
        </Page>
    )
}

export default Lesson

export const getServerSideProps = async (context) => {
    const {data} = await axios.get('http://jsonplaceholder.typicode.com/users/' + context.params.id)
    console.log('asa', data)

    return {
        props: {data}, // will be passed to the page component as props
    }
}
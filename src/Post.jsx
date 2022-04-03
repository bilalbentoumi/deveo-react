import { useParams } from 'react-router-dom'

export default function Post() {

    let { slug } = useParams()

    return (
        <h2>Post: { slug }</h2>
    )
}
import { Link } from 'react-router-dom'
import moment from 'moment'

function PostCard({ post }) {

    const description = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as...'
    const url = '/posts/' + post.slug

    function getPosterUrl(poster) {
        return new URL(`../assets/posters/${poster}`, import.meta.url).href
    }

    function getAvatarUrl(avatar) {
        return new URL(`../assets/avatar/${avatar}`, import.meta.url).href
    }

    return (
        <div className="post-card bg-white shadow rounded-md overflow-hidden ring ring-transparent hover:ring-indigo-500 duration-75">

            <div className="post-header">
                <Link to={ url }>
                    <img className="object-cover w-full h-40 sm:h-52 lg:h-64" src={ getPosterUrl(post.poster) } alt={ post.title } />
                </Link>
            </div>

            <div className="p-4 sm:p-8">

                <div className="flex justify-between items-start mb-4 md:pb-4">
                    <div className="author flex items-center gap-3">
                        <img className="w-12 h-12 rounded-full" src={ getAvatarUrl(post.author.picture) } alt={ post.author.name } />
                        <div className="flex flex-col">
                            <span className="text-md font-medium text-gray-800">{ post.author.name }</span>
                            <time className="published text-sm text-gray-500">{ moment(post.created_at).fromNow() }</time>
                        </div>
                    </div>
                    <span className="read-time text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-full">{ post.read_time + ' min read' }</span>
                </div>

                <Link to={ url }>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-6">{ post.title }</h3>
                </Link>
                <p className="text-gray-500 font-light">{ description }</p>

            </div>

        </div>
    )
}

export default PostCard
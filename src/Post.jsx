import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
import Button from './components/Button'
import posts from './data/posts.json'

export default function Post() {

    let { slug } = useParams()

    const post = posts.filter((post) => {
        return post.slug === slug
    }).pop()

    function getPosterUrl(poster) {
        return new URL(`./assets/posters/${poster}`, import.meta.url).href
    }

    function getAvatarUrl(avatar) {
        return new URL(`./assets/avatar/${avatar}`, import.meta.url).href
    }

    return (
        <div className="grid grid-cols-12 gap-4">

            <div className="main col-span-full xl:col-span-9 space-y-4">

                <div className="post post-panel bg-white shadow rounded-md overflow-hidden">
                    <div className="post-header">
                        <img className="object-cover w-full h-40 sm:h-52 lg:h-96" src={ getPosterUrl(post.poster) } alt={ post.title } />
                    </div>
                    <div className="post-body p-4 sm:p-8">
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
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-6">{ post.title }</h3>
                        <div className="content">
                            <div className="grid gap-3">
                                { [...Array(10)].map((x, index) => (
                                    <p className="text-gray-500 font-light" key={ index } >
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as...
                                    </p>
                                )) }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="read-next bg-white shadow rounded-md overflow-hidden">
                    <div className="panel-header px-4 sm:px-8 pt-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Read next</h2>
                    </div>
                    <div className="post-body px-4 sm:px-8 py-4">
                        <ul className="divide-y divide-gray-100">
                            { [...Array(4)].map((x, index) => (
                                <li key={ index }>
                                    <div className="flex justify-between items-start py-4">
                                        <div className="flex items-center gap-3">
                                            <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Bilal Bentoumi"/>
                                            <div className="flex flex-col">
                                                <a href="" className="text-lg font-medium text-gray-600 hover:text-gray-800 duration-75">{ 'Post Title ' + (index + 1) }</a>
                                                <span className="published text-sm text-gray-500">
                                                    <a href="" className="font-medium text-gray-500 hover:text-indigo-700 duration-75">Bilal Bentoumi</a> - 15 min ago
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>

            </div>

            <div className="sidebar hidden lg:block lg:col-span-3 h-max sticky top-20 space-y-4">

                <div className="widget bg-white shadow rounded-md overflow-hidden">
                    <div className="widget-header">
                        <img className="w-full h-20 object-cover" src={ getAvatarUrl(post.author.picture) } alt={ post.author.name + "'s Cover" } />
                        <div className="flex items-center gap-2 px-6 -mt-4">
                            <img src={ getAvatarUrl(post.author.picture) }
                                 className="w-14 h-14 object-cover rounded-full border-4 border-white"
                                 alt={ post.author.name + "'s Picture" } />
                            <h3 className="text-xl font-semibold text-gray-700 mt-4">{ post.author.name }</h3>
                        </div>
                    </div>
                    <div className="widget-body p-6 pt-4">
                        <Button className="w-full">Follow</Button>
                        <p className="text-gray-500 my-4">Just an average Hacker.</p>
                        <ul className="user-meta flex flex-col gap-2">
                            <li>
                                <div className="key text-xs font-medium text-gray-500">JOINED</div>
                                <div className="value text-sm font-medium text-gray-800">June 19, 2020</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="widget bg-white shadow rounded-md">
                    <div className="px-6 py-6 pb-2">
                        <h2 className="text-lg font-semibold text-gray-800">More from <Link to="/" class="text-indigo-700">{ post.author.name }</Link></h2>
                    </div>
                    <div className="px-6">
                        <ul className="divide-y divide-gray-100">

                            { [...Array(4)].map((x, index) => (
                                <li className="py-3" key={ index } >
                                    <a href="" className="text-gray-700 hover:text-gray-900 duration-75">{ 'Post Title ' + (index + 1) }</a>
                                    <div className="tags space-x-2">
                                        <a href="" className="text-xs text-gray-400 hover:text-gray-600 duration-75">#js</a>
                                        <a href="" className="text-xs text-gray-400 hover:text-gray-600 duration-75">#html</a>
                                        <a href="" className="text-xs text-gray-400 hover:text-gray-600 duration-75">#ui</a>
                                    </div>
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}
import developers from '../data/developers.json'

function FollowDevelopers() {

    return (
        <div className="bg-white shadow rounded-md mb-4 h-max sticky top-20">

            <div className="px-6 py-4 pb-2">
                <h2 className="text-lg font-semibold text-gray-800">Follow Developers</h2>
            </div>

            <div className="flex flex-col px-6 divide-y divide-gray-100">

                { developers?.map((developer, index) => (
                    <div className="flex items-center gap-2 py-4" key={ index }>
                        <a href="">
                            <img className="h-10 w-10 rounded-full" src={ '/src/assets/avatar/' + developer.picture } alt={ developer.name } />
                        </a>
                        <div className="flex flex-col items-start flex-grow">
                            <a href="">{ developer.name }</a>
                            <span className="text-sm text-gray-500">{ developer.posts + ' posts'}</span>
                        </div>
                        <button className="text-xs font-semibold text-gray-400 px-3 py-1.5 rounded-md hover:text-white hover:bg-indigo-600 duration-150">FOLLOW</button>
                    </div>
                )) }

            </div>

        </div>
    )
}

export default FollowDevelopers
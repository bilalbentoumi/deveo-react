function FollowDevelopers() {
    
    return (
        <div className="bg-white shadow rounded-md mb-4 h-max sticky top-20">

            <div className="px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800">Follow Developers</h2>
            </div>

            <div className="flex flex-col px-6 divide-y divide-gray-100">
                { [...Array(5)].map(() => (
                    <div className="flex items-center gap-2 py-4">
                        <a href="">
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                        </a>
                        <div className="flex flex-col items-start flex-grow">
                            <a href="">Bilal Bentoumi</a>
                            <span className="text-sm text-gray-500">12 posts</span>
                        </div>
                        <button className="text-xs font-semibold text-gray-400 px-3 py-1.5 rounded-md hover:text-white hover:bg-indigo-600 duration-150">FOLLOW</button>
                    </div>
                )) }
            </div>

        </div>
    )
}

export default FollowDevelopers
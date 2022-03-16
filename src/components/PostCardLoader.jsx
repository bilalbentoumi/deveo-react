import ContentLoader from 'react-content-loader'

function PostCardLoader() {
    
    return (
        <div className="post-card bg-white shadow rounded-md overflow-hidden ring ring-transparent hover:ring-indigo-500 duration-75">

            <div className="post-header">

                <ContentLoader className="w-full h-40 sm:h-52 lg:h-64">
                    <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                </ContentLoader>

            </div>

            <div className="p-4 sm:p-8">

                <div className="flex justify-between items-start mb-4 md:pb-4">

                    <div className="author flex items-center gap-3">

                        <ContentLoader className="w-12 h-12 rounded-full">
                            <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                        </ContentLoader>

                        <div className="flex flex-col">

                            <ContentLoader className="mb-2 w-36 h-4 rounded-full">
                                <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                            </ContentLoader>

                            <ContentLoader className="w-24 h-4 rounded-full">
                                <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                            </ContentLoader>

                        </div>

                    </div>

                    <ContentLoader className="mb-2 w-28 h-7 rounded-full">
                        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                    </ContentLoader>

                </div>

                <ContentLoader class="mb-10 w-8/12 h-7 rounded-full">
                    <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                </ContentLoader>

                <div>

                    <ContentLoader className="mb-2 w-11/12 h-5 rounded-full">
                        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                    </ContentLoader>

                    <ContentLoader className="mb-2 w-9/12 h-5 rounded-full">
                        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                    </ContentLoader>

                    <ContentLoader className="mb-2 w-10/12 h-5 rounded-full">
                        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
                    </ContentLoader>

                </div>

            </div>

        </div>
    )
}

export default PostCardLoader
import QuickLinks from './components/QuickLinks'
import PostCardLoader from './components/PostCardLoader'
import PostCard from './components/PostCard'
import FollowDevelopers from './components/FollowDevelops'
import { useEffect, useState } from 'react'
import postsJson from './data/posts.json'

export default function Home() {

    const [ posts, setPosts ] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setPosts(postsJson)
        }, 1000)
    }, [])

    return (
        <div className="grid grid-cols-12 gap-4">

                <div className="sidebar hidden lg:flex lg:col-span-3 xl:col-span-2 flex-col h-max sticky top-20">
                    <QuickLinks/>
                </div>

                <div className="posts col-span-full lg:col-span-9 xl:col-span-7 flex flex-col gap-10">

                    { !posts &&
                        <>
                            <PostCardLoader />
                            <PostCardLoader />
                            <PostCardLoader />
                        </>
                    }

                    { posts && posts?.map((post, index) => (
                        <PostCard post={ post } key={ index } />
                    )) }

                </div>

                <div className="hidden xl:block xl:col-span-3">
                    <FollowDevelopers/>
                </div>

            </div>
    )
}
import React from 'react'

import PostsDirections from './PostsDirections/PostsDirections'
import PostsList from './PostsList/PostsList'


// import PostsSidebar from './PostsSidebar/PostsSidebar'



const ContentBlock = () => {
    return (
        <div className="content-block">
            <div className="container">
                <div className="main-row">
                    <PostsDirections/>
                    <PostsList/>
                    {/* <PostsSidebar/> */}
                </div>
            </div>
        </div>
    )
}

export default ContentBlock
import React from 'react'

import './postsList.css'
import PostListItem from './PostListItem'
import posts from './posts'

const PostsList = () => {
    return (
        <div className="posts-list">
            {
                posts.map(({
                    id,
                    image,
                    date,
                    category,
                    author,
                    title,
                    text,
                }) => (
                    <PostListItem 
                        key={id}
                        image={image}
                        date={date}
                        category={category}
                        author={author}
                        title={title}
                        text={text}
                        
                    />
                ))

                }
            <div className="btn-more-posts">
                <button>MORE POSTS</button>
            </div>
        </div>
    )
}


export default PostsList
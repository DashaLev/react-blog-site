import React from 'react'

import './blogPostsList.css'
import BlogPostsItem from './BlogPostsItem'
import  blogPosts from './blogPosts'

const BlogPostsList = () => {
    return (
        <div className="blog-posts-list">
            {
                blogPosts.map(({
                    id,
                    image,
                    date,
                    category,
                    author,
                    title,
                }) => (
                    <BlogPostsItem 
                        key={id}
                        image={image}
                        date={date}
                        category={category}
                        author={author}
                        title={title}
                    />
                ))
            }
        </div>
    )
}


export default BlogPostsList
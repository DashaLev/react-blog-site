import React from 'react'

import InspirationPostsItem from './InspirationPostsItem'
import blogPosts from '../../BlogPage/BlogPosts/blogPosts'
import '../../CategoryPages/categoryPages.css'

const InspirationPostsList = () => {
    return (
        <div className="categ-posts-list">
            {
                blogPosts.map(({
                    id,
                    image,
                    date,
                    category,
                    author,
                    title,
                    text,
                }) => (
                    <InspirationPostsItem 
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
        </div>
    )
}


export default InspirationPostsList
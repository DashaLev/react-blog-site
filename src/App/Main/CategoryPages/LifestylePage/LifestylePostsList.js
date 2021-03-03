import React from 'react'

import LifestylePostsItem from './LifestylePostsItem'
import blogPosts from '../../BlogPage/BlogPosts/blogPosts'
import '../../CategoryPages/categoryPages.css'

const LifestylePostsList = () => {
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
                    <LifestylePostsItem 
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


export default LifestylePostsList
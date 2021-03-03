import React from 'react'

import FashionPostsItem from './FashionPostsItem'
import blogPosts from '../../BlogPage/BlogPosts/blogPosts'
import '../../CategoryPages/categoryPages.css'

const FashionPostsList = () => {
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
                    <FashionPostsItem 
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


export default FashionPostsList
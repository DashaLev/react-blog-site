import React from 'react'

import FoodPostsItem from './FoodPostsItem'
import blogPosts from '../../BlogPage/BlogPosts/blogPosts'
import '../../CategoryPages/categoryPages.css'

const FoodPostsList = () => {
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
                    <FoodPostsItem 
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


export default FoodPostsList
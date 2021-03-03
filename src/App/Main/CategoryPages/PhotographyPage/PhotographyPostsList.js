import React from 'react'

import PhotographyPostsItem from './PhotographyPostsItem'
import blogPosts from '../../BlogPage/BlogPosts/blogPosts'
import '../../CategoryPages/categoryPages.css'

const PhotographyPostsList = () => {
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
                    <PhotographyPostsItem 
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


export default PhotographyPostsList
import React from 'react'

import './postDirections.css'
import PostDirectionItem from './PostDirectionItem'
import directions from './directions'

const PostDirections = () => {
    return (
        <div className="posts-derictions">
            {
                directions.map(({
                    id,
                    name,
                    image,
                }) => (
                    <PostDirectionItem 
                        key={id}
                        image={image}
                        name={name}
                    />
                ))

                }
        </div>
    )
}

export default PostDirections
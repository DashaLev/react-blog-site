import React from 'react'

import AuthorItem from './AuthorItem'
import author from './authors'

const AuthorList = () => {
    return (
        <>
            {
                author.map(({
                    id,
                    name,
                    image,
                    text,
                    about,
                }) => (
                    <AuthorItem 
                        key={id}
                        name={name}
                        image={image}
                        text={text}
                        about={about}
                    />
                ))
            }
        </>
    )
}


export default AuthorList
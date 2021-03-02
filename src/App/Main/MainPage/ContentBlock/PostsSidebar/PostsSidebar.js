import React from 'react'

import AboutSection from './AboutSection/AboutSection'
import NetworkSection from './NetworkSection/NetworkSection'
import CategoriesSection from './CategoriesSection/CategoriesSection'
import TwitterSection from './TwitterSection/TwitterSection'
import "./postsSidebar.css"


const PostsSidebar = () => {
    return (
        <div className="posts-sidebar">
            <AboutSection/> 
            <NetworkSection/>
            <CategoriesSection/>
            <TwitterSection/>
        </div>
                    
    )
}

export default PostsSidebar
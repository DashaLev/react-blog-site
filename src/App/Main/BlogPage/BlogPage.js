import React from 'react'

import BlogPostsList from './BlogPosts/BlogPostsList'
import CategoriseSection from '../MainPage/ContentBlock/PostsSidebar/CategoriesSection/CategoriesSection'
import NetworkSection from '../MainPage/ContentBlock/PostsSidebar/NetworkSection/NetworkSection'
import TwitterSection from '../MainPage/ContentBlock/PostsSidebar/TwitterSection/TwitterSection'


import blog from './blog.jpg'
import './blogPage.css'



const ContactPage = () => {
    return (
        <>
            <div className="static-picture">
                <img src={blog} alt=""/>
            </div>
            <main className="main">
                <div className="container">
                    <div className="blog-row">
                        <div className="blog-title">LATEST BLOG POSTS</div>
                        <BlogPostsList/>
                        <div className="blog-page-sidebar">
                            <CategoriseSection/>
                            <NetworkSection/>
                            <TwitterSection/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactPage
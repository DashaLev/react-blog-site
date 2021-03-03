import React from 'react'

import {Route} from 'react-router'

import MainPage from './MainPage/MainPage'
import BlogPage from './BlogPage/BlogPage'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'

const Main = () => {
    return (
        <>
            <Route path="/" exact component={MainPage}/>
            <Route path="/blog" component={BlogPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>

        </>
    )
}

export default Main
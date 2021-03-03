import React from 'react'

import {Route} from 'react-router'

import MainPage from './MainPage/MainPage'
import BlogPage from './BlogPage/BlogPage'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'
import TravelPage from './CategoryPages/TravelPage/TravelPage'
import PhotographyPage from './CategoryPages/PhotographyPage/PhotographyPage'
import FashionPage from './CategoryPages/FashionPage/FashionPage'
import LifestylePage from './CategoryPages/LifestylePage/LifestylePage'
import FoodPage from './CategoryPages/FoodPage/FoodPage'
import InspirationPage from './CategoryPages/InspirationPage/InspirationPage'

const Main = () => {
    return (
        <>
            <Route path="/" exact component={MainPage}/>
                <Route path="/travel" component={TravelPage}/>
                <Route path="/fashion" component={FashionPage}/>
                <Route path="/lifestyle" component={LifestylePage}/>
                <Route path="/food" component={FoodPage}/>
                <Route path="/inspiration" component={InspirationPage}/>
                <Route path="/photography" component={PhotographyPage}/>
            <Route path="/blog" component={BlogPage}/> 
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>

        </>
    )
}

export default Main

import React from 'react'

import {Route} from 'react-router'
import AboutPage from './AboutPage/AboutPage'
import MainPage from './MainPage/MainPage'

const Main = () => {
    return (
        <>
            <Route path="/" exact component={MainPage}/>
            <Route path="/about" component={AboutPage}/>

        </>
    )
}

export default Main
import React from 'react'

import SliderBlock from './SliderBlock/SliderBlock'
import ContentBlock from './ContentBlock/ContentBlock'
import InstagramBlock from './InstagramBlock/InstagramBlock'


import './mainPage.css'

const MainPage = () => {
    return (
        <main className="main">
            <SliderBlock/>
            <ContentBlock/>
            <InstagramBlock/>
        </main>
    )
}

export default MainPage
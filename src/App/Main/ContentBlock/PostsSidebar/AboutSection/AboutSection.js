import React from 'react'

import  './aboutSection.css'


const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="title-block">ABOUT</div>
            <div className="photo-block">
                <img src="images/girl.png" alt=""/>
            </div>
            <div className="text-block">Hi, I am Jane, I write travel guides, posts and create hiking trails so you can plan your trip to places you've never heard of.
            </div>
        </div>
    )
}

export default AboutSection
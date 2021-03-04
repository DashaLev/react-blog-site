import React from 'react'

import about from './about.jpg'
import AuthorList from './AuthorInfo/AuthorList'

import './aboutPage.css'

const AboutPage = () => {
    return (
        <>
            <div className="sticky-picture">
                <img src={about} alt=""/>
            </div>
            <main className="main">
                <div className="container">
                    <div className="about-row">
                        <AuthorList/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutPage
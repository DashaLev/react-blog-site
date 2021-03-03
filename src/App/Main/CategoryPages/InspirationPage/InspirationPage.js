import React from 'react'

import inspiration from './inspiration.jpg'
import '../../CategoryPages/categoryPages.css'

import InspirationPostsList from './InspirationPostsList'

const InspirationPage = () => {
    return (
        <>
            <div className="static-picture">
                <img src={inspiration} alt=""/>
            </div>
            <main className="main">
                <div className="container">
                    <div className="category-row">
                        <div class="category-title">INSPIRATION</div>
                        <InspirationPostsList/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default InspirationPage
import React from 'react'

import travel from './travel.jpg'
import '../../CategoryPages/categoryPages.css'

import TravelPostsList from './TravelPostsList'

const TravelPage = () => {
    return (
        <>
            <div className="static-picture">
                <img src={travel} alt=""/>
            </div>
            <main className="main">
                <div className="container">
                    <div className="category-row">
                        <div class="category-title">TRAVEL</div>
                        <TravelPostsList/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default TravelPage
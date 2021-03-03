import React from 'react'

import photography from './photography.jpg'
import '../../CategoryPages/categoryPages.css'

import PhotographyPostsList from './PhotographyPostsList'

const PhotographyPage = () => {
    return (
        <>
            <div className="static-picture">
                <img src={photography} alt=""/>
            </div>
            <main className="main">
                <div className="container">
                    <div className="category-row">
                        <div class="category-title">PHOTOGRAPHY</div>
                        <PhotographyPostsList/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PhotographyPage
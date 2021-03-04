import React from 'react'

import fashion from './fashion.png'
import '../../CategoryPages/categoryPages.css'

import FashionPostsList from './FashionPostsList'

const FashionPage = () => {
    return (
        <>
            <div className="sticky-picture">
                <img src={fashion} alt=""/>
            </div>
            <main className="main">
                <div className="container">
                    <div className="category-row">
                        <div class="category-title">FASHION</div>
                        <FashionPostsList/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default FashionPage
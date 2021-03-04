import React from 'react'

import lifestyle from './lifestyle.jpg'
import '../../CategoryPages/categoryPages.css'

import LifestylePostsList from './LifestylePostsList'

const LifestylePage = () => {
    return (
        <>
            <div className="sticky-picture">
                <img src={lifestyle} alt=""/>
            </div>
            <main className="main">
                <div className="container">
                    <div className="category-row">
                        <div class="category-title">LIFESTYLE</div>
                        <LifestylePostsList/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default LifestylePage
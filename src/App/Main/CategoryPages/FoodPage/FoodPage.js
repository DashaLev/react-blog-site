import React from 'react'

import food from './food_bg.png'
import '../../CategoryPages/categoryPages.css'

import FoodPostsList from './FoodPostsList'

const FoodPage = () => {
    return (
        <>
            <div className="sticky-picture">
                <img src={food} alt=""/>
            </div>
            <main className="main">
                <div className="container">
                    <div className="category-row">
                        <div class="category-title">FOOD</div>
                        <FoodPostsList/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default FoodPage
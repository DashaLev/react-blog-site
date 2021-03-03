import React from 'react'

// import lifestyle from './fashion.png'
import '../../CategoryPages/categoryPages.css'

import FoodPostsList from './FoodPostsList'

const FoodPage = () => {
    return (
        <>
            {/* <div className="static-picture">
                <img src={lifestyle} alt=""/>
            </div> */}
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
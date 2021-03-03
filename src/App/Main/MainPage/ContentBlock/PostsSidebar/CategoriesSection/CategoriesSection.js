import React from 'react'

import  './categoriesSection.css'


const CategoriseSection = () => {
    return (
        <div className="categories-section">
        <div className="title-block">CATEGORIES</div>
        <ul className="categories-list">
            <li>
                <a href="">TRAVEL</a>
                <div className="travel-posts-number">2</div>
            </li>
            <li>
                <a href="">FASHION</a>
                <div className="fasion-posts-number">2</div>
            </li>
            <li>
                <a href="">LIFESTYLE</a>
                <div className="lifestyle-posts-number">3</div>
            </li>
            <li>
                <a href="">FOOD</a>
                <div className="food-posts-number">4</div>
            </li>
            <li>
                <a href="">INSPIRATION</a>
                <div className="inspiration-posts-number">4</div>
            </li>
            <li>
                <a href="">PHOTOGRAPHY</a>
                <div className="numb-photography-posts-number">1</div>
            </li>
        </ul>
    </div>
    )
}

export default CategoriseSection
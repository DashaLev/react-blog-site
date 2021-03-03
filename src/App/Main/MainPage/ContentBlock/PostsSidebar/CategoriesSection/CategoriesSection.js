import React from 'react'

import { Link } from 'react-router-dom'
import  './categoriesSection.css'


const CategoriseSection = () => {
    return (
        <div className="categories-section">
        <div className="title-block">CATEGORIES</div>
        <ul className="categories-list">
            <li>
                <Link to="/travel">TRAVEL</Link>
                <div className="travel-posts-number">2</div>
            </li>
            <li>
                <Link to="/fashion">FASHION</Link>
                <div className="fasion-posts-number">1</div>
            </li>
            <li>
                <Link to="/lifestyle">LIFESTYLE</Link>
                <div className="lifestyle-posts-number">3</div>
            </li>
            <li>
                <Link to="/food">FOOD</Link>
                <div className="food-posts-number">2</div>
            </li>
            <li>
                <Link to="/inspiration">INSPIRATION</Link>
                <div className="inspiration-posts-number">2</div>
            </li>
            <li>
                <Link to="/photography">PHOTOGRAPHY</Link>
                <div className="numb-photography-posts-number">2</div>
            </li>
        </ul>
    </div>
    )
}

export default CategoriseSection
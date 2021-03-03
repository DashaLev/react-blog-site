import React from 'react'
import { Link } from 'react-router-dom'

import "./menuFooter.css"

const MenuFooter = () => {
    return (           
        <ul className="menu-footer">
            <li><Link to="/">HOME</Link></li>
            <li className="arrow-footer"><a>CATEGORIES</a>
                <ul className="submenu-footer">
                    <li><Link to="/travel">TRAVEL</Link></li>
                    <li><Link to="/fashion">FASHION</Link></li>
                    <li><Link to="/lifestyle">LIFESTYLE</Link></li>
                    <li><Link to="/food">FOOD</Link></li>
                    <li><Link to="/inspiration">INSPIRATION</Link></li>
                    <li><Link to="/photography">PHOTOGRAPHY</Link></li>
                </ul>
            </li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
        </ul>
    )
}

export default MenuFooter
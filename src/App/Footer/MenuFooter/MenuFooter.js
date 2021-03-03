import React from 'react'
import { Link } from 'react-router-dom'

import "./menuFooter.css"

const MenuFooter = () => {
    return (           
        <ul className="menu-footer">
            <li><Link to="/">HOME</Link></li>
            <li><a href="">CATEGORIES</a></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
        </ul>
    )
}

export default MenuFooter
import React from 'react'
import { Link } from 'react-router-dom'

import "./menuFooter.css"

const MenuFooter = () => {
    return (           
        <ul className="menu-footer">
            <li><Link to="/">HOME</Link></li>
            <li><a href="">CATEGORIES</a></li>
            <li><a href="">BLOG</a></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><a href="">CONTACT</a></li>
        </ul>
    )
}

export default MenuFooter
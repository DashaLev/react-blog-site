import React from 'react'

import "./menu.css"

const Menu = () => {
    return (           
        <ul  className="menu">
            <li><a href="">HOME</a></li>
            <li className="arrow"><a href="">CATEGORIES</a>
                <ul class="submenu">
                    <li><a href="">TRAVEL</a></li>
                    <li><a href="">FASHION</a></li>
                    <li><a href="">LIFESTYLE</a></li>
                    <li><a href="">FOOD</a></li>
                    <li><a href="">INSPIRATION</a></li>
                    <li><a href="">PHOTOGRAPHY</a></li>
                </ul>
            </li>
            <li><a href="">BLOG</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>  
    )
}

export default Menu
import React, {Component} from 'react'
import "./menu.css"
import { Link } from 'react-router-dom'

class Menu extends Component {

    state = {
        mainMenu:"menu navigation hiden-menu",
        mobMenu:"nav-mobile-menu",
    }

    openMenu = () => {
        this.setState(() => ({
            mainMenu: "menu navigation hiden-menu active-menu",
            mobMenu:"nav-mobile-menu active-menu",
        }))
    }
    closeMenu = () => {
        this.setState(() => ({
            mainMenu: "menu navigation hiden-menu",
            mobMenu:"nav-mobile-menu",
        }))
    }
    
    render () {
        return ( 
            <nav>        
                <ul className={this.state.mainMenu}>
                    <button className="close-mob-menu"
                    onClick={() => this.closeMenu()}>x</button>
                    <li><a href="/">HOME</a></li>
                    <li className="arrow"><a>CATEGORIES</a>
                        <ul className="submenu">
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
                <div className={this.state.mobMenu}
                     onClick={() => this.openMenu()}>
                     
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav> 
        )
    }
}

export default Menu
import React, {Component} from 'react'
import "./menu.css"

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
                    <li><a href="">HOME</a></li>
                    <li className="arrow"><a href="">CATEGORIES</a>
                        <ul className="submenu">
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
import React from 'react'

import './header.css'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Search from './Search/Search'


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <Logo/>
                    <Menu/>
                    <Search/>
                </div>
            </div>
        </header>
    )
}

export default Header
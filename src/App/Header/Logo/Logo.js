import React from 'react'

import logo from './logo.png'
import logo_m from './logo_m.png'

import './logo.css'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" class="hide-xs"/>
            <img src={logo_m} alt="logo" class="hide-md"/>
        </div>        
    )
}

export default Logo
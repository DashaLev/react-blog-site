import React from 'react'

import logo from './logo.png'
import logo_m from './logo_m.png'

import './logo.css'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" className="hide-xs"/>
            <img src={logo_m} alt="logo" className="hide-md"/>
        </div>        
    )
}

export default Logo
import React from 'react'

import LogoFooter from './LogoFooter/LogoFooter'
import MenuFooter from './MenuFooter/MenuFooter'
import NetworkListFooter from './NetworksListFooter/NetworksListFooter'
import FooterInfo from './FooterInfo/FooterInfo'



const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <LogoFooter/>
                    <MenuFooter/>
                    <NetworkListFooter/>
                    <FooterInfo/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
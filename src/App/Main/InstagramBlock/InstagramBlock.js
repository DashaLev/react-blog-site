import React from 'react'

import "./instagramBlock.css"

const InstagramBlock = () => {
    return (           
        <div class="inastagram-block">
            <div class="inst-title">INSTAGRAM</div>
            <ul class="inst-list-photo">
                <li>
                    <a href="">
                        <img src="images/ins_1.png" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="images/ins_2.png" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="images/ins_3.png" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="images/ins_4.png" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="images/ins_5.png" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="images/ins_6.png" alt=""/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default InstagramBlock
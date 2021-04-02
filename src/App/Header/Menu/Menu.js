import React from 'react'

import './menu.css'

const Menu=()=>{
    return(
        <div className="menu">
        <ul>
            <li className="separator"></li>
            <li>
                <a href="">
                    <span>A Swimmer's life</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Fitness & Wellness</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Insider Advice</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Just for Women</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Swim Tech</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Training & Technique</span>
                </a>
            </li>
            <li className="separator"></li>
        </ul>
    </div>
    )
}

export default Menu
import React from 'react'
import './footer.css'
import iconFacebook from './icon_Facebook.png'
import iconYoutube from './icon_Youtube.png'
import iconInstagram from './icon_Instagram.png'
import iconTwitter from './icon_Twitter.png'

const Footer = () =>{
    return(
    <footer >
        <div className="container">
            <div className="row footer">
                <div className="logo col-lg-5">
                    <button>Swimming every day</button>
                </div>
                <div className="socialIcons col-lg-7">
                    <span>Stay In Touch:</span>
                    <img src={iconFacebook}></img>
                    <img src={iconYoutube}></img>
                    <img src={iconInstagram}></img>
                    <img src={iconTwitter}></img>                
                </div>
            </div>
            <div className="row copyright">
                 Copyright © 2021
            </div>
        </div>
    </footer>
    )
}

export default Footer
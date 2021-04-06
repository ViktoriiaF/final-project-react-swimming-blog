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
                <div className="logo col-lg-5 col-sm-12">
                    <button>Swimming every day</button>
                </div>
                <div className="socialIcons col-lg-7 col-sm-12">
                    <span>Stay In Touch:</span>
                    <a href=""><img src={iconFacebook}></img></a>
                    <a href=""><img src={iconYoutube}></img></a>
                    <a href=""> <img src={iconInstagram}></img></a>
                    <a href=""><img src={iconTwitter}></img></a>                                   
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
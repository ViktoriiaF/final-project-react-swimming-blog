import React from 'react'

import './header.css'

import Navigation from './Navigation/Navigation'
import Menu from './Menu/Menu'

const Header=()=>{
    return(
        <header>
       
           <Navigation/>

           <Menu/>          

        </header>
    )
}


export default Header
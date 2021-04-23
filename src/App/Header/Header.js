import React from 'react'

import './header.css'

import Navigation from './Navigation/Navigation'
import Menu from './Menu/Menu'

const Header=({
    setCategory
})=>{
    return(
        <header>
       
           <Navigation
            setCategory={setCategory}
           />

           <Menu/>          

        </header>
    )
}


export default Header
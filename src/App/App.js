import React, { useState} from 'react'

import '../common/reset.css'
import '../common/style.css'



import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App=()=>{
    const [category, setCategory]=useState("Swimming Blog")
    return(
        <>
        <Header
            setCategory={setCategory}
        />
        <Main
            setCategory={setCategory}
            category={category}
        />
        <Footer/>
     </>
    )
}



export default App

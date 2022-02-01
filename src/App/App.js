import React, { useState} from 'react'

import '../common/reset.css'
import '../common/style.css'



import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App=()=>{
    const [category, setCategory]=useState("Swimming Blog")
    const [count, setCount] = useState([0, 0, 0]);

  
   const changeCount=(count,i)=>{
        count[i]+=1
        console.log(i)
        return [...count]
        
    }
  
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

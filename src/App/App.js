import React, { useEffect, useState} from 'react';
import '../common/reset.css';
import '../common/style.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const App=()=>{
    const [category, setCategory]=useState("Swimming Blog");
    const [count, setCount] = useState([0, 0, 0]);
    const [like, setLike]=useState(false);

  
   

    const toogleLike=(like)=>{
        console.log(`This is ${like}`);
        if(like){
            setLike(false);
            setCount(count-1);
        }else{
            setLike(true);
            setCount(count+1);
        }
    };

    
  
    return(
        
        <>
            <Header
                setCategory={setCategory}
            />
            <Main
                setCategory={setCategory}
                category={category}
                toogleLike={toogleLike}
            />
            <Footer/>
        </>       
    )
}



export default App

import React from 'react'
import {  Link } from 'react-router-dom'


const CategoryList=({
    setCategory
})=>{
    
    

       const  handleClick =value=>(e)=> {
                    
          setCategory(value)          
        }  
        
      
    return(
        
                <div className="category-list col-lg-12 col-sm-12">
                    <ul>
                         <li>
                          
                             <Link to={`/articles/A Swimmer's life`}   onClick={handleClick("Category: A Swimmer's life")}>
                                 <span>A Swimmer's life</span>
                             </Link>
                         </li>
                         <li>
                             <Link to={`/articles/Fitness & Wellness`} onClick={handleClick("Category: Fitness & Wellness")}>
                                <span>Fitness & Wellness</span>
                             </Link>
                             
                         </li>
                         <li>
                             <Link to={`/articles/Insider Advice`} onClick={handleClick("Category: Insider Advice")}>
                                 <span>Insider Advice</span>
                             </Link>
                         </li>
                         <li>
                             <Link to={`/articles/Just for Women`} onClick={handleClick("Category: Just for Women")}>
                                 <span>Just for Women</span>
                             </Link>
                         </li>
                         <li>
                             <Link to={`/articles/Swim Tech`} onClick={handleClick("Category: Swim Tech")}>
                                 <span>Swim Tech</span>
                             </Link>
                         </li>
                         <li>
                             <Link to={`/articles/Training & Technique`} onClick={handleClick("Category: Training & Technique")}>
                                 <span>Training & Technique</span>
                             </Link>
                         </li>
                         <li className="separator"></li>
                     </ul>
                </div>
        
    )
}

export default CategoryList
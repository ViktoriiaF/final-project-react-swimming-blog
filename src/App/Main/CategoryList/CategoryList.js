import React from 'react'
import {  Link } from 'react-router-dom'


const CategoryList=({
    match
})=>{
    console.log(match)
    return(
        <div className="row sticky-el">
                <div className="category-list col-lg-12 col-sm-12">
                    <ul>
                         <li>
                             <Link to={`"/A Swimmer's life"`}>
                                 <span>A Swimmer's life</span>
                             </Link>
                         </li>
                         <li>
                             <>
                                <span>Fitness & Wellness</span>
                             </>
                             
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
        </div>
    )
}

export default CategoryList
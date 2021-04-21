import React from 'react'

const CategoryList=()=>{
    return(
        <div className="row sticky-el">
                <div className="category-list col-lg-12 col-sm-12">
                    <ul>
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
        </div>
    )
}

export default CategoryList
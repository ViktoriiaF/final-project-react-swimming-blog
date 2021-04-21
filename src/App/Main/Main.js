import React from 'react'
import CategoryList from './CategoryList/CategoryList'
import Content from './Content/Content'

import './main.css'

const Main = () =>{
    return(
    <main>
        <div className="container container-white">
            <div className="container-inner">
                <div className="row col-lg-12 col-sm-12 centre">
                    <div className="title-category">Category:</div>
                </div>                
                <CategoryList/>
                
                <Content/>     
            </div>            
        </div>
    </main>
    )
}

export default Main
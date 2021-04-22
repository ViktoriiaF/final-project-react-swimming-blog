import React from 'react'
import CategoryList from './CategoryList/CategoryList'
import Content from './Content/Content'
import { Route } from "react-router-dom"

import './main.css'

const Main = () =>{
    return(
    <main>
        <div className="container container-white">
            <div className="container-inner">
                <div className="row col-lg-12 col-sm-12 centre">
                    <div className="title-category">Category:</div>
                </div>                
                {/* <Route path="/" exact component={CategoryList}/>
                <Route path="/category" component={CategoryList}/> */}
                <CategoryList/>
                <Content/>     
            </div>            
        </div>
    </main>
    )
}

export default Main
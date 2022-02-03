import React from 'react';
import CategoryList from './CategoryList/CategoryList';
import Content from './Content/Content';
import { Route } from "react-router-dom";

import './main.css';

const Main = ({
    setCategory,
    category
}) =>{
    
    
    
    return(
    <main>
        <div className="container container-white">
            <div className="container-inner">
                <div className="row col-lg-12 col-sm-12 centre">
                    <div className="title-category">{category}</div>
                </div>  
                             
                {/* <CategoryList                    
                    setCategory={setCategory}
                />    */}
                <div className="row sticky-el"> 
                    <Route path="/" render={()=><CategoryList  
                            setCategory={setCategory}
                    />}/>     
                </div>
                    
               
                <Content
                    setCategory={setCategory}
                /> 

                  
            </div>            
        </div>
    </main>
    )
}

export default Main
import React from 'react'
import { Route } from 'react-router'
import ArticleList from './Articles/ArticleList'
import PopularArticlesList from './Articles/PopulareArticles/PopularAriclesList'


const Content=()=>{
    return(
        <div className="blog-content row">
            {/* <!-- Left Content --> */}
            <div className="list-news row col-lg-8 col-sm-12 col-md-12">
                <Route path="/" exact component={ArticleList}/>                        
                <Route path="/articles/:category" component={ArticleList}/>              
            </div>
             {/* <!-- /Left Content --> */}


            {/* <!-- Right Content --> */}
            <div class="right col-lg-4 col-sm-12 col-md-12">
                <div class="popular-posts row ">
                    <h3 class="title-popular-posts col-lg-12">most popular posts</h3>
                </div>
                <div class="row ">
                    <div class="list-popular-posts col-lg-12">
                        
                            <PopularArticlesList/>
                         
                    </div>
                </div>                   
            </div>             
        </div>             
    )
}

export default Content



import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './Articles/ArticleList';
import PopularArticlesList from './Articles/PopulareArticles/PopularAriclesList';
import ArticlePage from './ArticlePage/ArticlePage';


const Content=({
    setCategory
})=>{
    return(
        <div className="blog-content row">
            {/* <!-- Left Content --> */}
            <div className="list-news row col-lg-8 col-sm-12 col-md-12">
                <Route path="/" exact component={ArticleList}/>                        
                <Route path="/articles/:category" render={({match})=><ArticleList
                    setCategory={setCategory}                    
                    match={match}
                />}/> 
                <Route path="/article/:id" component={ArticlePage}/>              
            </div>
             {/* <!-- /Left Content --> */}


            {/* <!-- Right Content --> */}
            <div className="right col-lg-4 col-sm-12 col-md-12">
                <div className="popular-posts row ">
                    <h3 className="title-popular-posts col-lg-12">most popular posts</h3>
                </div>
                <div className="row ">
                    <div className="list-popular-posts col-lg-12">
                        
                            <PopularArticlesList/>
                         
                    </div>
                </div>                   
            </div>             
        </div>             
    )
}

export default Content



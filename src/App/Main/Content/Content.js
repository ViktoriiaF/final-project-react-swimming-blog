import React from 'react'
import ArticleList from './Articles/ArticleList'


const Content=()=>{
    return(
        <div className="blog-content row col-lg-12 col-sm-12">
                    {/* <!-- Left Content --> */}
                 <div className="list-news row col-lg-8 col-sm-12">
                        <ArticleList/>
                        
                </div>
                        {/* <!-- /Left Content --> */}
                         {/* <!-- Right Content --> */}
                     <div className="right col-lg-4">
                       <div className="popular-posts row ">
                           <h3 className="title-popular-posts col-lg-12">most popular posts</h3>
                        </div>
                        <div className="row ">
                           <div className="list-popular-posts col-lg-12">
                               <div className="news-popular row">
                                   <div className="img-popular-post col-lg-4">
                                        <a href="/" className=" ">
                                            <img src={"./backstroke-150x150.jpg"} alt="" ></img>
                                        </a>
                                    </div>
                                   <div className="caption-popular-post col-lg-8">
                                       <h4  className="title-populare-post">
                                        <a href="/">10 drills all budding backstroke swimmers should try</a>                                        
                                       </h4>
                                       <p className="date-populare-post">28 September 2018</p>
                                   </div>
                               </div> 
                           </div>
                        </div>                    
                    </div> 
                </div>             
    )
}

export default Content
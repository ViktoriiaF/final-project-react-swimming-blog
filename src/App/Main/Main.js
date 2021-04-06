import React from 'react'
import testImage from './freestyle_arm_stroke.jpg'

import './main.css'

const Main = () =>{
    return(
    <main>
        <div className="container container-white">
            <div className="container-inner">
                <div className="row col-lg-12 col-sm-12 centre">
                    <div className="title-category">Category:</div>
                </div>
                {/* <!-- Category List --> */}
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
                {/* <!-- /Category List --> */}

                {/* <!-- Content --> */}
                <div className="blog-content row col-lg-12 col-sm-12">
                    {/* <!-- Left Content --> */}
                    <div className="list-news row col-lg-8 col-sm-12">
                        <article className="news">
                            <img src = {testImage} alt=""/>
                            <div className="caption">
                                <div className="category-news">
                                    <a href="">
                                        <span> Training & Technique </span>
                                    </a>
                                </div>
                                <div className="title-news">
                                    HOW TO IMPROVE YOUR FREESTYLE ARM STROKE!
                                </div>
                                <p className="intro-news">
                                    Improve your freestyle arm stroke to develop a more efficient stroke! Catch, pull,
                                    push and recovery, these are the four key phases in a freestyle ...
                                </p>
                                <div className="meta-news">
                                    Written by:
                                </div>
                                <div className="sta-news">
                                    <button className="btn-news">
                                        Read more
                                    </button>
                                    <span className="btn-lable">
                                        <i className="plus">+</i>
                                    </span>
                                </div>
                            </div>
                        </article>
                        {/* <article className="news">
                            <img src={"./freestyle_arm_stroke.jpg"} alt=""></img>
                        </article> */}
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
                                        <a href="" className=" ">
                                            <img src={"./backstroke-150x150.jpg"} alt="" ></img>
                                        </a>
                                    </div>
                                   <div className="caption-popular-post col-lg-8">
                                       <h4  className="title-populare-post">
                                        <a href="">10 drills all budding backstroke swimmers should try</a>                                        
                                       </h4>
                                       <p className="date-populare-post">28 September 2018</p>
                                   </div>
                               </div> 
                           </div>
                        </div>                    
                    </div> 
                </div>                  
            </div>            
        </div>
    </main>
    )
}

export default Main
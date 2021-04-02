import React from 'react'

import './header.css'

const Header=()=>{
    return(
        <header>
       
            <nav>
                <div className="container">
                    <div className="row top-menu">
                        <div className="left col-lg-6">
                            <button className="btn-menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="btn-menu">
                                Swimming every day
                            </div>
                        </div>
                        <div className="right-end col-lg-6">
                            <a href="" className="btn btn-link">Home</a>

                            <a href="" className="btn btn-primary btn-rounded btn-login hidden-sm-down"><span>Log in</span>
                            </a>
                            <a href="" className="btn btn-secondary btn-rounded hidden-sm-down"><span>Sign up</span>
                            </a>

                        </div>
                    </div>
                </div>
            </nav>
             {/* <!-- /Nav --> */}

            {/* <!--Menu--> */}
            <div className="menu">
                <ul>
                    <li className="separator"></li>
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
            {/* <!--/Menu--> */}

        </header>
    )
}


export default Header
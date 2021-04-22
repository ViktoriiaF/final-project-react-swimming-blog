import React from 'react'
import { Link } from 'react-router-dom'

import './navigation.css'

const Navigation=()=>{
    return(
        <nav>
                <div className="container">
                    <div className="row top-menu">
                        <div className="left col-lg-6 col-sm-6">
                            <button className="btn-menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="btn-menu">
                                Swimming every day
                            </div>
                        </div>
                        <div className="right-end col-lg-6 col-sm-6">
                            <Link to="/" >Home</Link>

                            <a href="/" className="btn btn-primary btn-rounded btn-login hidden-sm-down"><span>Log in</span>
                            </a>
                            <a href="/" className="btn btn-secondary btn-rounded hidden-sm-down"><span>Sign up</span>
                            </a>

                        </div>
                    </div>
                </div>
        </nav>            
    )
}

export default Navigation
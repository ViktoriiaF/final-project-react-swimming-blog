import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"


const PopularArticlesListItem = ({
    id,
                    category,
                    title,
                    description,
                    meta,
                    image,
                    rating
}) =>{
    return(
        <>     
            <div className="news-popular row">
            <div className="img-popular-post col-lg-4">
                <Link>
                    <img src = {image} alt=""/>
                </Link>
            </div>
            <div className="caption-popular-post col-lg-8">
                <h4  className="title-populare-post">
                    <Link>{title}</Link>                                        
                </h4>
                <p className="date-populare-post">28 September 2018</p>
            </div> 
            </div>
        </>
    )
}


PopularArticlesListItem.propTypes={
    category:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    meta:PropTypes.string.isRequired
    }


export default PopularArticlesListItem


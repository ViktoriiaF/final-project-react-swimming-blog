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
            <div class="news-popular row">
            <div class="img-popular-post col-lg-4">
                <Link>
                    <img src = {image} alt=""/>
                </Link>
            </div>
            <div class="caption-popular-post col-lg-8">
                <h4  class="title-populare-post">
                    <Link>{title}</Link>                                        
                </h4>
                <p class="date-populare-post">28 September 2018</p>
            </div> 
            </div>
        </>
    )
}


PopularArticlesListItem.propTypes={
    category:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    meta:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired
}


export default PopularArticlesListItem


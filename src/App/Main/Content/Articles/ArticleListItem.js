import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const ArticleListItem=({
    id,
    category,
    title,
    description,
    meta,
    image,
    setCategory,
    
})=>{
    
    const  handleClick =value=>(e)=> {
        
        setCategory.useEffect=(value)=>{
            let categoryTitle=document.getElementsByClassName('title-category');
           categoryTitle[0].innerHtml=`{value}`;
        } ;           
                 
      }; 

    
    return(
        <article className="news">
            <img src = {image} alt=""/>
            <div className="caption">
                <div className="category-news">
                    <Link to={`/articles/${category}`}  onClick={() => handleClick(category)}>
                        <span> {category} </span>
                    </Link>
                </div>
                <div className="title-news">
                   {title}
                </div>
                <p className="intro-news">
                    {description}
                </p>
                <div className="meta-news">
                   {meta}
                </div>
                <Link to={`/article/${id}`} className="read-more-btn">
                    <div className="sta-news row">
                        <button className="btn-news ">
                            Read more
                        </button>
                        <span className="btn-lable">
                            <i className="plus">+</i>
                        </span>
                    </div>
                </Link>
            </div>
        </article>
    )
}

ArticleListItem.propTypes={
    category:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    meta:PropTypes.string.isRequired
}

export default ArticleListItem


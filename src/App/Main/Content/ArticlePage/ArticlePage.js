import React from "react";
import articles, {getArticlesObject} from "../Articles/articles";


const ArticlePage = ({
    match,    
    articlesItem=getArticlesObject(articles)
    
}) => {
    console.log(match);
    const id = match.params.id;
    return(
        <>
            <div className="article-page col-lg-12 col-md-12 col-sm-12">
                <img src={articlesItem[id].image} className="article-image"/>
                <div className="article-inner">
                    <h1 className="article-title">{articlesItem[id].title}</h1>
                    <p className="article-text">{articlesItem[id].text}</p>
                    <p className="article-meta">{articlesItem[id].meta}</p>
                </div>
                

            </div>
        </>
    )
}


export default ArticlePage
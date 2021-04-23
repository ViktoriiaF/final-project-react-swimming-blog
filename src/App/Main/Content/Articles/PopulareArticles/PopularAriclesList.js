import React from 'react'
import PopularArticlesListItem from './PopularArticlesLiasItem'
import articles from '../articles'

const PopularArticlesList = () =>{
    return(
        <>
             
    {
            
                articles.sort((a, b) => b - a).slice(0,5).map(({
                    id,
                    category,
                    title,
                    description,
                    meta,
                    image,
                    rating
                })=>(
                   <div className="popular-post-box" key={id}>
                    <PopularArticlesListItem
                        id={id}
                        category={category}
                        title={title}
                        description={description}
                        meta={meta}
                        image={image}
                        rating={rating}
                    />
                   </div>
                ))
            }
            

                              
        </>
    )
}

export default PopularArticlesList
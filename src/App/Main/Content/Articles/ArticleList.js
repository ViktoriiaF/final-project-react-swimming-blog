import React from 'react'
import ArticleListItem from './ArticleListItem'
import articles from './articles'

const ArticleList = () =>{
    return(
        <>
            {
                articles.map(({
                    id,
                    category,
                    title,
                    description,
                    meta,
                    image
                })=>(
                   <div className="col-lg-6 col-sm-12" key={id}>
                    <ArticleListItem
                        id={id}
                        category={category}
                        title={title}
                        description={description}
                        meta={meta}
                        image={image}
                    />
                   </div>
                ))
            }
        </>
    )
}

export default ArticleList
import React from 'react'
import ArticleListItem from './ArticleListItem'
import articles from './articles'

const ArticleList = ({
    match
}) =>{
    console.log(match)
    return(
        <>
            {
                articles.filter(match.params.category?x => x.category===match.params.category:x=>x).map(({
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
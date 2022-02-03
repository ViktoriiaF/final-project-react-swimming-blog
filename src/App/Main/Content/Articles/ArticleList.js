import React from 'react';
import ArticleListItem from './ArticleListItem';
import articles from './articles';

const ArticleList = ({
    match,
    setCategory
}) =>{
    console.log(match);
    return(
        <>
            {
                articles.filter(match.params.category?x => x.category===match.params.category:x=>x).map(({
                    id,
                    category,
                    title,
                    description,
                    meta,
                    image,
                    rating
                })=>(
                   <div className="col-lg-6 col-sm-12 col-md-12" key={id}>
                    <ArticleListItem
                        id={id}
                        category={category}
                        title={title}
                        description={description}
                        meta={meta}
                        image={image}
                        rating={rating}
                        setCategory={setCategory}
                    />
                   </div>
                ))
            }
        </>
    )
}

export default ArticleList
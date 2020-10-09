import React from "react";

//Custom components
import { categories } from "../config/data";

const Category = (props) => {
  
  const categoryNameParam = props.match.params.categoryName;
  const selectedCategory = categories.find(category => category.name === categoryNameParam); //SPIDER : Cambiarlo una vez que este redux

  const {isLoading,hasError,error,articles,onGet} = props;
 
  const articleList = articles.map(article => {
    return (
      <li key={article.news_id}>
          <div>Category: {article.category}</div>
          <div>Title: {article.title}</div>
      </li>
    )
  })

  return (
          
    <div>
        <h3>
            Categoria {selectedCategory.description} - {selectedCategory.id}
        </h3>
        <div>
          <button onClick={()=>onGet(selectedCategory.id)}>
             Buscar
          </button>          
        </div>
        <div>
          {hasError ? `Error buscando noticias: ${error}` : ""}
        </div>
        <div>
            {isLoading? "Loading" : ""}
        </div>
        <div>
          {articles.length}
          <ul>
            {articleList}
          </ul>
        </div>
    </div>
  );
};

export default Category;

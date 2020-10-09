import React from "react";

//Custom components


class Category extends React.Component {

  refreshArticles() {
    const {selectedCategory,onGet} = this.props;
  
    if (this.props.selectedCategory!==undefined) {
      onGet(selectedCategory.id);
    }
  }

  componentDidMount() {
    this.refreshArticles();
  }

  componentDidUpdate(prevProps) {
    
    if (this.props.selectedCategory !== prevProps.selectedCategory) {
      this.refreshArticles();
    }
  }
  
  render() {

    const {selectedCategory,isLoading,hasError,error,articles,onGet} = this.props;
   
    const articleList = articles.map(article => {
      return (
        <li key={article.news_id}>
            <div>Category: {article.category}</div>
            <div>Title: {article.title}</div>
        </li>
      )
    })

    if (selectedCategory===undefined) {
      return (
        <div>
           No se encontro la categoría de noticias especificada => {this.props.match.params.categoryName}
        </div>
      ) 
    }
  
    return (
            
      <div>
          <h3>
              Categoria {selectedCategory.description} - {selectedCategory.id}
          </h3>
          <div>
            <button onClick={()=>this.refreshArticles()}>
               Refresh
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
  }
};

export default Category;

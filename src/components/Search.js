import React from "react";

class Search extends React.Component {

  refreshArticles() {
    const {paramTextToSearch,onGet} = this.props;
  
    if (this.props.paramTextToSearch!==undefined) {
      onGet(paramTextToSearch);
    }
  }

  componentDidMount() {
    this.refreshArticles();
  }

  componentDidUpdate(prevProps) {
    
    if (this.props.textToSearch !== prevProps.textToSearch) {
      this.refreshArticles();
    }
  }
  
  render() {

    const {textToSearch,paramTextToSearch,isLoading,hasError,error,articles} = this.props;
   
    const articleList = articles.map(article => {
      return (
        <li key={article.news_id}>
            <div>Category: {article.category}</div>
            <div>Title: {article.title}</div>
        </li>
      )
    })

    if (textToSearch===undefined) {
      return (
        <div>
           No se ingreso ningun criterio de búsqueda
        </div>
      ) 
    }
  
    return (
            
      <div>
          <h3>
              Resultados encontrados: [{textToSearch}] - paramTextToSearch: [{paramTextToSearch}]
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

export default Search;
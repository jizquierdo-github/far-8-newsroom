import React from "react";

//Custom components
import * as endpoints from "../config/endpoints";

class Latest extends React.Component {

  refreshArticles() {
    const {onGet,selectedDate} = this.props;
  
    if (this.props.selectedDate!==undefined) {
      onGet(selectedDate);
    }
  }

  componentDidMount() {
    this.refreshArticles();
  }

  componentDidUpdate(prevProps) {
    
    if (this.props.selectedDate !== prevProps.selectedDate) {
      this.refreshArticles();
    }
  }  

  render() {
    const dateParam = this.props.match.params.date;
    const {isLoading,hasError,error,articles} = this.props;
  
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
              Útimo momento {dateParam}
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

export default Latest;

import React from "react";

//Custom components
import * as endpoints from "../config/endpoints";

class Latest extends React.Component {

  state = {
    customDate : ""
  }

  handleOnChange=(e)=> {
    this.setState({customDate: e.target.value})
  }

  refreshArticles(date) {
    const {onGet,selectedDate} = this.props;
  
    const newDate = date === undefined ? selectedDate : date 

    if (newDate!==undefined) {
      onGet(newDate);
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
    const {isLoading,hasError,error,selectedDate,articles} = this.props;
  
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
              Útimo momento {selectedDate}
          </h3>
          
          <div>
            <input value={this.state.customDate} onChange={this.handleOnChange}/>
            <button onClick={()=>this.refreshArticles(this.state.customDate)}>
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

import React from "react";
import {Link} from "react-router-dom"

//Custom components
import { getTodayAsYYYYMMDD } from "../utils/dateFunctions";

class Latest extends React.Component {

  handleOnChange=(e)=> {
    this.props.setDate(e.target.value);
  }

  refreshArticles() {
    const {onGet,paramDate} = this.props;      
    const newDate =  (paramDate === undefined || paramDate.toUpperCase()==="HOY") ? getTodayAsYYYYMMDD() : paramDate;
   
    if (newDate!==undefined) {
       onGet(newDate);
    }
  }

  componentDidMount() {
    this.refreshArticles();
  }

  componentDidUpdate(prevProps) {    
    if (this.props.paramDate !== prevProps.paramDate) {
      this.refreshArticles();
    }
  }  

  render() {
    const {isLoading,hasError,error,paramDate,articleDate,articles} = this.props;
  
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
              Útimo momento ParamDate: [{paramDate}] - articleDate:[{articleDate}]
          </h3>
          
          <div>
            <input
              value={articleDate} onChange={this.handleOnChange}
              type="date"
            />            
            <Link to={`/ultimas/${articleDate}`}>
              <button>
                Refresh
              </button>        
            </Link>
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

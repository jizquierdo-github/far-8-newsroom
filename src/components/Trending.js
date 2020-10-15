import React from "react";
import {Link} from "react-router-dom"

//Custom components
import { getTodayAsYYYYMMDD } from "../utils/dateFunctions";

class Trending extends React.Component {

  handleOnChange=(e)=> {
    const {name,value} = e.target;

    switch(name) {
      case "date" : {
        this.props.setDate(value);
        break;
      }  
      case "quantity" : {
        this.props.setQuantity(value);
        break;
      }  
      default : {

      }

    }

  }

  refreshArticles() {
    const {onGet,paramDate,paramQuantity} = this.props;      
    const newDate =  (paramDate === undefined || paramDate.toUpperCase()==="HOY") ? getTodayAsYYYYMMDD() : paramDate;
   
    if (newDate!==undefined && paramQuantity!==undefined) {
      onGet(newDate,paramQuantity);
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
    const {isLoading,hasError,error,paramDate,paramQuantity,articleDate,articleQuantity,articles} = this.props;
  
    const articleList = [] /*articles.map(article => {
      return (
        <li key={article.news_id}>
            <div>Category: {article.category}</div>
            <div>Title: {article.title}</div>
        </li>
      )
    })*/
    
    return (
            
      <div>
          <h3>
              Tendencias: [{paramDate}] - articleDate:[{articleDate}] - paramQty [{paramQuantity}] articleQuantity [{articleQuantity}]
          </h3>
  
          <div>
            <input
              name="date"
              value={articleDate} onChange={this.handleOnChange}
              type="date"
            />      
            <input
              name="quantity"
              value={articleQuantity} onChange={this.handleOnChange}
              type="number"
            />                    
            <Link to={`/tendencias/${articleDate}/${articleQuantity}`}>
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

export default Trending;

import React from "react";
import {Link} from "react-router-dom"

//Custom components
import { getTodayAsYYYYMMDD } from "../utils/dateFunctions";

class Trending extends React.Component {

  state = {
    selectedTopic : ""
  }

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
    
    if ((this.props.paramDate !== prevProps.paramDate) || (this.props.paramQuantity !== prevProps.paramQuantity)) {
      this.refreshArticles();
    }
    if (this.props.topics.length !== prevProps.topics.length) {
      this.setState({selectedTopic: this.props.topics[0]})  
    }
  }

  handleTopicSelection = (e) => {
    this.setState({selectedTopic: e.target.value})
  }

  render() {
    const {isLoading,hasError,error,paramDate,paramQuantity,articleDate,articleQuantity,topics,articleGroups} = this.props;
  
    const topicList = topics.map((topic,i) => {
      return (
          <option key={i} value={topic}>{`${topic} (${articleGroups[topic].length})`}</option>
      )
    })

    const articles = articleGroups[this.state.selectedTopic]
    const articleList = articles!==undefined ? articleGroups[this.state.selectedTopic].map(article => {
      return (
        <li key={article.news_id}>
            <div>Category: {article.category}</div>
            <div>Title: {article.title}</div>
        </li>
      )
    }) : []
    
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
            {topics.length}
            <div>
                <select onChange={this.handleTopicSelection} value={this.state.selectedTopic}>
                   {topicList}
                </select>
            </div>
            <div>
              <ul>
                {articleList}
              </ul>
            </div>
          </div>
          
      </div>
    );
  }
};

export default Trending;

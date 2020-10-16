import { combineReducers } from 'redux'
import { getTodayAsYYYYMMDD } from "../utils/dateFunctions";

//Custom section
import * as actionTypes from "../actions/actionTypes"

const INITIAL_LOADING_ERROR = {
  hasError: false,
  error: ""
}

const INITIAL_DATE = getTodayAsYYYYMMDD();
const INITIAL_QUANTITY = 5;

const INITIAL_ARTICLE_DATA = {
  articles: [],
  date: INITIAL_DATE,
  quantity: INITIAL_QUANTITY,
  trendingData: {topics : [], news: {}}
};

//LoadingError Reducer
const loadingError = (state = INITIAL_LOADING_ERROR, action) => {
    
  switch (action.type) {
    case actionTypes.ACTION_TYPE_LOADING_ERROR:
      return {...action.payload};
    
    default:
      return state;
  }
}

//LoadingInProgress Reducer
const loadingInProgress = (state = false, action) => {

  switch (action.type) {
    case actionTypes.ACTION_TYPE_LOADING_IN_PROGRESS:
      return action.isLoading;

    default:
      return state;
  }
}

//Articles reducer
const articleData =  (state = INITIAL_ARTICLE_DATA, action) => {

  switch (action.type) {
    case actionTypes.ACTION_TYPE_SET_ARTICLE_DATE:
      return {...state,date: action.articleDate}

    case actionTypes.ACTION_TYPE_SET_ARTICLE_QUANTITY:
      return {...state,quantity: action.articleQuantity}

    case actionTypes.ACTION_TYPE_CLEAR_ARTICLES:
      return {...state,
              articles: [],
              trendingData: {topics : [], 
                             news: {}}}

    case actionTypes.ACTION_TYPE_LOADING_SUCCESS:
      return {...state,articles: action.articles}

    case actionTypes.ACTION_TYPE_TRENDING_SUCCESS:
      return {...state,
              trendingData: {topics: action.payload.topics,
                             news: action.payload.news}}

    case actionTypes.ACTION_TYPE_SEARCH_ARTICLES:
      return state;
    
    case actionTypes.ACTION_TYPE_GET_ARTICLES_BY_CATEGORY:
        return state;
        
    case actionTypes.ACTION_TYPE_GET_LATEST_ARTICLES:
        return state;
        
    case actionTypes.ACTION_TYPE_GET_TRENDING_ARTICLES:
        return state;
        
    default:
      return {...state}
  }  
  
}


//Reducer combination
export default combineReducers({
  loadingError,
  loadingInProgress,
  articleData
})

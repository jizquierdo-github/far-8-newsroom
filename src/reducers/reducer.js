import { combineReducers } from 'redux'

//Custom section
import * as actionTypes from "../actions/actionTypes"

const INITIAL_LOADING_ERROR = {
  hasError: false,
  error: ""
}

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

//Articles Reducer
const articles = (state = [], action) => {

  switch (action.type) {
      
    case actionTypes.ACTION_TYPE_CLEAR_ARTICLES:
      return [];

    case actionTypes.ACTION_TYPE_LOADING_SUCCESS:
      return action.articles;

    case actionTypes.ACTION_TYPE_SEARCH_ARTICLES:
      return state;
    
    case actionTypes.ACTION_TYPE_GET_ARTICLES_BY_CATEGORY:
        return state;
        
    case actionTypes.ACTION_TYPE_GET_LATEST_ARTICLES:
        return state;
        
    case actionTypes.ACTION_TYPE_GET_TRENDING_ARTICLES:
        return state;

    default:
      return state;
  }
}

//Reducer combination
export default combineReducers({
  loadingError,
  loadingInProgress,
  articles
})
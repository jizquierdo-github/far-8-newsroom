//Custom section
import * as actionTypes from "./actionTypes";
import * as endpoints from "../config/endpoints";

//General actions
export const loadingError = (bool,error) => (
    {
      type: actionTypes.ACTION_TYPE_LOADING_ERROR,
      payload: {
        hasError: bool,
        error
      }
    }
)

export const loadingInProgress = bool => (
    {
      type: actionTypes.ACTION_TYPE_LOADING_IN_PROGRESS,
      isLoading: bool
    }
)
  
export const trendingSuccess = (topics,news) => (
  {
    type: actionTypes.ACTION_TYPE_TRENDING_SUCCESS,
    payload: {topics,news}
  }
) 

export const loadingSuccess = (articles) => (
    {
      type: actionTypes.ACTION_TYPE_LOADING_SUCCESS,
      articles
    }
) 

export const setArticleDate = date => (
  {
    type: actionTypes.ACTION_TYPE_SET_ARTICLE_DATE,
    articleDate : date
  }
)

export const setArticleQuantity = quantity =>  (
  {
    type: actionTypes.ACTION_TYPE_SET_ARTICLE_QUANTITY,
    articleQuantity : quantity
  }
)

export const setTextToSearch = text =>  (
  {
    type: actionTypes.ACTION_TYPE_SET_TEXT_TO_SEARCH,
    textToSearch : text
  }
)


//Specific actions
export const clearArticles = () => (
  {
    type: actionTypes.ACTION_TYPE_CLEAR_ARTICLES
  }
)


export const getArticlesByCategory = (categoryId) => {

  return dispatch => {

    const url = `${endpoints.BASE_URL}${endpoints.ENDPOINT_CATEGORY}${categoryId}`;
    console.log("Url category: [" + url + "]")

    dispatch(clearArticles())

    dispatch(loadingError(false))

    dispatch(loadingInProgress(true))

    fetch(url)
      .then((response) => {

        if (!response.ok) {
          throw Error(response.statusText)
        }

        return response
      })
      .then((response) =>  response.json())
      .then((articles) => {
        console.log(articles)
        dispatch(loadingInProgress(false))
        return  dispatch(loadingSuccess(articles))
      })
      .catch(error => dispatch(loadingError(true,error)))
  }
}

export const getLatestArticles = (newsDate) => {

  return dispatch => {

    const url = `${endpoints.BASE_URL}${endpoints.ENDPOINT_LATEST}${newsDate}`;
    console.log("Url latest: [" + url + "]")

    dispatch(clearArticles())

    dispatch(loadingError(false))

    dispatch(loadingInProgress(true))

    dispatch(setArticleDate(newsDate))

    fetch(url)
      .then((response) => {

        if (!response.ok) {
          throw Error(response.statusText)
        }
       
        return response
      })
      .then((response) =>  response.json())
      .then((articles) => {
        console.log(articles)
        dispatch(loadingInProgress(false))
        return  dispatch(loadingSuccess(articles))
      })
      .catch(error => dispatch(loadingError(true,error)))
  }
}

export const getTrendingArticles =  (newsDate,newsQuantity) => {

  return dispatch => {

    const url = `${endpoints.BASE_URL}${endpoints.ENDPOINT_TRENDING}${newsDate}/${newsQuantity}`;
    console.log("Url trending: [" + url + "]")
   
    dispatch(clearArticles())

    dispatch(loadingError(false))

    dispatch(loadingInProgress(true))

    dispatch(setArticleDate(newsDate))
    dispatch(setArticleQuantity(newsQuantity))
   
    fetch(url)
      .then((response) => {
        
        if (!response.ok) {
          throw Error(response.statusText)
        }
       
        return response
      })
      .then((response) =>  response.json())
      .then((data) => {
        console.log("Topics")
        console.log(data.keywords)
        console.log("News")
        console.log(data.news)
        dispatch(loadingInProgress(false))
        return  dispatch(trendingSuccess(data.keywords,data.news))
      })
      .catch(error => dispatch(loadingError(true,error)))
  }
}

export const searchArticles = (textToSearch) => {

  return dispatch => {

    const url = `${endpoints.BASE_URL}${endpoints.ENDPOINT_SEARCH}${textToSearch}`;
    console.log("Url search: [" + url + "]")

    dispatch(clearArticles())

    dispatch(loadingError(false))

    dispatch(loadingInProgress(true))

   // dispatch(setTextToSearch(textToSearch))

    fetch(url)
      .then((response) => {

        if (!response.ok) {
          throw Error(response.statusText)
        }
       
        return response
      })
      .then((response) =>  response.json())
      .then((articles) => {
        console.log(articles)
        dispatch(loadingInProgress(false))
        return  dispatch(loadingSuccess(articles))
      })
      .catch(error => dispatch(loadingError(true,error)))
  }
}



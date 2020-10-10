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
  
export const loadingSuccess = (articles) => (
    {
      type: actionTypes.ACTION_TYPE_LOADING_SUCCESS,
      articles
    }
) 

//Specific actions
export const clearArticles = () => (
  {
    type: actionTypes.ACTION_TYPE_CLEAR_ARTICLES
  }
)

export const searchArticles = () => (
    {
      type: actionTypes.ACTION_TYPE_SEARCH_ARTICLES //SPIDER: completar
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

        dispatch(loadingInProgress(false))

        return response
      })
      .then((response) =>  response.json())
      .then((articles) => {
        console.log(articles)
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

    fetch(url)
      .then((response) => {

        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(loadingInProgress(false))

        return response
      })
      .then((response) =>  response.json())
      .then((articles) => {
        console.log(articles)
        return  dispatch(loadingSuccess(articles))
      })
      .catch(error => dispatch(loadingError(true,error)))
  }
}

export const getTrendingArticles = () => (
    {
      type: actionTypes.ACTION_TYPE_GET_TRENDING_ARTICLES //SPIDER: completar
    }
)




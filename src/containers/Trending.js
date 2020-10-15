import { connect } from 'react-redux'

//Custom components
import Trending from '../components/Trending'
import {setArticleDate,setArticleQuantity,getTrendingArticles} from '../actions/actions'

const mapStateToProps = (state,ownProps) => ({
  paramDate: ownProps.match.params.paramDate,
  paramQuantity: ownProps.match.params.paramQty,
  articleDate: state.articleData.date,
  articleQuantity: state.articleData.quantity,
  articles:  state.articleData.articles,
  hasError:  state.loadingError.hasError,
  error:     state.loadingError.error,
  isLoading: state.loadingInProgress
})

const mapDispatchToProps = (dispatch) => (
  {
    setDate : (newsDate) => dispatch(setArticleDate(newsDate)),
    setQuantity : (quantity) => dispatch(setArticleQuantity(quantity)),
    onGet: (newsDate,newsQuantity) => dispatch(getTrendingArticles(newsDate,newsQuantity))
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending)

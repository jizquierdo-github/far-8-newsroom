import { connect } from 'react-redux'

//Custom components
import Trending from '../components/Trending'
import {setArticleDate,getLatestArticles} from '../actions/actions'

const mapStateToProps = (state,ownProps) => ({
  paramDate: ownProps.match.params.paramDate,
  articleDate : state.articleDate,
  articles:  state.articles,
  hasError:  state.loadingError.hasError,
  error:     state.loadingError.error,
  isLoading: state.loadingInProgress
})

const mapDispatchToProps = (dispatch) => (
  {
    setDate : (newsDate) => dispatch(setArticleDate(newsDate)),
    onGet: (newsDate) => dispatch(getLatestArticles(newsDate))
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending)

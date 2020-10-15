import { connect } from 'react-redux'

//Custom components
import Latest from '../components/Latest'
import {setArticleDate,getLatestArticles} from '../actions/actions'

const mapStateToProps = (state,ownProps) => ({
  paramDate: ownProps.match.params.paramDate,
  articleDate: state.articleData.date,
  articles:  state.articleData.articles,
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
)(Latest)

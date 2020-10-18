import { connect } from 'react-redux'

//Custom components
import {searchArticles} from '../actions/actions'
import Search from '../components/Search'

const mapStateToProps = (state,ownProps) => ({
  paramTextToSearch: ownProps.match.params.text,
  textToSearch: state.articleData.textToSearch,
  articles:  state.articleData.articles,
  hasError:  state.loadingError.hasError,
  error:     state.loadingError.error,
  isLoading: state.loadingInProgress
})

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onGet: (textToSearch) => dispatch(searchArticles(textToSearch))
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

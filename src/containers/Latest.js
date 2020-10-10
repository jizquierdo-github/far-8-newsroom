import { connect } from 'react-redux'

//Custom components
import Latest from '../components/Latest'
import {getLatestArticles} from '../actions/actions'

const mapStateToProps = state => ({
  articles:  state.articles,
  hasError:  state.loadingError.hasError,
  error:     state.loadingError.error,
  isLoading: state.loadingInProgress,
  selectedDate: "2020-10-08"
})

const mapDispatchToProps = (dispatch) => (
  {
    onGet: (newsDate) => dispatch(getLatestArticles(newsDate))
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Latest)

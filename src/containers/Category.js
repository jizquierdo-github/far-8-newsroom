import { connect } from 'react-redux'

//Custom components
import {getArticlesByCategory} from '../actions/actions'
import Category from '../components/Category'

const mapStateToProps = state => ({
  articles:  state.articles,
  hasError:  state.loadingError.hasError,
  error:     state.loadingError.error,
  isLoading: state.loadingInProgress
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (categoryId) => dispatch(getArticlesByCategory(categoryId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)

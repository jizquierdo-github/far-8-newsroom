import { connect } from 'react-redux'

//Custom components
import { categories } from "../config/data";
import {getArticlesByCategory} from '../actions/actions'
import Category from '../components/Category'

const mapStateToProps = (state,ownProps) => ({
  articles:  state.articles,
  hasError:  state.loadingError.hasError,
  error:     state.loadingError.error,
  isLoading: state.loadingInProgress,
  selectedCategory: categories.find(category => category.name === ownProps.match.params.categoryName)
})

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onGet: (categoryId) => dispatch(getArticlesByCategory(categoryId))
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)

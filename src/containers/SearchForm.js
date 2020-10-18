import { connect } from 'react-redux'

//Custom components
import {setTextToSearch} from '../actions/actions'
import SearchForm from '../components/SearchForm'

const mapStateToProps = (state,ownProps) => ({
  textToSearch: state.articleData.textToSearch,
})

const mapDispatchToProps = (dispatch) => (
  {
    setTextToSearch: (textToSearch) => dispatch(setTextToSearch(textToSearch))
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)

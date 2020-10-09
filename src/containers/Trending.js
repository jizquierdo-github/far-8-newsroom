import { connect } from 'react-redux'

//Custom components
import Trending from '../components/Trending'

const mapStateToProps = state => ({
  repos: state.repos,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
})

export default connect(
  mapStateToProps,
  null
)(Trending)

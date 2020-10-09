import { connect } from 'react-redux'

//Custom components
import Latest from '../components/Latest'

const mapStateToProps = state => ({
  repos: state.repos,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
})

export default connect(
  mapStateToProps,
  null
)(Latest)

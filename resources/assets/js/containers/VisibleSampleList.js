import { connect } from 'react-redux'
import SampleList from '../components/SampleList'

function mapStateToProps(state) {
  return { sampleList: state.sampleList, isFetching: state.isFetching }
}

const VisibleSampleList = connect(mapStateToProps)(SampleList)

export default VisibleSampleList

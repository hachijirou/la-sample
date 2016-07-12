import React from 'react'
import { connect } from 'react-redux'
import { getSampleList } from '../actions/sampleListAction'

let ShowSampleListForm = ({dispatch}) => {

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(getSampleList())
    }

    return (
        <div>
          <form onSubmit={onSubmit}>
            <button>show</button>
          </form>
        </div>
    )
}

ShowSampleListForm = connect()(ShowSampleListForm)

export default ShowSampleListForm

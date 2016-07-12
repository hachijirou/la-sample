import React, { PropTypes } from 'react'
import MySpinner from './MySpinner'

function SampleList({sampleList}) {
    let output
    if (sampleList.isFetching == true) {
        output = (
           <MySpinner />
        )
    } else {
        output = (
            <div>
              <ul>
                {sampleList.sampleList.map(data =>
                    <li key={data.id}>{data.name}</li>
                )}
              </ul>
            </div>
        )
    }
    return output
}

//SampleList.propTypes = {
//    sampleList: PropTypes.array.isRequired
//}


export default SampleList

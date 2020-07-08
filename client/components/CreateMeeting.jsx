import React from 'react'
import {connect} from 'react-redux'

class CreateMeeting extends React.Component {
    render() {
        return (
            <>
                <h2>Form for creating meetings here</h2>
            </>
        )
    }
}

export default connect()(CreateMeeting)
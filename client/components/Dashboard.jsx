import React from 'react'
import {connect} from 'react-redux'

class Dashboard extends React.Components {

    render () {
        return (
            <div className="container">
                <h2 className="title is-2">Dashboard</h2>
            </div>
        )
    }
}

export default connect()(Dashboard)
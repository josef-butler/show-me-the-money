import React from 'react'
import {connect} from 'react-redux'

class Dashboard extends React.Component {

    handleClick = (e) => {
        if (e.target.name == 'create') {
            //make redirect to <Route path='/create' component={CreateMeeting} />
        } else if (e.target.name == 'graph') {
            //make redirect to <Route path='/graph' component={Graph} />
        } else {
            return null
        }
    }

    render () {
        return (
            <div className="container">
                <h2 className="title is-2">Dashboard</h2>
                <button name='create' onClick={this.handleClick}>CREATE</button>
                <button name='graph' onClick={this.handleClick}>GRAPH</button>
            </div>
        )
    }
}

export default connect()(Dashboard)
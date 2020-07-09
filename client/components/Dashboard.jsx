import React from 'react'
import { connect } from 'react-redux'

import { getMeetings } from '../actions/meetings'

import MeetingEntry from './MeetingEntry'

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(getMeetings())
    }

    handleClick = (e) => {
        if (e.target.name == 'create') {
            this.props.history.push(`/create`)
        } else if (e.target.name == 'graph') {
            this.props.history.push(`/graph`)
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="container">
                <h2 className="title is-2">Dashboard</h2>
                <button name='create' onClick={this.handleClick}>CREATE</button>
                <button name='graph' onClick={this.handleClick}>GRAPH</button>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Meeting name</th>
                            <th>Duration</th>
                            <th>No. attendees</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.meetings.map(meeting => (
                            <MeetingEntry key={`meeting_${meeting.meeting_id}`} id={meeting.meeting_id} meeting={meeting} history={this.props.history}/>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        meetings: globalState.meetings
    }
}

export default connect(mapStateToProps)(Dashboard)
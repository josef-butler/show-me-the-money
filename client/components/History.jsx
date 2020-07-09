import React from "react"
import { connect } from "react-redux"

import { getMeeting } from '../apis/meetings'

export class History extends React.Component {
  state = {
    attendees: []
  }

  componentDidMount = () => {
    const id = this.props.match.params.id
    getMeeting(id)
      .then(attendees => {
        this.setState({
          attendees: attendees
        })
      })
  }

  render() {
    const id = this.props.match.params.id
    const meeting = this.props.meetings.find(meeting => meeting.id == id)
    
    return (
      <div className="container">
        <section>
          <article>
            <h2 className="title is-2">Meeting history</h2>
            <p>{meeting.meeting_name}</p>
            <p>Date: {(new Date(meeting.time)).toLocaleDateString()}</p>
            <p>Duration: {meeting.duration}</p>
            <p>Number of Attendees: {meeting.attendees}</p>
            <ul>
              {this.state.attendees.map(attendee => {
                return <li key={attendee.user_id}>{attendee.first_name} {attendee.last_name}</li>
              })}
            </ul>
            <p>Cost: {meeting.cost}</p>
          </article>
        </section>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    meetings: globalState.meetings
  }
}

export default connect(mapStateToProps)(History)
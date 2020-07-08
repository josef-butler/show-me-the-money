import React from "react"
import { connect } from "react-redux"

import { getMeeting } from '../apis/meetings'

class History extends React.Component {

  state = {
    attendees: []
  }

  componentDidMount = () => {
    const id = this.props.id
    console.log(id)
    console.log(this.state.attendees)
    getMeeting(id)
    .then(this.setState({
      attendees: getMeeting(id)
    }))
    console.log(this.state.attendees)
  }


  render() {
    // Meeting ID is passed down from dashboard
    const { meeting }  = this.props
    return (
      <div className="container">
        <section>
          <article>
            <h2 className="title is-2">Meeting history</h2>
            <p>{meeting.meeting_name}</p>
            <p>Date: {meeting.time}</p>
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

export default connect()(History)

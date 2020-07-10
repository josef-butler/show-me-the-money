import React from "react"
import { connect } from "react-redux"

import { getMeeting } from '../apis/meetings'
import { timeDisplay } from './Meeting'

export class History extends React.Component {
  state = {
    attendees: [],
  }

  componentDidMount = () => {
    const id = this.props.match.params.id
    getMeeting(id).then((attendees) => {
      this.setState({
        attendees: attendees,
      })
    })
  }

  render() {
    const id = this.props.match.params.id
    const meeting = this.props.meetings.find(
      (meeting) => meeting.meeting_id == id
    )
    return (
      <div className="container">
        <section>
          <article>
            <h2 className="title is-2">Meeting history</h2>
            <div className="history">
              <div className="blue-odd">
                <p>
                  <strong>Title:</strong>
                </p>
                <p>{meeting.meeting_name}</p>
              </div>
              <div className="blue-even">
                <p>
                  <strong>Date:</strong>
                </p>
                <p>{new Date(meeting.time).toLocaleDateString()}</p>
              </div>
              <div className="blue-odd">
                <p>
                  <strong>Duration:</strong>
                </p>
                <p> 
                  {timeDisplay(meeting.duration)}s
                </p>
              </div>
              <div className="blue-even">
                <p>
                  <strong>Number of Attendees:</strong>
                </p>
                <p>{meeting.attendees}</p>
              </div>
              <div className="blue-odd">
                <p>
                  <strong>Name of Attendees:</strong>
                </p>
                <ul>
                  {this.state.attendees.map((attendee) => {
                    return (
                      <li key={attendee.user_id}>
                        {attendee.first_name} {attendee.last_name}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="blue-even">
                <p>
                  <strong>Cost: ${Math.round(meeting.cost * 100) / 100}</strong>
                </p>
              </div>
                <p>Minutes: {meeting.minutes}</p>
            </div>
          </article>
        </section>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    meetings: globalState.meetings,
  }
}

export default connect(mapStateToProps)(History)

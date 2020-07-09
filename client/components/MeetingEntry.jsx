import React from 'react'
import {HashRouter as Redirect, Router, Route, Link} from 'react-router-dom'

const MeetingEntry = (props) => {
    return (
        <Link to={`/history/${props.meeting.id}`}>
        <tr>
            <td>{(new Date(props.meeting.time)).toLocaleDateString()}</td>
            <td>{(new Date(props.meeting.time)).toLocaleTimeString()}</td>
            <td>{props.meeting.meeting_name}</td>
            <td>{props.meeting.duration}</td>
            <td>{props.meeting.attendees}</td>
            <td>{`$${props.meeting.cost}`}</td>
            {/* <td><Link to={`/history/${props.id}`}><button type="button">See history</button></Link></td> */}
        </tr>
        </Link>
    )
}

export default MeetingEntry
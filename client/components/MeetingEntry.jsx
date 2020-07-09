import React from 'react'
import {HashRouter as Redirect, Router, Route, Link} from 'react-router-dom'

const MeetingEntry = (props) => {
    function handleClick() {

    }

    return (
        <tr>
            <td>{(new Date(props.meeting.time)).toString().split(' ').slice(0, 4).join(' ')}</td>
            <td>{(new Date(props.meeting.time)).toString().split(' ').slice(4, 5).join(' ')}</td>
            <td>{props.meeting.meeting_name}</td>
            <td>{props.meeting.duration}</td>
            <td>{props.meeting.attendees}</td>
            <td>{`$${props.meeting.cost}`}</td>
            <td><Link to={`/history/${props.id}`}><button type="button">See history</button></Link></td>
        </tr>
    )
}

export default MeetingEntry
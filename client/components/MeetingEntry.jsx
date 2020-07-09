import React from 'react'

const MeetingEntry = (props) => {
    return (
        <tr onClick={() => props.history.push(`/history/${props.meeting.id}`)}>
            <td>{(new Date(props.meeting.time)).toLocaleDateString()}</td>
            <td>{(new Date(props.meeting.time)).toLocaleTimeString()}</td>
            <td>{props.meeting.meeting_name}</td>
            <td>{props.meeting.duration}</td>
            <td>{props.meeting.attendees}</td>
            <td>{`$${props.meeting.cost}`}</td>
        </tr>
    )
}

export default MeetingEntry
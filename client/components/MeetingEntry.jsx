import React from 'react'

import { timeDisplay } from './Meeting'

const MeetingEntry = (props) => {
    return (
        <tr onClick={() => props.history.push(`/history/${props.id}`)}>
            <td>{(new Date(props.meeting.time)).toLocaleDateString()}</td>
            <td>{(new Date(props.meeting.time)).toLocaleTimeString()}</td>
            <td>{props.meeting.meeting_name}</td>
            <td>{timeDisplay(props.meeting.duration)}</td>
            <td>{props.meeting.attendees}</td>
            <td>{`$${Math.round(props.meeting.cost * 100) / 100}`}</td>
        </tr>
    )
}

export default MeetingEntry
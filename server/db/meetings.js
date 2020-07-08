const connection = require('./connection')

function saveMeeting (meeting, db = connection) {
    return db('meetings').insert(meeting)
}

function getMeetingHistory (user, db = connection) {
    console.log("data is ", user.id)
    return db('meetings')
    .join("attendees", "meetings.id", "attendees.meeting_id")
    .join("users", "users.id", "attendees.user_id")
    .where("user_id", user.id)
}   

function getMeetingAttendees (meeting, db = connection) {
    console.log("data is ", meeting)
    return db('users')
    .join("attendees", "users.id", "attendees.user_id")
    .join("meetings", "meetings.id", "attendees.meeting_id")
    .where("meeting_id", meeting)
} 

module.exports = {
    saveMeeting,
    getMeetingHistory,
    getMeetingAttendees,
}
const connection = require('./connection')

function saveMeeting (meeting, db = connection) {
    return db('meetings')
    .insert(meeting)
    .then(ids => ids[0])
}

function getMeetingHistory (user, db = connection) {
    console.log("data is ", user.id)
    return db('meetings')
    // get the attendees for a specific meeting
    .join("attendees", "meetings.id", "attendees.meeting_id")
    .join("users", "users.id", "attendees.user_id")
    .orderBy('time', 'desc')
    .where("user_id", user.id)
    
}   

function getMeetingAttendees (meeting, db = connection) {
    console.log("data is ", meeting)
    return db('users')
    .join("attendees", "users.id", "attendees.user_id")
    .join("meetings", "meetings.id", "attendees.meeting_id")
    .where("meeting_id", meeting)
} 

function getAllMeetings (db = connection) {
return db("meetings")
.select()
.orderBy('time', 'asc')
}

module.exports = {
    saveMeeting,
    getMeetingHistory,
    getMeetingAttendees,
    getAllMeetings,
}
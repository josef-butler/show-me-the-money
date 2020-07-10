const connection = require('./connection')

function saveAttendees (data, db = connection) {
    return db('attendees').insert(data)
    .then(ids => ids[0])
}

module.exports = {
    saveAttendees
}
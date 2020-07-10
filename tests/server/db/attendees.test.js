const testEnv = require("../setup-db")
const attendees = require('../../../server/db/attendees')

let testDb = null

beforeEach(() => {
    testDb = testEnv.getTestDb()
    return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test("saveAttendees adds a new attendee to the join db table", () => {
    const newAttendee = { meeting_id: 4, user_id: 1 }
    const expected = 7

    return attendees.saveAttendees(newAttendee, testDb).then((newAttendeeId) => {
        console.log(newAttendeeId)
        const actual = newAttendeeId
        expect(actual).toBe(expected)
    })
})
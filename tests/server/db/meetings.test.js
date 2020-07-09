const testEnv = require ('../setup-db')
const db = require ('../../../server/db/meetings')
const { test } = require('../../../knexfile')

let testDb  = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('saveMeeting adds a meeting to the meetings db', () => {
  const expected = 2
  const newMeeting = {
    meeting_name: "Nouveau meeting",
    time: 1594283347000,
    duration: 30,
    attendees: 2,
    cost: 40000
  }

  return db.saveMeeting(newMeeting, testDb)
    .then(newMeetingId => {
      const actual = newMeetingId
      expect(actual).toBe(expected)
    })
})

// test('getMeetingHistory returns a join of meetings and attendees', () => {
//   // Arrange

//   // Act

//   // Assert
  
// })

// test('getMeetingAttendees returns a join of users and meetings', () => {
//   // Arrange

//   // Act

//   // Assert
  
// })

// test('getAllMeetings returns the meetings table', () => {
//   // Arrange
//   const expected = 
//   // Act

//   // Assert
  
// })
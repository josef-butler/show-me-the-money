const testEnv = require ('../setup-db')
const db = require ('../../../server/db/meetings')

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
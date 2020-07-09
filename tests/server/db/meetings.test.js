const testEnv = require("../setup-db")
const meetings = require("../../../server/db/meetings")

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test("saveMeeting adds a meeting to the meetings db", () => {
  const expected = 4
  const newMeeting = {
    meeting_name: "Nouveau meeting",
    time: 1594283347000,
    duration: 30,
    attendees: 2,
    cost: 40000,
  }

  return meetings.saveMeeting(newMeeting, testDb).then((newMeetingId) => {
    const actual = newMeetingId
    expect(actual).toBe(expected)
  })
})

test("getMeetingHistory returns an array containing meetings a given user has attended", () => {
  const userId = { id: 2 }
  const expected = [
    {
      id: 2,
      meeting_name: "Meeting all the puppies",
      time: 1586247310000,
      duration: 84,
      attendees: 12,
      cost: 1486,
      user_id: 2,
      meeting_id: 2,
      username: "casperTheGhost",
      hash: "srhljsorhg",
      first_name: "Casper",
      last_name: "Coolio",
      hourly_wage: 120,
      created_at: "2020-07-07 07:51:02",
      updated_at: "2020-07-07 07:51:03",
    },
    {
      id: 2,
      meeting_name: "Quarterly review",
      time: 1586213450000,
      duration: 91,
      attendees: 8,
      cost: 145135,
      user_id: 2,
      meeting_id: 3,
      username: "casperTheGhost",
      hash: "srhljsorhg",
      first_name: "Casper",
      last_name: "Coolio",
      hourly_wage: 120,
      created_at: "2020-07-07 07:51:02",
      updated_at: "2020-07-07 07:51:03",
    },
  ]

  return meetings.getMeetingHistory(userId, testDb).then((result) => {
    const actual = result
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
})

test("getMeetingHistory does not return an array containing a meeting the user has not attended", () => {
  const userId = { id: 2 }
  const notExpected = [
    {
      id: 2,
      meeting_name: "Productive meeting",
      time: 1586187310000,
      duration: 42,
      attendees: 3,
      cost: 475,
      user_id: 2,
      meeting_id: 1,
      username: "casperTheGhost",
      hash: "srhljsorhg",
      first_name: "Casper",
      last_name: "Coolio",
      hourly_wage: 120,
      created_at: "2020-07-07 07:51:02",
      updated_at: "2020-07-07 07:51:03",
    }
  ]

  return meetings.getMeetingHistory(userId, testDb).then((result) => {
    const actual = result
    expect(actual).toEqual(expect.not.arrayContaining(notExpected))
  })
})


test('getMeetingAttendees returns attendees of a given meeting', () => {
  const meetingId = 2
  const expected = [
    {
      attendees: 12,
      cost: 1486,
      created_at: "2020-07-09 07:51:02",
      duration: 84,
      first_name: "Jerry",
      hash: "jioaefjaef",
      hourly_wage: 250,
      id: 2,
      last_name: "Jasper",
      meeting_id: 2,
      meeting_name: "Meeting all the puppies",
      time: 1586247310000,
      updated_at: "2020-07-09 07:51:03",
      user_id: 1,
      username: "jerryJ"
    },
    {
      attendees: 12,
      cost: 1486,
      created_at: "2020-07-07 07:51:02",
      duration: 84,
      first_name: "Casper",
      hash: "srhljsorhg",
      hourly_wage: 120,
      id: 2,
      last_name: "Coolio",
      meeting_id: 2,
      meeting_name: "Meeting all the puppies",
      time: 1586247310000,
      updated_at: "2020-07-07 07:51:03",
      user_id: 2,
      username: "casperTheGhost"
    },
  ]

  return meetings.getMeetingAttendees(meetingId, testDb).then((result) => {
    const actual = result
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
})

test("getAllMeetings returns an existing meeting", () => {
  const expected = [
    {
      id: 2,
      meeting_name: "Meeting all the puppies",
      time: 1586247310000,
      duration: 84,
      attendees: 12,
      cost: 1486,
    },
  ]

  return meetings.getAllMeetings(testDb).then((result) => {
    const actual = result
    expect(actual).toEqual(expect.arrayContaining(expected))
  })
})

test("getAllMeetings does not find a non-existing meeting", () => {
  const notExpected = [
    {
      id: 500,
      meeting_name: "A fake meeting",
      time: 1584547310000,
      duration: 200,
      attendees: 10,
      cost: 13890,
    },
  ]

  return meetings.getAllMeetings(testDb).then((result) => {
    const actual = result
    expect(actual).toEqual(expect.not.arrayContaining(notExpected))
  })
})

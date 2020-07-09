const server = require('../../server/server')

test('Placeholder test', () => {
  expect(true).toBeTruthy()
})

jest.mock('../db', () => ({
  saveMeeting: (id) => Promise.resolve([
    {
      id: 1,
      meeting_name: "Productive meeting",
      time: 1586187310000,
      duration: 42,
      attendees: 3,
      cost: 475
    }
  ]),

  // getMeetingHistory: (user) => Promise.resolve([
  //   { id: 1,
  //     meeting_name: "Productive meeting",
  //     time: 1586187310000,
  //     duration: 42,
  //     attendees: 3,
  //     cost: 475,
  //     user_id: 1,
  //     meeting_id: 1
  //   },
  //   {
  //     id: 2,
  //     meeting_name: "Meeting all the puppies",
  //     time: 1586247310000,
  //     duration: 84,
  //     attendees: 12,
  //     cost: 1486
  //   }
  // ]),

  // getMeetingAttendees: (meeting) => Promise.resolve([
  //   { id: 1,
  //     meeting_name: "Productive meeting",
  //     time: 1586187310000,
  //     duration: 42,
  //     attendees: 3,
  //     cost: 475
  //   },
  //   {
  //     id: 2,
  //     meeting_name: "Meeting all the puppies",
  //     time: 1586247310000,
  //     duration: 84,
  //     attendees: 12,
  //     cost: 1486
  //   }
  // ]),

  getAllMeetings: () => Promise.resolve([
    { id: 1,
      meeting_name: "Productive meeting",
      time: 1586187310000,
      duration: 42,
      attendees: 3,
      cost: 475
    },
    {
      id: 2,
      meeting_name: "Meeting all the puppies",
      time: 1586247310000,
      duration: 84,
      attendees: 12,
      cost: 1486
    }
  ])
}))
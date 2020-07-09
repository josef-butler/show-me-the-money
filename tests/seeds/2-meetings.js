exports.seed = function (knex, Promise) {
  return knex('meetings').insert([
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
    },
    {
      id: 3,
      meeting_name: "Quarterly review",
      time: 1586213450000,
      duration: 91,
      attendees: 8,
      cost: 145135
    }
  ])
}
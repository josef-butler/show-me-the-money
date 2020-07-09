exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("meetings")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("meetings").insert([
        {
          id: 1,
          meeting_name: "Bananas",
          time: 1591575018000,
          duration: 58,
          attendees: 5,
          cost: 0.5,
        },
        {
          id: 2,
          meeting_name: "Salt",
          time: 1583109018000,
          duration: 58,
          attendees: 7,
          cost: 0.6,
        },
        {
          id: 3,
          meeting_name: "Red",
          time: 1583107818000,
          duration: 55,
          attendees: 6,
          cost: 1.5,
        },
        {
          id: 4,
          meeting_name: "Happy",
          time: 1594254200000,
          duration: 65,
          attendees: 20,
          cost: 2.5,
        },
        {
          id: 5,
          meeting_name: "Dingo",
          time: 1583107818000,
          duration: 34,
          attendees: 11,
          cost: 25.5,
        },
      ])
    })
}

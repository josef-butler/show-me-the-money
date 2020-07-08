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
          time: new Date(),
          duration: 5,
          attendees: 5,
          cost: 0.5,
        },
        {
          id: 2,
          meeting_name: "Salt",
          time: new Date(),
          duration: 6,
          attendees: 7,
          cost: 0.6,
        },
        {
          id: 3,
          meeting_name: "Red",
          time: new Date(),
          duration: 55,
          attendees: 6,
          cost: 1.5,
        },
        {
          id: 4,
          meeting_name: "Happy",
          time: new Date(),
          duration: 65,
          attendees: 20,
          cost: 2.5,
        },
        {
          id: 5,
          meeting_name: "Dingo",
          time: new Date(),
          duration: 9,
          attendees: 11,
          cost: 25.5,
        },
      ])
    })
}

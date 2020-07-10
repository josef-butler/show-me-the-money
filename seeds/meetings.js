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
          time: new Date(1591575216000),
          duration: 58,
          attendees: 5,
          cost: 450,
        },
        {
          id: 2,
          meeting_name: "Salt",
          time: new Date(1583109522000),
          duration: 58,
          attendees: 7,
          cost: 360,
        },
        {
          id: 3,
          meeting_name: "Red",
          time: new Date(1585147888000),
          duration: 55,
          attendees: 6,
          cost: 400,
        },
        {
          id: 4,
          meeting_name: "Happy",
          time: new Date(1594254200000),
          duration: 65,
          attendees: 20,
          cost: 400,
        },
        {
          id: 5,
          meeting_name: "Dingo",
          time: new Date(1586187310000),
          duration: 34,
          attendees: 11,
          cost: 380,
        },
        {
          id: 6,
          meeting_name: "banjo",
          time: new Date(1606187310000),
          duration: 34,
          attendees: 11,
          cost: 260,
        },
        {
          id: 7,
          meeting_name: "boo!",
          time: new Date(1626187310000),
          duration: 34,
          attendees: 11,
          cost: 210,
        },
      ])
    })
}

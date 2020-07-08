exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("attendees")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("attendees").insert([
        { id: 1, user_id: 1, meeting_id: 1 },
        { id: 2, user_id: 2, meeting_id: 2 },
        { id: 3, user_id: 3, meeting_id: 3 },
        { id: 4, user_id: 4, meeting_id: 4 },
        { id: 5, user_id: 4, meeting_id: 5 },
        { id: 6, user_id: 3, meeting_id: 1 },
        { id: 7, user_id: 5, meeting_id: 2 },
        { id: 8, user_id: 5, meeting_id: 3 },
        { id: 9, user_id: 2, meeting_id: 4 },
        { id: 10, user_id: 1, meeting_id: 5 },
      ])
    })
}

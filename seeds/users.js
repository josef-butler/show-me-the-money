const { generateHash } = require("authenticare/server")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(
        [
          {
            id: 1,
            username: "admin",
            password: "Krang",
            first_name: "Admin",
            last_name: "Istrator",
            hourly_wage: 300,
          },
          {
            id: 2,
            username: "monkey",
            password: "Ape",
            first_name: "King",
            last_name: "Kong",
            hourly_wage: 1,
          },
          {
            id: 3,
            username: "plane",
            password: "Spitfire",
            first_name: "Speed",
            last_name: "Zoom",
            hourly_wage: 500,
          },
          {
            id: 4,
            username: "shire",
            password: "Ring",
            first_name: "Frodo",
            last_name: "Baggins",
            hourly_wage: 1000,
          },
          {
            id: 5,
            username: "magic",
            password: "Chosen",
            first_name: "Harry",
            last_name: "Weasly",
            hourly_wage: 666,
          },
        ].map((user) => {
          return generateHash(user.password).then((hash) => {
            user.hash = hash
            delete user.password
            return user
          })
        })
      ).then((users) => {
        return knex("users").insert(users)
      })
    })
}

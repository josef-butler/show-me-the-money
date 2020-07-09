exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1,
      username: "jerryJ",
      hash: "jioaefjaef",
      first_name: "Jerry",
      last_name: "Jasper",
      hourly_wage: 250,
      created_at: "2020-07-09 07:51:02",
      updated_at: "2020-07-09 07:51:03"
    },
    { id: 2,
      username: "casperTheGhost",
      hash: "srhljsorhg",
      first_name: "Casper",
      last_name: "Coolio",
      hourly_wage: 120,
      created_at: "2020-07-07 07:51:02",
      updated_at: "2020-07-07 07:51:03"
    },
    { id: 3,
      username: "mitre10",
      hash: "oairgmioajrgarg",
      first_name: "Mitre",
      last_name: "Ten",
      hourly_wage: 134,
      created_at: "2020-05-01 07:51:02",
      updated_at: "2020-05-01 07:51:03"
    }
  ])
}
const testEnv = require("../setup-db")
const users = require("../../../server/db/users")

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test("createUser inserts a single user", () => {
  let expected = 1

  return users
    .createUser(
      {
        username: "new_user",
        password: "s3cr3t",
        first_name: "New",
        last_name: "User",
      },
      testDb
    )
    .then((ids) => {
      let actual = ids.length
      expect(actual).toEqual(expected)
    })
})

test("userExists finds existing user", () => {
  let expected = true

  return users.userExists("jerryJ", testDb).then((result) => {
    let actual = result

    expect(actual).toEqual(expected)
  })
})

test("userExists does not find non-existant user", () => {
  let expected = false

  return users.userExists("not-a-username", testDb).then((result) => {
    let actual = result

    expect(actual).toEqual(expected)
  })
})

test("getUserByUsername finds existing user", () => {
  let expected = "Casper"

  return users.getUserByUsername("casperTheGhost", testDb).then((user) => {
    let actual = user.first_name

    expect(actual).toEqual(expected)
  })
})

test("getUsers returns all users from users table", () => {
  const expected = [
    {
      id: 1,
      username: "jerryJ",
      hash: "jioaefjaef",
      first_name: "Jerry",
      last_name: "Jasper",
      hourly_wage: 250,
      created_at: "2020-07-09 07:51:02",
      updated_at: "2020-07-09 07:51:03"
    },
    {
      id: 2,
      username: "casperTheGhost",
      hash: "srhljsorhg",
      first_name: "Casper",
      last_name: "Coolio",
      hourly_wage: 120,
      created_at: "2020-07-07 07:51:02",
      updated_at: "2020-07-07 07:51:03"
    },
    {
      id: 3,
      username: "mitre10",
      hash: "oairgmioajrgarg",
      first_name: "Mitre",
      last_name: "Ten",
      hourly_wage: 134,
      created_at: "2020-05-01 07:51:02",
      updated_at: "2020-05-01 07:51:03"
    }
  ]

  return users.getUsers(testDb)
    .then((users) => {
      let actual = users

      expect(actual).toEqual(expect.arrayContaining(expected))
    })
})
const environments = {
  development: "http://localhost:3000/api/v1",
  test: "http://localhost:3333/api/v1",
  production: "https://show-me-the-monaay.herokuapp.com/api/v1",
  integration: "",
  deployment: "",
  build: "",
}

const env = process.env.NODE_ENV || "development"

console.log("setting the config to", process.env.NODE_ENV, environments[env])

export const baseApiUrl = environments["production"]

import express from "express"
import { faker } from "@faker-js/faker"

const app = express()
app.use(express.json())

const port = 8000

const createUser = () => {
  const newUser = {
    "id": faker.database.mongodbObjectId(),
    "firstName": faker.person.firstName(),
    "lastName": faker.person.lastName(),
    "number": faker.phone.number(),
    "email": faker.internet.email(),
    "password": faker.internet.password()
  }
  return newUser

}

const createCompany = () => {
  const newCompany = {
    "id": faker.database.mongodbObjectId(),
    "name": faker.company.name(),
    "address": {
      "street": faker.location.street(),
      "city": faker.location.city(),
      "state": faker.location.state(),
      "zipCode": faker.location.zipCode(),
      "contry": faker.location.country()
    }
  }
  return newCompany

}

app.get("/api/user/new", (req, res) => {
  let user = createUser()
  res.json(user)
})

app.get("/api/company/new", (req, res) => {
  let company = createCompany()
  res.json(company)
})

app.get("/api/user/company", (req, res) => {
  let user = createUser()
  let company = createCompany()
  let combo = [{ "user": user }, { "company": company }]
  res.json(combo)
})

app.listen(port, () => console.log(`Listening on port: ${port}`))

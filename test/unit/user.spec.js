'use strict'

const { test , trait, before } = use('Test/Suite')('User Registration')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('can register a new user', async ({ client }) => {
  const newUser = {
    "username": "Test@User",
    "email": "teste@teste.com",
    "password": "teste123"
  }

  const response = await client
    .post('/users')
    .send(newUser)
    .end()

  delete newUser.password;

  response.assertStatus(200) // fails here with a 500 status
  response.assertJSONSubset(newUser)
})

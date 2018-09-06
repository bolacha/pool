'use strict'

const { test , trait, before } = use('Test/Suite')('Sessions')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('can login with a token', async ({ client }) => {

  const user = {
    "username": "Test@User",
    "email": "teste@teste.com",
    "password": "teste123"
  };

  await client
    .post('/users')
    .send(user)
    .end()

  const response = await client
    .post('/sessions')
    .send(user)
    .end()

  response.assertStatus(200) // fails here with a 500 status
})

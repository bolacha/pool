'use strict'

const { test , trait, before } = use('Test/Suite')('Pools')
const Pool = use("App/Models/Pool")
const User = use("App/Models/User")

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('can get all the pools', async ({ client, assert }) => {

  let user = await User.create({
    "username": "Test@User",
    "email": "teste@teste.com",
    "password": "teste123"
  });

  await Pool.create({
    "name": "Test@User",
    "user_id": user.id
  });

  const response = await client
    .get('/pool')
    .end()

  const { body } = response

  response.assertStatus(200) // fails here with a 500 statu

  assert.notEqual(body.length, 0)
})

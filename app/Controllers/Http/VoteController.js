'use strict'

const Option = use('App/Models/Option')
const Pool = use('App/Models/Pool')
const Vote = use('App/Models/Vote')

/**
 * Resourceful controller for interacting with votes
 */
class VoteController {

  async index ({ request, response, view }) {
  }

  async store ({auth, params, request, response }) {

    const pool = await Pool.findOrFail(params.id)
    await pool.load('options')
    await pool.load('votes')

    const data = request.only(['option'])

    if (pool.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    if(pool.toJSON().options.map((e) => e.id).indexOf(data.option) === -1) {
      return response.status(400).send({ error: `Option ${data.option} not available` })
    }

    if(pool.toJSON().votes.map((e) => e.user_id).indexOf(auth.user.id) != -1) {
      return response.status(400).send({ error: `You already voted for this option` })
    }

    return await Vote.create({ pool_id: pool.id, user_id: auth.user.id, option_id: data.option})
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = VoteController

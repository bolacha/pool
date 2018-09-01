'use strict'

const Option = use('App/Models/Option')
const Pool = use('App/Models/Pool')
const Vote = use('App/Models/Vote')

/**
 * Resourceful controller for interacting with votes
 */
class VoteController {

  /**
  * @swagger
  * /vote/{pool_id}:
  *   post:
  *     tags:
  *       - Vote
  *     summary: Vote for a Option in a Pool
  *     parameters:
  *       - in: path
  *         name: pool_id
  *         description: ID of the Pool
  *         required: true
  *         schema:
  *           type: integer
  *         type: number
  *       - in: "body"
  *         name: "body"
  *         description: "Pool object"
  *         required: true
  *         schema:
  *           $ref: "#/definitions/Vote"
  *       - name: Authorization
  *         in: header
  *         description: Bearer XXXXXXXX
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Vote COnfirmed
  */

  async store ({auth, params, request, response }) {

    const pool = await Pool.findOrFail(params.id)
    await pool.load('options')
    await pool.load('votes')

    const data = request.only(['option'])

    if (!pool.open) {
      return response.status(400).send({ error: 'Pool Closed' })
    }

    if (pool.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    if(pool.toJSON().options.map((e) => e.id).indexOf(data.option) === -1) {
      return response.status(400).send({ error: `Option ${data.option} not available` })
    }

    const similar_votes = pool.toJSON().votes.map((e) => ({ user_id : e.user_id, option_id : e.option_id })).filter(e => e.user_id === auth.user.id && e.option_id === data.option);

    if(similar_votes.length > 0) {
      return response.status(400).send({ error: `You already voted for this option` })
    }

    return await Vote.create({ pool_id: pool.id, user_id: auth.user.id, option_id: data.option})
  }


  /**
  * @swagger
  * /vote/{pool_id}:
  *   get:
  *     tags:
  *       - Vote
  *     summary: Get Votes for a Pool
  *     parameters:
  *       - in: path
  *         name: pool_id
  *         description: ID of the Pool
  *         required: true
  *         schema:
  *           type: integer
  *         type: number
  *       - name: Authorization
  *         in: header
  *         description: Bearer XXXXXXXX
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Pool Closed
  */

  async show ({ auth, params, request, response, view }) {

    const pool = await Pool.findOrFail(params.id)
    await pool.load('votes')

    const data = request.only(['option'])

    if (pool.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    return pool.toJSON().votes;
  }
}

module.exports = VoteController

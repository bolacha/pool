'use strict'

const Pool = use('App/Models/Pool')

/**
 * Resourceful controller for interacting with pools
 */
class PoolController {
  /**
   * Show a list of all pools.
   * GET pools
   */
  async index ({ request, response, view }) {

    const pools = Pool.all()

    return pools
  }

  /**
   * Create/save a new pool.
   * POST pools
   */
  async store ({auth, request, response }) {

    const { id } = auth.user

    const data = request.only(["name"]);

    const pool = await Pool.create({ ...data , user_id: id })

    await pool.load('user')

    return pool;
  }

  /**
   * Display a single pool.
   * GET pools/:id
   */
  async show ({ params, request, response, view }) {

    const pool = await Pool.findOrFail(params.id)

    await pool.load('votes')
    await pool.load('options')
    await pool.load('user')

    return pool
  }

  /**
   * Render a form to update an existing pool.
   * GET pools/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update pool details.
   * PUT or PATCH pools/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a pool with id.
   * DELETE pools/:id
   */
  async destroy ({ params, auth, response }) {

    const pool = await Pool.findOrFail(params.id)

    if (pool.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    await pool.delete()
  }
}

module.exports = PoolController

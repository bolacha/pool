'use strict'

const Pool = use('App/Models/Pool')
const Option = use('App/Models/Option')

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

    const data = request.only(["name", "options"]);

    const pool = await Pool.create({ name: data.name , user_id: id })

    for(let index in data.options ) {
      await Option.create({ name : `${ data.options[index] }` , pool_id : pool.id });
    };

    await pool.load('options')

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

    pool.open = false;

    await pool.save();
  }
}

module.exports = PoolController

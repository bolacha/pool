'use strict'

const Pool = use('App/Models/Pool')
const Option = use('App/Models/Option')

/**
 * Resourceful controller for interacting with pools
 */
class PoolController {


  /**
  * @swagger
  * /pool:
  *   get:
  *     tags:
  *       - Pool
  *     summary: Get all Pools
  *     responses:
  *       200:
  *         description: Get all Pools
  */

  async index ({ request, response, view }) {

    const pools = Pool.all()

    return pools
  }

/**
  * @swagger
  * /pool:
  *   post:
  *     tags:
  *       - Pool
  *     summary: Create a Pool
  *     parameters:
  *       - in: "body"
  *         name: "body"
  *         description: "Pool object"
  *         required: true
  *         schema:
  *           $ref: "#/definitions/Pool"
  *       - name: Authorization
  *         in: header
  *         description: Bearer XXXXXXXX
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Send hello message
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
  * @swagger
  * /pool:
  *   delete:
  *     tags:
  *       - Pool
  *     summary: Close a Pool
  *     parameters:
  *       - name: pool_id
  *         description: ID of the Pool
  *         in: query
  *         required: true
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

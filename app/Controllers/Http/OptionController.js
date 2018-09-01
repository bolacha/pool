'use strict'

const Option = use('App/Models/Option')
const Pool = use('App/Models/Pool')


/**
 * Resourceful controller for interacting with options
 */
class OptionController {
  /**
   * Show a list of all options.
   * GET options
   */
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new option.
   * POST options
   */
  async store ({auth, params, request, response }) {

    const pool = await Pool.findOrFail(params.id)

    if (pool.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    if (!pool.open) {
      return response.status(400).send({ error: 'Pool Closed' })
    }

    const data = request.only(['name'])

    const option = await Option.create({ ...data, pool_id: pool.id})

    return option
  }

  /**
   * Display a single option.
   * GET options/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing option.
   * GET options/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update option details.
   * PUT or PATCH options/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a option with id.
   * DELETE options/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = OptionController

'use strict'

const Option = use('App/Models/Option')
const Pool = use('App/Models/Pool')


/**
 * Resourceful controller for interacting with options
 */
class OptionController {
  /**
   * Create/save a new option.
   * POST options
   */
  async store ({auth, params, request, response }) {

    const pool = await Pool.findOrFail(params.id)

    if (!pool.open) {
      return response.status(400).send({ error: 'Pool Closed' })
    }

    const data = request.only(['name'])

    const option = await Option.create({ ...data, pool_id: pool.id})

    return option
  }
}

module.exports = OptionController

'use strict'

const Pool = use('App/Models/Pool');

class PoolOwner {
  async handle ({ response , params, auth }, next) {

    const pool = await Pool.findOrFail(params.id)

    if (pool.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
    await next()
  }
}

module.exports = PoolOwner

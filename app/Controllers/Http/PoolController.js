'use strict'

/**
 * Resourceful controller for interacting with pools
 */
class PoolController {
  /**
   * Show a list of all pools.
   * GET pools
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new pool.
   * GET pools/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new pool.
   * POST pools
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single pool.
   * GET pools/:id
   */
  async show ({ params, request, response, view }) {
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
  async destroy ({ params, request, response }) {
  }
}

module.exports = PoolController

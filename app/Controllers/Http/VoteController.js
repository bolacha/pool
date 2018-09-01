'use strict'

/**
 * Resourceful controller for interacting with votes
 */
class VoteController {
  /**
   * Show a list of all votes.
   * GET votes
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new vote.
   * GET votes/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new vote.
   * POST votes
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single vote.
   * GET votes/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing vote.
   * GET votes/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update vote details.
   * PUT or PATCH votes/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a vote with id.
   * DELETE votes/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = VoteController

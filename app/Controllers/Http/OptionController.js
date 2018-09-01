'use strict'

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
   * Render a form to be used for creating a new option.
   * GET options/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new option.
   * POST options
   */
  async store ({ request, response }) {
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

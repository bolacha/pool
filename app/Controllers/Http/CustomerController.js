'use strict'

/**
 * Resourceful controller for interacting with customers
 */
class CustomerController {
  /**
   * Show a list of all customers.
   * GET customers
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new customer.
   * GET customers/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new customer.
   * POST customers
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single customer.
   * GET customers/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing customer.
   * GET customers/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update customer details.
   * PUT or PATCH customers/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a customer with id.
   * DELETE customers/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CustomerController

'use strict'

const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('email')
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema

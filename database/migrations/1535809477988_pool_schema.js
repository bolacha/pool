'use strict'

const Schema = use('Schema')

class PoolSchema extends Schema {
  up() {
    this.create('pools', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.integer('customer_id').unsigned()
      table.foreign('customer_id').references('customers.id').onDelete('cascade')
    })
  }

  down() {
    this.drop('pools')
  }
}

module.exports = PoolSchema

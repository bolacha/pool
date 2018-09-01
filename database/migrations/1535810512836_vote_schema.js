'use strict'

const Schema = use('Schema')

class VoteSchema extends Schema {
  up () {
    this.create('votes', (table) => {
      table.increments()
      table.timestamps()
      table.integer('customer_id').unsigned()
      table.foreign('customer_id').references('customers.id').onDelete('cascade')
      table.integer('pool_id').unsigned()
      table.foreign('pool_id').references('pools.id').onDelete('cascade')
      table.integer('option_id').unsigned()
      table.foreign('option_id').references('options.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('votes')
  }
}

module.exports = VoteSchema

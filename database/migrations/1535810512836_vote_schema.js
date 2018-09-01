'use strict'

const Schema = use('Schema')

class VoteSchema extends Schema {
  up () {
    this.create('votes', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id').onDelete('cascade')
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

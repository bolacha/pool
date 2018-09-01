'use strict'

const Schema = use('Schema')

class PoolSchema extends Schema {
  up() {
    this.create('pools', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id').onDelete('cascade')
    })
  }

  down() {
    this.drop('pools')
  }
}

module.exports = PoolSchema

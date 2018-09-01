'use strict'

const Schema = use('Schema')

class OptionSchema extends Schema {
  up () {
    this.create('options', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.integer('pool_id').unsigned()
      table.foreign('pool_id').references('pools.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('options')
  }
}

module.exports = OptionSchema

'use strict'

const Model = use('Model')

class Option extends Model {

  pool() {
    return this.belongTo('App/Models/Pool')
  }

}

module.exports = Option

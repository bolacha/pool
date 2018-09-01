'use strict'

const Model = use('Model')

class Pool extends Model {

  user() {
    return this.belongsTo('App/Models/User')
  }

  options() {
    return this.hasMany('App/Models/Option')
  }

  votes() {
    return this.hasMany('App/Models/Vote')
  }

}

module.exports = Pool

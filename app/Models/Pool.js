'use strict'

const Model = use('Model')


/**
*  @swagger
*  definitions:
*    Pool:
*      type: object
*      properties:
*        name:
*          type: string
*        options:
*          type: array
*      required:
*        - name
*/


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

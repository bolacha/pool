'use strict'

const Model = use('Model')


/**
*  @swagger
*  definitions:
*    Vote:
*      type: object
*      properties:
*        option:
*          type: string
*      required:
*        - option
*/

class Vote extends Model {

  user() {
    return this.belongTo('App/Models/User')
  }

  pool() {
    return this.belongTo('App/Models/Pool')
  }

  option() {
    return this.belongTo('App/Models/Option')
  }

}

module.exports = Vote

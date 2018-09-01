'use strict'

const Model = use('Model')
const Hash = use('Hash')

/**
*  @swagger
*  definitions:
*    User:
*      type: object
*      properties:
*        username:
*          type: string
*        email:
*          type: string
*        password:
*          type: string
*      required:
*        - username
*        - email
*        - password
*/

/**
*  @swagger
*  definitions:
*    Authentication:
*      type: object
*      properties:
*        email:
*          type: string
*        password:
*          type: string
*      required:
*        - email
*        - password
*/

/**
*  @swagger
*  definitions:
*    AuthenticationReturn:
*    type: object
*    title: The Root Schema
*    required:
*    - type
*    - token
*    - refreshToken
*    properties:
*      type:
*        $id: '#/properties/type'
*        type: string
*        title: The Type Schema
*        default: ''
*        examples:
*        - bearer
*        pattern: ^(.*)$
*      token:
*        $id: '#/properties/token'
*        type: string
*        title: The Token Schema
*        default: ''
*        examples:
*        - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTUzNTgzMDM1Nn0.xlz-B3SOoJTbKdjZ8-m-Bs3fpQ_iGsfU0J9oto90QVI
*        pattern: ^(.*)$
*      refreshToken:
*        $id: '#/properties/refreshToken'
*        type: 'null'
*        title: The Refreshtoken Schema
*        default: null
*        examples:
*        - null
*/

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  pools () {
    return this.hasMany('App/Models/Pool')
  }

  votes () {
    return this.hasMany('App/Models/Vote')
  }
}

module.exports = User

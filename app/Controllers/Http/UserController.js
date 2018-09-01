"use strict"

const User = use("App/Models/User")

class UserController {

  /**
  * @swagger
  * /users:
  *   post:
  *     tags:
  *       - User
  *     summary: Create an User
  *     parameters:
  *       - email: email
  *         description: Email of the user
  *         in: body
  *         required: false
  *         type: string
  *       - email: password
  *         description: Password of the user
  *         in: body
  *         required: false
  *         type: string
  *       - email: username
  *         description: Password of the user
  *         in: body
  *         required: false
  *         type: string
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  */

  async store ({ request }) {
    const data = request.only(["username", "email", "password"])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController

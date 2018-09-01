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
  *       - in: "body"
  *         name: "body"
  *         description: "User object"
  *         required: true
  *         schema:
  *           $ref: "#/definitions/User"
  *     responses:
  *       200:
  *         description: Send hello message
  */
  async store ({ request }) {
    const data = request.only(["username", "email", "password"])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController

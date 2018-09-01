'use strict'

class SessionController {
/**
  * @swagger
  * /sessions:
  *   post:
  *     tags:
  *       - Authentication
  *     summary: Authenticate an User
  *     parameters:
  *       - in: "body"
  *         name: "body"
  *         description: "User object"
  *         required: true
  *         schema:
  *           $ref: "#/definitions/Authentication"
  *     responses:
  *       200:
  *         description: Token
  */

  async store ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController

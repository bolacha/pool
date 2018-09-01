'use strict'

class SessionController {

  /**
  * @swagger
  * /sessions:
  *   post:
  *     tags:
  *       - Authentication
  *     summary: Authenticate the User
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
  *     responses:
  *       200:
  *         description: Send hello message
  */

  async store ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController

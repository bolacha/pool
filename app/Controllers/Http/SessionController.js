'use strict'

class SessionController {
/**
 *
 * components:
 *  securitySchemes:
 *    bearerAuth:            # arbitrary name for the security scheme
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *
  * @swagger
  * components:
  *  securitySchemes:
  *    bearerAuth:            # arbitrary name for the security scheme
  *      type: http
  *      scheme: bearer
  *      bearerFormat: JWT
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
  *           $ref: "#/definitions/AuthenticationReturn"
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

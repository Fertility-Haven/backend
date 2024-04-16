import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { CONFIG } from '../../configs'
import { UserModel, type UserAttributes } from '../../models/user'

export const updateMyProfile = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as UserAttributes
  const emptyField = requestChecker({
    requireList: ['x-user-id'],
    requestData: req.headers
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    if ('userPassword' in requestBody) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      requestBody.userPassword = require('crypto')
        .createHash('sha1')
        .update(requestBody.userPassword + CONFIG.secret.passwordEncryption)
        .digest('hex')
    }

    const newData: UserAttributes | any = {
      ...(requestBody.userName.length > 0 && {
        userName: requestBody.userName
      }),
      ...(requestBody.userEmail.length > 0 && {
        userEmail: requestBody.userEmail
      }),
      ...(requestBody.userPassword.length > 0 && {
        userPassword: requestBody.userPassword
      }),
      ...(requestBody.userRole.length > 0 && {
        userRole: requestBody.userRole
      })
    }

    await UserModel.update(newData, {
      where: {
        deleted: { [Op.eq]: 0 },
        userId: { [Op.eq]: req.header('x-user-id') }
      }
    })

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    console.log(error.message)
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}

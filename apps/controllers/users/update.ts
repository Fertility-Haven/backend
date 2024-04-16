import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { UserModel, type UserAttributes } from '../../models/user'
import { CONFIG } from '../../configs'

export const updateUser = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as UserAttributes

  try {
    const user = await UserModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        userId: { [Op.eq]: req.body?.user?.userId }
      }
    })

    if (user == null) {
      const message = 'user not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    if ('userPassword' in requestBody) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      requestBody.userPassword = require('crypto')
        .createHash('sha1')
        .update(requestBody.userPassword + CONFIG.secret.passwordEncryption)
        .digest('hex')
    }

    const newData: UserAttributes | any = {
      ...(requestBody.userName?.length > 0 && {
        userName: requestBody.userName
      }),
      ...(requestBody.userEmail?.length > 0 && {
        userEmail: requestBody.userEmail
      }),
      ...(requestBody.userRole?.length > 0 && {
        userRole: requestBody.userRole
      }),
      ...(requestBody.userPassword?.length > 0 && {
        userPassword: requestBody.userPassword
      })
    }

    await UserModel.update(newData, {
      where: {
        deleted: { [Op.eq]: 0 },
        userId: { [Op.eq]: req.body?.user?.userId }
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

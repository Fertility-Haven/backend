import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { type UserAttributes, UserModel } from '../../models/user'
import { Pagination } from '../../utilities/pagination'
import { requestChecker } from '../../utilities/requestCheker'

export const findAllUser = async (req: any, res: Response): Promise<any> => {
  try {
    const page = new Pagination(
      parseInt(req.query.page) ?? 0,
      parseInt(req.query.size) ?? 10
    )

    let userRole = ''
    if (req.body?.user?.userRole !== 'admin') {
      userRole = req.body?.user?.userRole === 'patient' ? 'therapist' : 'patient'
    }

    const users = await UserModel.findAndCountAll({
      where: {
        deleted: { [Op.eq]: 0 },
        userId: { [Op.not]: req.body?.user?.userId },
        ...(Boolean(req.query.search) && {
          [Op.or]: [
            { userName: { [Op.like]: `%${req.query.search}%` } },
            { userEmail: { [Op.like]: `%${req.query.search}%` } }
          ]
        }),
        ...(Boolean(userRole.length > 0) && {
          userRole: { [Op.eq]: userRole }
        })
      },
      attributes: [
        'id',
        'userId',
        'userName',
        'userEmail',
        'userRole',
        'createdAt',
        'updatedAt'
      ],
      order: [['id', 'desc']],
      ...(req.query.pagination === 'true' && {
        limit: page.limit,
        offset: page.offset
      })
    })
    const response = ResponseData.default
    response.data = page.data(users)
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    console.log(error.message)
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}

export const findDetailUser = async (req: any, res: Response): Promise<any> => {
  const requestParams = req.params as UserAttributes

  const emptyField = requestChecker({
    requireList: ['userId'],
    requestData: requestParams
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }
  try {
    const user = await UserModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        userId: { [Op.eq]: requestParams.userId }
      },
      attributes: [
        'userId',
        'userName',
        'userEmail',
        'userRole',
        'createdAt',
        'updatedAt'
      ]
    })

    if (user == null) {
      const message = 'user not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const response = ResponseData.default
    response.data = user
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    console.log(error.message)
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}

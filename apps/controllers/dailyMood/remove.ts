import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { DailyMoodModel, type DailyMoodAttributes } from '../../models/dailyMood'

export const removeDailyMood = async (req: any, res: Response): Promise<any> => {
  const requestQuery = req.query as DailyMoodAttributes

  const emptyField = requestChecker({
    requireList: ['dailyMoodId'],
    requestData: requestQuery
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const result = await DailyMoodModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        dailyMoodUserId: { [Op.eq]: req.body?.user?.userId },
        dailyMoodId: { [Op.eq]: requestQuery.dailyMoodId }
      }
    })

    if (result == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    result.deleted = 1
    void result.save()

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}

import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { DailyMoodModel, type DailyMoodAttributes } from '../../models/dailyMood'

export const updateDailyMood = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as DailyMoodAttributes

  const emptyField = requestChecker({
    requireList: ['dailyMoodId'],
    requestData: requestBody
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
        dailyMoodId: { [Op.eq]: requestBody.dailyMoodId }
      }
    })

    if (result == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const newData: DailyMoodAttributes | any = {
      ...(requestBody.dailyMoodExpression.length > 0 && {
        dailyMoodExpression: requestBody.dailyMoodExpression
      })
    }

    await DailyMoodModel.update(newData, {
      where: {
        deleted: { [Op.eq]: 0 },
        dailyMoodId: { [Op.eq]: requestBody.dailyMoodId },
        dailyMoodUserId: { [Op.eq]: req.body?.user?.userId }
      }
    })

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}

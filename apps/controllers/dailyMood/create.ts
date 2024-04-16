import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import { DailyMoodModel, type DailyMoodAttributes } from '../../models/dailyMood'

export const createDailyMood = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as DailyMoodAttributes

  const emptyField = requestChecker({
    requireList: ['dailyMoodExpression'],
    requestData: requestBody
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    requestBody.dailyMoodId = uuidv4()
    requestBody.dailyMoodUserId = req.body?.user?.userId
    await DailyMoodModel.create(requestBody)

    const response = ResponseData.default
    const result = { message: 'success' }
    response.data = result
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}

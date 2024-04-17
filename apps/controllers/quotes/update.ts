import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { QuotesModel, type QuotesAttributes } from '../../models/quotes'

export const updateQuote = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as QuotesAttributes

  const emptyField = requestChecker({
    requireList: ['quoteId'],
    requestData: requestBody
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const result = await QuotesModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        quoteId: { [Op.eq]: requestBody.quoteId }
      }
    })

    if (result == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const newData: QuotesAttributes | any = {
      ...(requestBody.quoteText.length > 0 && {
        quoteText: requestBody.quoteText
      })
    }

    await QuotesModel.update(newData, {
      where: {
        deleted: { [Op.eq]: 0 },
        quoteId: { [Op.eq]: requestBody.quoteId }
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

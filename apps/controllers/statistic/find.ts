import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { UserModel } from '../../models/user'
import { DailyJournalModel } from '../../models/dailyJournal'
import { NotificationModel } from '../../models/notification'
import { DailyMoodModel } from '../../models/dailyMood'
import { QuotesModel } from '../../models/quotes'

export const findTotal = async (req: any, res: Response): Promise<any> => {
  try {
    const totalDailyJournal = await DailyJournalModel.count({
      where: {
        deleted: { [Op.eq]: 0 },
        dailyJournalUserId: { [Op.eq]: req.body?.user?.userId }
      }
    })

    const totalDailyMood = await DailyMoodModel.count({
      where: {
        deleted: { [Op.eq]: 0 },
        dailyMoodUserId: { [Op.eq]: req.body?.user?.userId }
      }
    })

    const totalNotification = await NotificationModel.count({
      where: {
        deleted: { [Op.eq]: 0 }
      }
    })

    const totalQuote = await QuotesModel.count({
      where: {
        deleted: { [Op.eq]: 0 }
      }
    })

    const totalTherapist = await UserModel.count({
      where: {
        deleted: { [Op.eq]: 0 },
        userRole: { [Op.eq]: 'therapist' }
      }
    })

    const totalPatient = await UserModel.count({
      where: {
        deleted: { [Op.eq]: 0 },
        userRole: { [Op.eq]: 'patient' }
      }
    })

    const totalAdmin = await UserModel.count({
      where: {
        deleted: { [Op.eq]: 0 },
        userRole: { [Op.eq]: 'admin' }
      }
    })

    const response = ResponseData.default

    response.data = {
      totalDailyJournal,
      totalDailyMood,
      totalNotification,
      totalQuote,
      totalPatient,
      totalTherapist,
      totalAdmin
    }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}

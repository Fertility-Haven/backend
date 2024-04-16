/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import { dailyJournalController } from '../../controllers/dailyJournal'

export const dailyJournalRoutes = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/daily-journals', middleware.useAuthorization, router)

  router.get(
    '/',
    async (req: Request, res: Response) => await dailyJournalController.findAll(req, res)
  )
  router.get(
    '/detail/:dailyJournalId',
    async (req: Request, res: Response) =>
      await dailyJournalController.findDetail(req, res)
  )
  router.post(
    '/',
    async (req: Request, res: Response) => await dailyJournalController.create(req, res)
  )
  router.patch(
    '/',
    async (req: Request, res: Response) => await dailyJournalController.update(req, res)
  )
  router.delete(
    '/',
    async (req: Request, res: Response) => await dailyJournalController.remove(req, res)
  )
}

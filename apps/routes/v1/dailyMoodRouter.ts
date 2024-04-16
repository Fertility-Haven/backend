/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import { dailyMoodController } from '../../controllers/dailyMood'

export const dailyMoodRoutes = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/daily-moods', middleware.useAuthorization, router)

  router.get(
    '/',
    async (req: Request, res: Response) => await dailyMoodController.findAll(req, res)
  )
  router.get(
    '/detail/:dailyMoodlId',
    async (req: Request, res: Response) => await dailyMoodController.findDetail(req, res)
  )
  router.post(
    '/',
    async (req: Request, res: Response) => await dailyMoodController.create(req, res)
  )
  router.patch(
    '/',
    async (req: Request, res: Response) => await dailyMoodController.update(req, res)
  )
  router.delete(
    '/',
    async (req: Request, res: Response) => await dailyMoodController.remove(req, res)
  )
}

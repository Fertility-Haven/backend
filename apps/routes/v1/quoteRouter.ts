/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import { quotesController } from '../../controllers/quotes'

export const quoteRoutes = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/quotes', middleware.useAuthorization, router)

  router.get(
    '/',
    async (req: Request, res: Response) => await quotesController.findAll(req, res)
  )
}

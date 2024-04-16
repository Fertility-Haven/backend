/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Express, type Request, type Response } from 'express'
import { index } from '../../controllers'
import { userRoutes } from './userRouter'
import { dailyJournalRoutes } from './dailyJournalRouter'
import { dailyMoodRoutes } from './dailyMoodRouter'
import { quoteRoutes } from './quoteRouter'

export const appRouterV1 = (app: Express) => {
  app.get('/api/v1', async (req: Request, res: Response) => await index(req, res))
  userRoutes(app)
  dailyJournalRoutes(app)
  dailyMoodRoutes(app)
  quoteRoutes(app)
}

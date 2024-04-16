/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Express, type Request, type Response } from 'express'
import { index } from '../../controllers'
import { userRoutes } from './userRouter'
import { myProfileRouter } from './myProfileRouter'
import { dailyJournalRoutes } from './dailyJournalRouter'

export const appRouterV1 = (app: Express) => {
  app.get('/api/v1', async (req: Request, res: Response) => await index(req, res))
  myProfileRouter(app)
  userRoutes(app)
  dailyJournalRoutes(app)
}

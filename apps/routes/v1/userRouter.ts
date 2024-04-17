/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import express, { type Express, type Request, type Response } from 'express'
import { UsersController } from '../../controllers/users'
import { middleware } from '../../middlewares'

export const userRoutes = (app: Express): void => {
  const router = express.Router()
  app.use('/api/v1/users', router)

  router.get(
    '/',
    middleware.useAuthorization,
    async (req: Request, res: Response) => await UsersController.findAll(req, res)
  )
  router.get(
    '/detail/:userId',
    middleware.useAuthorization,
    async (req: Request, res: Response) => await UsersController.findDetail(req, res)
  )
  router.post(
    '/login',
    async (req: Request, res: Response) => await UsersController.login(req, res)
  )
  router.post(
    '/register',
    async (req: Request, res: Response) => await UsersController.register(req, res)
  )
  router.patch(
    '/',
    middleware.useAuthorization,
    async (req: Request, res: Response) => await UsersController.update(req, res)
  )
  router.delete(
    '/',
    middleware.useAuthorization,
    async (req: Request, res: Response) => await UsersController.remove(req, res)
  )

  router.get(
    '/my-profile',
    middleware.useAuthorization,
    async (req: Request, res: Response) => await UsersController.findMyProfile(req, res)
  )

  router.patch(
    '/my-profile',
    middleware.useAuthorization,
    async (req: Request, res: Response) => await UsersController.updateMyProfile(req, res)
  )
}

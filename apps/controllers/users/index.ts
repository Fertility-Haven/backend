import { findAllAdmin, findAllUser, findDetailAdmin, findDetailUser } from './find'
import { userLogin } from './login'
import { userRegister } from './register'
import { removeUser } from './remove'
import { updateUser } from './update'

export const UsersController = {
  login: userLogin,
  register: userRegister,
  findAll: findAllUser,
  findAdmins: findAllAdmin,
  findDetailUser,
  findDetailAdmin,
  update: updateUser,
  remove: removeUser
}

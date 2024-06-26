import { findAllUser, findDetailUser } from './find'
import { userLogin } from './login'
import { findMyProfile, updateMyProfile } from './myProfile'
import { userRegister } from './register'
import { removeUser } from './remove'
import { updateUser } from './update'

export const UsersController = {
  login: userLogin,
  register: userRegister,
  findAll: findAllUser,
  findDetail: findDetailUser,
  update: updateUser,
  remove: removeUser,
  findMyProfile,
  updateMyProfile
}

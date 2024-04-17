import jwt from 'jsonwebtoken'
import { CONFIG } from '../configs'

export interface JwtPayloadTypes {
  userId: string
  userRole: 'patient' | 'therapist' | 'admin'
}

export const generateAccessToken = (user: JwtPayloadTypes): any => {
  return jwt.sign(user, CONFIG.secret.token ?? '')
}

export const verifyAccessToken = (token: string): any => {
  try {
    return jwt.verify(token, CONFIG.secret.token ?? '')
  } catch {
    return false
  }
}

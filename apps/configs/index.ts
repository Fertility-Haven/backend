import dotenv from 'dotenv'
dotenv.config()

export const CONFIG = {
  appVersion: process.env.APP_VERSION,
  appSemantic: process.env.APP_SEMANTIC,
  appMode: process.env.APP_MODE ?? 'development',
  appUrl: process.env.APP_URL,
  env: process.env.APP_ENV,
  port: process.env.APP_PORT ?? 8000,
  log: process.env.APP_LOG === 'true',
  secret: {
    keyEncryption: process.env.SECRET_KEY_ENCRYPTION,
    passwordEncryption: process.env.SECRET_PASSWORD_ENCRYPTION,
    pinEncryption: process.env.SECRET_PIN_ENCRYPTION,
    token: process.env.TOKEN_SECRET
  },
  dataBase: {
    development: {
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: process.env.DB_LOG === 'true'
    },
    testing: {
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: process.env.DB_LOG === 'true'
    },
    production: {
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: process.env.DB_LOG === 'true'
    }
  }
}
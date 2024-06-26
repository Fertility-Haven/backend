/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      ...ZygoteModel,
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      user_name: {
        type: DataTypes.STRING(80),
        allowNull: false
      },
      user_email: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      user_password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_photo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      user_role: {
        type: DataTypes.ENUM('patient', 'therapist', 'admin'),
        allowNull: false,
        defaultValue: 'patient'
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('users')
  }
}

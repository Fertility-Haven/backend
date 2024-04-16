/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('daily_mood', {
      ...ZygoteModel,
      daily_mood_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      daily_mood_user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      daily_mood_expression: {
        type: DataTypes.ENUM(
          'Angry',
          'Happy',
          'Sad',
          'Afraid',
          'Anxious',
          'Confused',
          'Relaxed',
          'Disappointed'
        ),
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('daily_mood')
  }
}

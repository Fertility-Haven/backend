/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('booking', {
      ...ZygoteModel,
      booking_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      booking_patient_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      booking_therapist_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      booking_status: {
        type: DataTypes.ENUM('waiting', 'accepted', 'cancel'),
        allowNull: false,
        defaultValue: 'waiting'
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('booking')
  }
}

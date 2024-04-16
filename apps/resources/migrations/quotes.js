/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('quotes', {
      ...ZygoteModel,
      quotes_text: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('quotes')
  }
}

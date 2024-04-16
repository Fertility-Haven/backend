/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        user_id: '66aba427-4b2b-437e-b427-65f2b3f1eca2',
        user_name: 'User',
        user_email: 'user@mail.com',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
      },
      {
        user_id: '8f05dd7e-cda7-41fb-bc77-f6bb1eaf1fdc',
        user_name: 'Jack',
        user_email: 'jack@mail.com',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}

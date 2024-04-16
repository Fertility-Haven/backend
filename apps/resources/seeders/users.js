/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        user_id: '66aba427-4b2b-437e-b427-3er',
        user_name: 'Patient 1',
        user_email: 'patient1@mail.com',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        user_role: 'patient'
      },
      {
        user_id: 'sdsdsds-ererererer-437e-sdsd',
        user_name: 'Patient 2',
        user_email: 'patient2@mail.com',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        user_role: 'patient'
      },
      {
        user_id: '8f05dd7e-cda7-41fb-1eaf1fdc',
        user_name: 'therapist 1',
        user_email: 'therapist1@mail.com',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        user_role: 'therapist'
      },
      {
        user_id: 'sdsd-a7-41fb-bc77-sdsdsd',
        user_name: 'therapist 2',
        user_email: 'therapist2@mail.com',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        user_role: 'therapist'
      },
      {
        user_id: 'sdsd32432-41fb-bc77-sds3ew',
        user_name: 'Admin',
        user_email: 'admin@mail.com',
        user_password: 'cf7c906bfbb48e72288fc016bac0e6ed58b0dc2a',
        user_photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        user_role: 'admin'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}

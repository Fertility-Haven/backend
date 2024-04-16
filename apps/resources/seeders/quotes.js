/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('quotes', [
      {
        quotes_text:
          'Believe in the power of your dreams; they are the blueprints of your destiny.'
      },
      {
        quotes_text:
          'Embrace the journey of self-discovery, for within you lies the universe waiting to be explored.'
      },
      {
        quotes_text:
          'In the dance of life, let your passion be the rhythm that guides your steps.'
      },
      {
        quotes_text:
          'Every obstacle is an opportunity in disguise; embrace them as stepping stones to greatness.'
      },
      {
        quotes_text:
          'The greatest act of courage is to believe in yourself when no one else does.'
      },
      {
        quotes_text:
          'Your potential is limitless; dare to defy the boundaries of what you think is possible.'
      },
      {
        quotes_text:
          'Chase your goals with the ferocity of a lion and the grace of a gazelle.'
      },
      {
        quotes_text:
          'In the garden of life, sow seeds of kindness and watch as miracles bloom.'
      },
      {
        quotes_text:
          "The sky is not the limit; it's just the beginning of your boundless potential."
      },
      {
        quotes_text:
          'Let your actions be the brushstrokes painting the masterpiece of your legacy.'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('quotes', null, {})
  }
}

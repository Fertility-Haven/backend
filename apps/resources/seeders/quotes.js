/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('quotes', [
      {
        quote_id: 'wewewq123-23we-232132',
        quote_text:
          'Believe in the power of your dreams; they are the blueprints of your destiny.'
      },
      {
        quote_id: 'asdfgh789-45ty-456ty',
        quote_text:
          'Embrace the journey of self-discovery, for within you lies the universe waiting to be explored.'
      },
      {
        quote_id: 'zxcvbn234-67gh-890qw',
        quote_text:
          'In the dance of life, let your passion be the rhythm that guides your steps.'
      },
      {
        quote_id: 'mnbvcxz567-89bn-123lk',
        quote_text:
          'Every obstacle is an opportunity in disguise; embrace them as stepping stones to greatness.'
      },
      {
        quote_id: 'poiuyt098-12cv-345gf',
        quote_text:
          'The greatest act of courage is to believe in yourself when no one else does.'
      },
      {
        quote_id: 'lkjhgf567-43sd-890jk',
        quote_text:
          'Your potential is limitless; dare to defy the boundaries of what you think is possible.'
      },
      {
        quote_id: 'poiuyt789-54df-678hj',
        quote_text:
          'Chase your goals with the ferocity of a lion and the grace of a gazelle.'
      },
      {
        quote_id: 'mnbvcxz123-76er-098yu',
        quote_text:
          'In the garden of life, sow seeds of kindness and watch as miracles bloom.'
      },
      {
        quote_id: 'zxcvbn345-89ui-567qw',
        quote_text:
          "The sky is not the limit; it's just the beginning of your boundless potential."
      },
      {
        quote_id: 'asdfgh567-12fd-987vb',
        quote_text:
          'Let your actions be the brushstrokes painting the masterpiece of your legacy.'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('quotes', null, {})
  }
}

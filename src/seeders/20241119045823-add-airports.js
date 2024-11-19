'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert(
      'Airports',
      [
  {
    name: "Chhatrapati Shivaji Maharaj International Airport",
    cityId: 14,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Juhu Aerodrome",
    cityId: 14,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Kempegowda International Airport",
    cityId: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Hindustan Aeronautics Limited Airport",
    cityId: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Chennai International Airport",
    cityId: 16,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Netaji Subhas Chandra Bose International Airport",
    cityId: 17,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Rajiv Gandhi International Airport",
    cityId: 18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Cochin International Airport",
    cityId: 19,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Sardar Vallabhbhai Patel International Airport",
    cityId: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Pune International Airport",
    cityId: 21,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Goa International Airport",
    cityId: 22,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Jaipur International Airport",
    cityId: 23,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Lucknow Charan Singh International Airport",
    cityId: 24,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Devi Ahilya Bai Holkar International Airport",
    cityId: 25,
    createdAt: new Date(),
    updatedAt: new Date
  }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('Airports', null, {});
  }
};

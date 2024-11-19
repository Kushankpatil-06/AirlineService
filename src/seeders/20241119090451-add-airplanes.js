'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
  {
    capacity: '200',
    modelNumber: 'Boeing A320',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    capacity: '240',
    modelNumber: 'Boeing 737 MAX',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    capacity: '350',
    modelNumber: 'Boeing 787 Dreamliner',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    capacity: '180',
    modelNumber: 'Airbus A319',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    capacity: '300',
    modelNumber: 'Airbus A330',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    capacity: '400',
    modelNumber: 'Boeing 777',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    capacity: '850',
    modelNumber: 'Airbus A380',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    capacity: '210',
    modelNumber: 'Embraer E195-E2',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    capacity: '120',
    modelNumber: 'Bombardier CRJ900',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    capacity: '150',
    modelNumber: 'ATR 72',
    createdAt: new Date(),
    updatedAt: new Date()
  }
], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

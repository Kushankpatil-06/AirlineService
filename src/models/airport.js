'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association here
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
      });
    }
  }

  Airport.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false, // Correct placement of allowNull
      },
      address: DataTypes.STRING,
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Added missing allowNull for cityId
      },
    },
    {
      sequelize,
      modelName: 'Airport',
    }
  );

  return Airport;
};

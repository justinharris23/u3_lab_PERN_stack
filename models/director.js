"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Director.hasMany(models.Movie, {
        foreignKey: "directorId",
        as: "directormovies",
        // onDelete: "cascade",
        // onUpdate: "cascade",
      })
    }
  }
  Director.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthYear: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Director",
      tableName: "directors",
    }
  )
  return Director
}

"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Actor.belongsToMany(models.Movie, {
        through: models.ActorMovie,
        foreignKey: "actorId",
        as: "actor__in_movies",
      })
    }
  }
  Actor.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthYear: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Actor",
      tableName: "actors",
    }
  )
  return Actor
}

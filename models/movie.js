"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.Actor, {
        through: models.ActorMovie,
        foreignKey: "movieId",
        as: "movie_actor",
        onDelete: "cascade",
        onUpdate: "cascade",
      })
      // define association here
      Movie.belongsTo(models.Director, {
        foreignKey: "directorId",
        as: "director",
        // onDelete: "cascade",
        // onUpdate: "cascade",
      })
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      directorId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "directors",
          key: "id",
        },
      },
      releaseDate: DataTypes.INTEGER,
      genre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
      tableName: "movies",
    }
  )
  return Movie
}

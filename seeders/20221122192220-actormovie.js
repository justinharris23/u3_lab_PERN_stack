"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "actor_movies",
      [
        {
          movieId: 1,
          actorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 2,
          actorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 3,
          actorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 4,
          actorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 4,
          actorId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 5,
          actorId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}

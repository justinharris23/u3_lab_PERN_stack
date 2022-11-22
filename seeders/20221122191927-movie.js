"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "movies",
      [
        {
          title: "Forrest Gump",
          // director: "Robert Zemeckis",
          directorId: 2,
          releaseDate: 1994,
          genre: "Drama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Jerry Maguire",
          // director: "Cameron Crowe",
          directorId: 4,
          releaseDate: 1996,
          genre: "Drama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Oceans Eleven",
          // director: "Steven Soderbergh",
          directorId: 3,
          releaseDate: 2001,
          genre: "Crime",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Catch Me If You Can",
          // director: "Steven Spielberg",
          directorId: 1,
          releaseDate: 2002,
          genre: "Crime",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Jaws",
          // director: "Steven Spielberg",
          directorId: 1,
          releaseDate: 1975,
          genre: "Crime",
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

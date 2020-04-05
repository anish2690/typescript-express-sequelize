"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("app_users", "language_id", {
      type: Sequelize.UUID,
      references: {
        model: "languages", // name of Target model
        key: "id", // key in Target model that we're referencing
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "app_users", // name of Source model
      "language_id" // key we want to remove
    );
  },
};

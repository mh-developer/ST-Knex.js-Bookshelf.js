const knex = require("knex")(
    require("../../infrastructure/knexfile").developmentCWD
);
const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf;

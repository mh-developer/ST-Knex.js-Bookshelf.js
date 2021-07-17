const bookshelf = require("../shared/bookshelf.shared");

const Location = bookshelf.Model.extend({
    tableName: "locations",
    idAttribute: "id",
    user() {
        return this.belongsTo("User");
    },
});

module.exports = bookshelf.model("Location", Location);

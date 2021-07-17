const bookshelf = require("../shared/bookshelf.shared");

const User = bookshelf.Model.extend({
    tableName: "users",
    idAttribute: "id",
    locations() {
        return this.hasMany("Location");
    },
});

module.exports = bookshelf.model("User", User);

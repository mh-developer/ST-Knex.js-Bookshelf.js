exports.up = function (knex) {
    return knex.schema
        .createTable("users", (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.string("surname").notNullable();
            table.string("email").notNullable();
        })
        .createTable("locations", (table) => {
            table.increments("id").primary();
            table.integer("userId").references("id").inTable("users");
            table.string("longitude").notNullable();
            table.string("latitude").notNullable();
            table.timestamp("timestamp").defaultTo(knex.fn.now());
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users").dropTable("locations");
};

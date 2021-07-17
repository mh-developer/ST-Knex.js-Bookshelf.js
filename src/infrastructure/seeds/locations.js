const faker = require("faker");

exports.seed = (knex) => {
    return knex("users")
        .del()
        .then(() => {
            return knex("users")
                .insert(generateUsers())
                .then(() => {
                    return knex("locations").insert(generateLocations(20));
                });
        });
};

const generateUsers = () => {
    return [
        {
            id: 1,
            name: "Janez",
            surname: "Kranjski",
            email: "janez.kranjski@gmail.com",
        },
        {
            id: 2,
            name: "Cristiano",
            surname: "Penaldo",
            email: "cristiano.penaldo@gmail.com",
        },
        {
            id: 3,
            name: "Lionel",
            surname: "Lessi",
            email: "lionel.lessi@gmail.com",
        },
        {
            id: 4,
            name: "Arturo",
            surname: "Zidar",
            email: "arturo.zidar@gmail.com",
        },
    ];
};

const generateLocations = (count) => {
    let locations = [];

    for (let i = 0; i < count; i++) {
        locations.push({
            id: i + 1,
            userId: faker.random.number({ min: 1, max: 4 }),
            longitude: faker.address.longitude(),
            latitude: faker.address.latitude(),
            timestamp: faker.date.past(2),
        });
    }
    return locations;
};

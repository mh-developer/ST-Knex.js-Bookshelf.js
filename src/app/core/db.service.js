const Location = require("../../domain/locationsAggregate/location.model");
const User = require("../../domain/usersAggregate/user.model");

const unitOfWork = {
    User,
    Location,
};

module.exports = unitOfWork;
